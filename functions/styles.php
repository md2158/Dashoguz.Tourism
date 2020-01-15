<?php 
function theme_enqueue_scripts() {
    // Styles
    wp_enqueue_style( 'Font_Awesome', 'https://use.fontawesome.com/releases/v5.7.0/css/all.css' );
    wp_enqueue_style( 'Bootstrap_css', get_template_directory_uri() . '/css/bootstrap.min.css' );
    wp_enqueue_style( 'MDB', get_template_directory_uri() . '/css/mdb.min.css' );
    wp_enqueue_style( 'Font-Geometria', get_template_directory_uri() . '/font/geometria/stylesheet.css?v=0.1' );
    wp_enqueue_style( 'Style', get_template_directory_uri() . '/style.css?v=0.2' );
    wp_enqueue_style( 'Swiper', get_template_directory_uri() . '/css/swiper.min.css' );
    wp_enqueue_style( 'Fancybox_css', get_template_directory_uri() . '/css/fancybox.css' );
    // wp_enqueue_style( 'Tachil-Web-Icons', get_template_directory_uri() . '/font/tachil-icons/styles.css' );
    // wp_enqueue_style( 'Shkaf-Icons', get_template_directory_uri() . '/font/shkaf-icons/styles.css' );
    // Scripts
    wp_enqueue_script( 'jQuery', get_template_directory_uri() . '/js/jquery-3.4.1.min.js', array(), '3.3.1', true );
    wp_enqueue_script( 'Tether', get_template_directory_uri() . '/js/popper.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'Bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'MDB', get_template_directory_uri() . '/js/mdb.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'Swiper', get_template_directory_uri() . '/js/swiper.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'FancyBoxJs', get_template_directory_uri() . '/js/fancybox.js', array(), '1.0.0', true );
    // wp_enqueue_script( 'MaskedInput', get_template_directory_uri() . '/js/masked-input.js', array(), '1.0.0', true );
    // wp_enqueue_script( 'Custom-Swiper', get_template_directory_uri() . '/js/th/swipers.js', array(), '1.0.1', true );
    wp_enqueue_script( 'Wow-js', 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js', array(), '1.0.1', true );
    wp_enqueue_script( 'Waypoint-js', 'https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js', array(), '1.0.1', true );
    wp_enqueue_script( 'Color-thief-js', get_template_directory_uri() . '/js/color-thief.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'CommonJS', get_template_directory_uri() . '/js/dtourism/common.js', array(), '1.0.2', true );
    // Load if frontpage
    // if(is_front_page()){ 
    //     wp_enqueue_script( 'FrontPage', get_template_directory_uri() . '/js/frontpage.js', array(), '1.0.1', true );
    // }
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_scripts' );

// Styling Admin page
// add_action('admin_head', 'adminCss');
// function adminCss() {
//     wp_enqueue_style( 'Custom_admin_css', get_template_directory_uri() . '/css/custom_admin.css' );
// }

?>