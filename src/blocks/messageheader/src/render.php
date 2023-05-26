<?php
  if (isset($_GET['cgreet'])) {
    $message = $_GET['cgreet'];
  } else {
    $message = $attributes['greeting'];
  }
?>

<div <?php echo get_block_wrapper_attributes(); ?>>

 

  	<div class="porthole">
		<div>
		</div>
		<?php echo $content ?>
	</div>
	<div class="messageBox m1">
		<h3><?php echo $message?></h3>
	</div>

	<div class="messageBox m2">
		<h3><?php echo $message?></h3>
	</div>
	<div class="messageBox m3">
		<h3><?php echo $message?></h3>
	</div>
	<div class="messageBox m4">
		<h3><?php echo $message?></h3>
	</div>
	<div class="messageBox m5">
		<h3><?php echo $message?></h3>
	</div>
	<div class="messageBox m6">
		<h3><?php echo $message?></h3>
	</div>
	<div class="messageBox m7">
		<h3><?php echo $message?></h3>
	</div>
	<div class="messageBox m8">
		<h3><?php echo $message?></h3>
	</div>
	<div class="messageBox m9">
		<h3><?php echo $message?></h3>
	</div>

	
</div>
