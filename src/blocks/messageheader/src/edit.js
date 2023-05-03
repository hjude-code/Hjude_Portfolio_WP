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
import { useBlockProps, InspectorControls, RichText, InnerBlocks } from '@wordpress/block-editor';

import {
	TextControl,
	PanelBody,
	PanelRow,
	ColorPicker
} from '@wordpress/components';

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

const portholeTemplate = [
	['core/image',{}]
]

export default function Edit(props) {


	const {
		attributes: { greeting, gradientStart, gradientEnd},
		setAttributes,
		className,
	} = props;
	const onChangeGreeting = ( newContent ) => {
		setAttributes( { greeting: newContent } );
	};

	const gradient = `conic-gradient(from 0.0turn at 50% 50%, ${gradientStart},${gradientEnd})`

	const gradientBackground = {
		backgroundColor: '#090',
		background:gradient,
	};
	const blockProps = useBlockProps( { style: gradientBackground } );
	const onChangeGStart = ( newContent ) => {
		setAttributes( { gradientStart: newContent } );
	};
	const onChangeGEnd = ( newContent ) => {
		setAttributes( { gradientEnd: newContent } );
	};

	return (
		<div {...useBlockProps()}>
		<InspectorControls>
			<PanelBody
				title={ __( 'Settings', 'basic-block' ) }
				initialOpen={ true }
			>
				<PanelRow>
					<fieldset>
						<TextControl
							label={ __( 'Greeting', 'basic-block' ) }
							value={ greeting }
							help={ __(
								'Default Greeting to be displayed around the ring'
							) }
							onChange={ onChangeGreeting }
				
						/>
						</fieldset>
				</PanelRow>
				<PanelRow>
					<fieldset>
						<ColorPicker
							label={ __( 'Gradient Start', 'basic-block' ) }
							value={ gradientStart }
							help={ __(
								'Default Greeting to be displayed around the ring'
							) }
							onChange={ onChangeGStart}
				
						/>
						</fieldset>
				</PanelRow>
				<PanelRow>
					<fieldset>
						<ColorPicker
							label={ __( 'Gradient End', 'basic-block' ) }
							value={ gradientEnd }
							help={ __(
								'Default Greeting to be displayed around the ring'
							) }
							onChange={ onChangeGEnd }
				
						/>
						</fieldset>
				</PanelRow>


			</PanelBody>
		</InspectorControls>



		<div class="porthole">
			<InnerBlocks template={portholeTemplate}/>
			
		</div>

		<div class="messageBox m1">
			<h3>{greeting}</h3>
		</div>

		<div class="messageBox m2">
			<h3>{greeting}</h3>
		</div>
		<div class="messageBox m3">
			<h3>{greeting}</h3>
		</div>
		<div class="messageBox m4">
			<h3>{greeting}</h3>
		</div>
		<div class="messageBox m5">
			<h3>{greeting}</h3>
		</div>
		<div class="messageBox m6">
			<h3>{greeting}</h3>
		</div>
		<div class="messageBox m7">
			<h3>{greeting}</h3>
		</div>
		<div class="messageBox m8">
			<h3>{greeting}</h3>
		</div>
		<div class="messageBox m9">
			<h3>{greeting}</h3>
		</div>

		</div>
	);
}
