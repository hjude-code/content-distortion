<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php echo $content ?>
	<?php
		for ($x = 0; $x < $attributes['itterations']; $x++){
			echo $content;
		};
	?>

</div>
