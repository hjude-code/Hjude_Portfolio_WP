<?php

function register_blocks()
{
    register_block_type( dirname(__FILE__) . '/src/blocks/imagenav/build/block.json' );
    register_block_type( dirname(__FILE__) . '/src/blocks/imagenavitem/build/block.json' );
    register_block_type( dirname(__FILE__) . '/src/blocks/messageHeader/build/block.json' );
    register_block_type( dirname(__FILE__) . '/src/blocks/sidebarnav/build/block.json' );
}
add_action('init', 'register_blocks');