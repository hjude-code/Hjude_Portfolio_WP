<?php

$accent = $attributes['Accent'];
$link = $attributes['Link'];

$border_style = 'border-left:0.5rem solid ' . $accent . '!important';

$wrapper_attributes = get_block_wrapper_attributes(
	[
		'style' => $border_style,
		'href' => $link
	]		
);	

?>
<a <?php echo $wrapper_attributes; ?>>
	<p><?php echo $attributes['Handle'] ?></p>
	<p><span style="color:<?php echo $accent ?>">on</span><?php echo $attributes['Platform'] ?></p>
</a>

