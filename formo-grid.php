<?php
/**
 * Plugin Name:       Formo Grid
 * Description:       Adding grid support to the column blocks.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       formo-grid
 *
 * @package           formo-grid-package
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */


if ( !function_exists('addformogrid') ) {
  // Adding support for gridlines and span- classes in Gutenberg
  function addformogrid(){
    wp_enqueue_script(
      'addformogrid',
      plugins_url('/build/index.js', __FILE__),
      ['wp-edit-post']
    );
  }
  add_action('enqueue_block_editor_assets', 'addformogrid');
}