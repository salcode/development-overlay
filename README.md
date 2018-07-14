# WordPress Development Overlay Plugin

WordPress plugin to overlay an image on your page during development.

Once you activate this plugin, on the front-end of your website you'll get a
"Toggle" button.  Clicking the "Toggle" button will hide/reveal the `default.jpg` image from the `/images` directory of this plugin.

See [https://salferrarello.com/wordpress-development-overlay/](https://salferrarello.com/wordpress-development-overlay/)

## Configuration

You can replace `default.jpg` with the image you want to overlay on your website during development.

### Advanced Configuration

You can pass further configuration into this plugin via URL parameters.

For example, if the site your are working on is `https://example.test` and you 
want to use a second image without overwriting the first, you can append `?src=another-image.jpg` to load `another-image.jpg` from the images directory of this
plugin.

```
https://example.test?src=another-image.jpg
```

If the image needs to be nudged to the right you can pass in the URL parameter `left`.

e.g.

```
# Add 10px to the left of the image
https://example.test?left=10

# Reduce the space on the left of the image by 20px
https://example.test?left=-20
```

#### Supported URL parameters

The following are supported URL parameters and their default values.

- `src` (`default.jpg`)
- `left` (`0`)
- `top` (`0`)
- `opacity` (`0.5`)
- `display` (`block`)
- `z-index` (`99999`)

## Contributors

- [Sal Ferrarello](https://salferrarello.com) / [@salcode](https://github.com/salcode)
