<?php

$SkillsList = explode(', ',$attributes['Skills']);



?>
<div <?php echo get_block_wrapper_attributes(); ?>>

	<ul>
	<?php foreach($SkillsList as $index => $item){
		echo "<li class=`skill-$index`>$item</li>";
	} ?>
	</ul>

</div>
