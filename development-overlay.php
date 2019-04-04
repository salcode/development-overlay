<?php
/**
 * Plugin Name:     Development Overlay
 * Plugin URI:      https://salferrarello.com/wordpress-development-overlay/
 * Description:     Overlay an image on your page during development
 * Author:          Sal Ferrarello
 * Author URI:      https://salferrarello.com
 * Text Domain:     development-overlay
 * Domain Path:     /languages
 * Version:         1.0.0
 *
 * @package         development-overlay
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action( 'wp_enqueue_scripts', 'fe_development_overlay_enqueue_js' );

/**
 * Enqueue JavaScript
 */
function fe_development_overlay_enqueue_js() {
	wp_enqueue_script(
		'fe-development-overlay',
		plugins_url( 'js/development-overlay.js', __FILE__ ),
		array(),
		'1.0.0',
		true
	);

	wp_localize_script(
		'fe-development-overlay',
		// A name we makeup to avoid our PHP values colliding with others.
		'feDevelopmentOverlay',
		// A key/value array of values to pass from PHP to JavaScript.
		array(
			'path' => plugins_url( 'images', __FILE__ ),
		)
	);
}
