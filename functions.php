<?php

function register_nav_block()
{
    register_block_type( dirname(__FILE__) . '/src/blocks/imagenav/build/block.json' );
    register_block_type( dirname(__FILE__) . '/src/blocks/imagenavitem/build/block.json' );
}
add_action('init', 'register_nav_block');
