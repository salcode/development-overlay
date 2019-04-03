(function() {

  var css = 'left: 50%; ',
    src = 'default.jpg',

    properties = {
      'display': 'block',
      'opacity': '0.5',
      'margin-left': '0',
      'position': 'absolute',
      'top': '0',
      'transform': 'translateX(-50%)',
      'z-index': '99999'
  },

  propertiesThatNeedPx = [
    'left',
    'margin-left',
    'top'
  ],
  image = document.createElement("img"),
  toggleBtn = document.createElement("button");

  // Update image src if present as URL param.
  if ( getUrlParam( 'src' ) ) {
    src = getUrlParam( 'src' );
  }

  // Add src to image.
  image.src = getImgSrcValue(src);

  // Update CSS.
  Object.keys(properties).forEach(function(key) {

    // Get URL parameter.
    // Use URL param 'left' for our 'margin-left' value.
    var value = getUrlParam('margin-left' === key ? 'left' : key);

    // Use default value from properties as fallback.
    value = value ? value : properties[key];

    // Add 'px' to the value if necessary.
    value = needsPx(key) ? value + 'px' : value;

    // Add to CSS string.
    css += key + ': ' + value + '; ';
  });

  // Apply CSS styles.
  image.style = css;

  // Add image to page.
  document.body.appendChild(image);

  // Add toggle button.
  toggleBtn.className = 'btn btn-warning';
  toggleBtn.style = 'left: 20px; position: fixed; top: 80px; z-index: 99999;'
  toggleBtn.textContent = 'Toggle';

  // Listen for button click.
  toggleBtn.addEventListener('click', toggleImageDisplay);

  // Add button to page.
  document.body.appendChild(toggleBtn);

  function toggleImageDisplay() {
    if ('block' === image.style.display) {
      image.style.display = 'none';
    } else {
      image.style.display = 'block';
    }
  }

  function getUrlParam( key ) {
    var urlParams = new URLSearchParams(
      window.location.href.substr(
        window.location.href.indexOf('?') + 1
      )
    );
    return urlParams.get( key );
  }

  function needsPx(key) {
    return -1 !== propertiesThatNeedPx.indexOf(key);
  }

  function getImgSrcValue(src) {
    if (
      'undefined' !== typeof feDevelopmentOverlay &&
      'undefined' !== typeof feDevelopmentOverlay.path
    ) {
      // Use path provided by feDevelopmentOverlay (via WordPress).
      return feDevelopmentOverlay.path + '/' + src;
    }
    // Use default path.
    return './overlay/' + src;
  }

}());
