<?php

$SkillsList = explode(', ',$attributes['Skills']);

function printList($list){

		shuffle($list);
		echo('<ul>');
		foreach($list as $index => $item){
		echo "<li class=`skill-$item`>$item</li>";
		} 
		echo('</ul>');
}

?>
<div <?php echo get_block_wrapper_attributes(); ?>>

	<?php
	for($i=0; $i<6; $i++){
		printList($SkillsList);
	}
	?>

	<?php echo $content?>

</div>
