<?php

$accent = $attributes['Accent'];

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<p><?php echo $attributes['Handle'] ?></p>
	<p><span style="color:<?php echo $accent ?>">on</span><?php echo $attributes['Platform'] ?></p>
</div>

