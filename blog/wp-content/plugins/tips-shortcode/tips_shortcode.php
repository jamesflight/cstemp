<?php
/**
 * Plugin Name: Tips Shortcode
 * Plugin URI: http://mylocalwebstop.com
 * Description: Shortcode to create tip box
 * Author: Frank Corso
 * Author URI: http://mylocalwebstop.com
 * Version: 0.2.1
 *
 * Disclaimer of Warranties
 * The plugin is provided "as is". My Local Webstop and its suppliers and licensors hereby disclaim all warranties of any kind, 
 * express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. 
 * Neither My Local Webstop nor its suppliers and licensors, makes any warranty that the plugin will be error free or that access thereto will be continuous or uninterrupted.
 * You understand that you install, operate, and uninstall the plugin at your own discretion and risk.
 * 
 * @author Frank Corso
 * @version 0.2.1
 */

/**
 * Takes content from shortcode and adds a tip box around it
 * 
 * @access public
 * @since 0.1.0
 * @return string The string of the div tipBox and its contents
 */
function tip_block_shortcode( $atts, $content = null ) {
	extract(shortcode_atts(array(
		'color' => '#fff8c4'
	), $atts));
	wp_enqueue_style( 'dashicons' );
	wp_enqueue_style( 'ts_style', plugins_url('includes/ts_stylesheet.css', __FILE__) );
	return "<div class='tipBox' style='background:$color;'><span class='dashicons dashicons-lightbulb'></span>$content</div>";
}

add_shortcode( 'tip', 'tip_block_shortcode' );
?>
