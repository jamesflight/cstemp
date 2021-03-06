<?php

	query_posts('posts_per_page=10');

	if(have_posts()){

		echo '<h3>'.__('Things you might like', 'bluth').'</h3>';
    	echo '<ul id="recent-posts">';
		
		while(have_posts()){

			the_post(); 
		    $post_format = get_post_format(get_the_ID());
		    $post_format = ($post_format) ? $post_format : 'standard'; 

			echo '<li>';


				$icon = of_get_option($post_format.'_icon', false);
				$icon_default = array('standard' => 'icon-calendar-3', 'audio' => 'icon-volume-up', 'quote' => 'icon-quote-left', 'link' => 'icon-link', 'image' => 'icon-picture-1', 'gallery' => 'icon-picture');
				$icon = ($icon !== false) ? $icon : $icon_default[$post_format];

				echo '<div class="recent-icon">';
				echo '<a href="'.get_permalink().'" rel="bookmark">';
				echo '<div class="tab_icon tab_'.(empty($post_format) ? 'standard' : $post_format).'">';
				echo '<i class="'.$icon.'"></i>';
				echo '</div>';
				echo '</a>';
				echo '</div>';

				echo '<div class="recent-content">';
				echo '<h4><a href="'.get_permalink().'" rel="bookmark" title="'.get_the_title().'">'.get_the_title().'</a></h4>';
	    	 	$exerpt = get_the_excerpt(); 
	    	 	if(strlen($exerpt) > 155){
	    	 		echo '<p>'.substr($exerpt, 0, 155).'...</p>';
	    	 	}else{
	    	 		echo '<p>'.$exerpt.'</p>';
	    	 	}
	    	 	echo '</div>';
					
			echo '</li>';
		}
		echo '</ul>';
	}