<?php
	// Define the version so we can easily replace it throughout the theme
	define( 'BREEZE_VERSION', 1.44 );
	define( 'BLUTHEMES', true );	
	// Error reporting ON
	// ini_set('display_errors', '1'); 
	// error_reporting(E_ALL | E_STRICT);
	/*  Set the content width based on the theme's design and stylesheet  */
	if ( !isset( $content_width ) ){ $content_width = 750; }

			
	/*  Register main menu for Wordpress use  */
	if(!function_exists('bluth_register_nav_menu')){
		function bluth_register_nav_menu() {
			register_nav_menus(  array( 'primary'	=>	'Primary Menu' ) ); // Register the Primary menu  
		}
	}
	add_action( 'after_setup_theme', 'bluth_register_nav_menu' );

	/* Bluthcodes */
	// only load if there isn't a plugin already loaded
	if(!function_exists('bluth_pullquote')){
		include_once 'assets/plugins/bluthcodes/codes.php'; 
	}
	/* Custom bluth assets  */
	require_once('inc/assets.php');
	/* Custom bluth functions  */
	require_once('inc/custom-functions.php');
	/* Blu Portfolio */
	include_once 'assets/plugins/blu_portfolio/blu-portfolio.php'; 
	// Adding shortcode for Dropcaps
	function dropcap_func( $atts, $content = null ) {
		return '<p class="dropcaps">' . $content . '</p>';
	}
	
	add_shortcode( 'drop', 'dropcap_func' );
	
	// Adding shortcode for MailChimp CTA
	
	function mailcta_func( $atts, $content = null ) {
		return '					<div class="morris" style="padding:20px;">
                                        <div class="black-box">
                                            <h2 class="white">' . $cta_title = get_field('cta_title') . '</h2>
                                            <h4 class="white">Get Advice Sent Straight To Your Mailbox</h4>
                                            <div id="mc_embed_signup" style="background:transparent;">
                                                <form id="mc-embedded-subscribe-form" class="validate" action="//careselector.us8.list-manage.com/subscribe/post?u=9aac706c09dc6fb77bf18fafd&amp;id=1af3e10fee" method="post" name="mc-embedded-subscribe-form" novalidate target="_blank" style="padding:0;">
                                                <div id="mc_embed_signup_scroll">                                
                                                    <input style="width: 100%;max-width:355px;padding:2px 10px;" id="mce-EMAIL" class="email" name="EMAIL" required type="email" value="" placeholder="email address" />   
                                                    <div style="position: absolute; left: -5000px;">
                                                        <input tabindex="-1" name="b_9aac706c09dc6fb77bf18fafd_1af3e10fee" type="text" value="" />
                                                    </div>
                                                    <div class="clear">
                                                        <input style="color: #FFF;  background: #F7941D;  font-weight: bold;  font-size: 20px;  padding: 15px 40px 15px 40px;  margin-top: 20px;  height: 100%;" id="mc-embedded-subscribe" class="button" name="Subscribe" type="submit" value="Sign Up Now" />
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>   
		';
	}
	
	add_shortcode( 'mailcta', 'mailcta_func' );

	// Adding shortcode for Home Page CTA
	function homecta_func( $atts, $content = null ) {
		return '					<div class="morris" style="padding:20px;">
                                        <div class="black-box">
                                           		<h2 class="white" style="margin-bottom:30px;">' . $cta_title = get_field('cta_title') . '</h2>
                                            	<a href="http://careselector.com" style="border-radius:10px;color: #FFF;  background: #F7941D;  font-weight: bold;  font-size: 20px;  padding: 15px 40px 15px 40px;  margin-top: 20px;  height: 100%;" class="button">Compare Homes Now</a>  
												                                         
                                        </div>
                                    </div>   
		';
	}
	
	add_shortcode( 'homecta', 'homecta_func' );
