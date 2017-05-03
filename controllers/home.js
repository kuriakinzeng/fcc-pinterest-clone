const validUrl = require('valid-url');
const request = require('request');
const Pin = require('../models/Pin');
const ObjectId = require('mongoose').Types.ObjectId;


/**
 * GET /
 * Home page.
 */
exports.index = (req, res, next) => {
  Pin.find().populate('owner').exec((err, pins) => {
    if (err) return next(err);
    // console.log(pins);
    res.render('home', {
      title: 'Home',
      homePage: true,
      pins
    });
  });
};

exports.getPinsByUserId = (req, res, next) => {
  const userId = new ObjectId(req.params.userId);
  Pin.find({ owner: userId }).populate('owner').exec((err, pins) => {
    if (err) return next(err);
    // console.log(pins);
    res.render('home', {
      title: 'Pins',
      homePage: false,
      pins
    });
  });
}

exports.postPin = (req, res, next) => {
  const { url, description } = req.body;
  if (validUrl.isUri(url)) {
    _verifyIfImage(url, function (url) {
      Pin.create({
        owner: req.user.id,
        url,
        description
      }, (err, pin) => {
        if (err) return next(err);
        req.flash('success', { msg: 'Link pinned.' });
        res.redirect('/');
      });
    });
  }
}

exports.deletePin = (req, res, next) => {
  const { id } = req.body;
  Pin.findByIdAndRemove(id, (err) => {
    if (err) return next(err);
    req.flash('success', { msg: 'Link removed.' });
    res.redirect('/pins/'+req.user.id);
  });
}

const _verifyIfImage = function (url, callback) {
  const imageTypes = ['image/png', 'image/jpg'];
  request.head(url, function (err, res, body) {
    if (imageTypes.indexOf(res.headers['content-type']) > -1) {
      callback(url);
    } else {
      callback('http://placehold.it/300x150');
    }
  });
};