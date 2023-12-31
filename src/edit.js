/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, InspectorControls} from '@wordpress/block-editor';
import {PanelBody, PanelRow, RangeControl} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {

	const {
		attributes:{itterations, rotationMax, Speed, Offset},
		setAttributes,
		classname
	} = props

	const onChangeItterations = (newItterations) =>{
		setAttributes( {itterations: newItterations} );
	};
	const onChangeRotationMax = (newRotationMax) =>{
		setAttributes( {rotationMax: newRotationMax} );
	};
	const onChangeSpeed = (newSpeed) =>{
		setAttributes( {Speed: newSpeed} );
	};
	const onChangeOffset = (newOffset) =>{
		setAttributes( {Offset: newOffset} );
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<RangeControl
							label='itterations'
							value={itterations}
							onChange={onChangeItterations}
							min={0}
							max={100}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label='max-rotation'
							value={rotationMax}
							onChange={onChangeRotationMax}
							min={0}
							max={360}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label='speed'
							value={Speed}
							onChange={onChangeSpeed}
							min={0}
							max={360}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label='Offset'
							value={Offset}
							onChange={onChangeOffset}
							min={0}
							max={360}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks/>
		</div>
	);
}
