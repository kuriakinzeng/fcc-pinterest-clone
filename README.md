# Free Code Camp's Manage a Book Trading Club Basecamp Challenge

**tl;dr:** This app allows users trade books

## User Stories:
1. As an unauthenticated user, I can login with Twitter.
2. As an authenticated user, I can link to images.
3. As an authenticated user, I can delete images that I've linked to.
4. As an authenticated user, I can see a Pinterest-style wall of all the images I've linked to.
5. As an unauthenticated user, I can browse other users' walls of images.
6. As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image. (can use jQuery broken image detection)

## Architecture
The app is built on Express framework. It uses [hackathon-starter](https://github.com/sahat/hackathon-starter) as a boilerplate, S3 to host images, and Masonry library to display pins in grids.

## Run locally
```npm install && npm run dev```

## Deployment
TODO:
1. Change S3 ```<AllowedOrigin>``` config

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Future Work
TODO

## Credits

Author: [Kuriakin Zeng](http://kuriakinzeng.com)

