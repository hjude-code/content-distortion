<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php
		echo "<div class='itterationLayer itterationBase' aria-hidden='true'>";
		echo $content;
		echo "</div>";
	?>
	<?php
		for ($x = 0; $x < $attributes['itterations']; $x++){
			echo "<div class='itterationLayer' aria-hidden='true'>";
			echo $content;
			echo "</div>";
		};
	?>

</div>
