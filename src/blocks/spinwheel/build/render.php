<?php

$Background = $attributes['Main_Background'];
$Spinwheel = $attributes['Spinwheel_Color'];
$Spinwheel_Ball = $attributes['Spinwheel_Ball_Color'];

?>
<div class="wp-block-create-block-spinwheel" style="background-color:<?php echo $Background  ?>">
	<div style="background-color:<?php echo $Spinwheel  ?>" class="spinWheel">
		<div style="background-color:<?php echo $Spinwheel_Ball ?>" class='spinWheel_ball'></div>
	</div>
</div>