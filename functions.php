<?php


function add_ScrollTop(){
    wp_enqueue_script('scrollObserver-js',
    get_template_directory_uri().'/assets/Scripts/scrollObserver.js',
    array(),
    0.1,
    true
);
}
add_action('admin_enqueue_scripts', 'add_ScrollTop');
add_action('wp_enqueue_scripts', 'add_ScrollTop');
add_action( 'enqueue_block_editor_assets', 'add_ScrollTop' );



function register_blocks()
{
    register_block_type( dirname(__FILE__) . '/src/blocks/imagenav/build/block.json' );
    register_block_type( dirname(__FILE__) . '/src/blocks/imagenavitem/build/block.json' );
    register_block_type( dirname(__FILE__) . '/src/blocks/messageHeader/build/block.json' );
    register_block_type( dirname(__FILE__) . '/src/blocks/sidebarnav/build/block.json' );

    register_block_type( dirname(__FILE__) . '/src/blocks/spinWheel/build/block.json' );

    add_theme_support ('align-wide');

}
add_action('init', 'register_blocks');


function loadBlockStyles(){

    wp_enqueue_block_style('core/navigation', array(
        'handle' => 'hj_block-navigation',
        'src' => get_theme_file_uri('assets/blocks/core-navigation.css'),
        'path' => get_theme_file_uri('assets/blocks/core-navigation.css')
    ));

    wp_enqueue_block_style('core/column', array(
        'handle' => 'hj_block-column',
        'src' => get_theme_file_uri('assets/blocks/core-column.css'),
        'path' => get_theme_file_uri('assets/blocks/core-column.css')
    ));

    wp_enqueue_block_style('core/group', array(
        'handle' => 'hj_block-group',
        'src' => get_theme_file_uri('assets/blocks/core-group.css'),
        'path' => get_theme_file_uri('assets/blocks/core-group.css')
    ));
    
}
add_action('init', 'loadBlockStyles');

function loadHTMLElementStyles(){

    wp_enqueue_style( 'html-input-text.css', get_theme_file_uri() . '/assets/elements/html-input-text.css');

}

add_action('wp_enqueue_scripts', 'loadHTMLElementStyles');