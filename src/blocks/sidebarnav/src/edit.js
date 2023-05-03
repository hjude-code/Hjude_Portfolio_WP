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
import { InnerBlocks, useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';

import {
	TextControl,
	PanelBody,
	PanelRow,
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

const NavTemplate = [
	['core/navigation', {
		textColor:'white',
		overlayMenu:'never',
		overlayBackgroundColor:'black',
		overlayTextColor:'white',
		layout:{
			type:'flex',
			orientation:'vertical',
			justifyContent:'right'
		},
		style:{
			'spacing':{
				blockgap:'0'
			}
		}
	}]
]

export default function Edit(props) {

	const {
		attributes: {name},
		setAttributes,
		className,
	} = props;
	const onChangeName = ( newContent ) => {
		setAttributes( { name: newContent } );
	};

	return (
		<div>

<InspectorControls>
			<PanelBody
				title={ __( 'Settings', 'basic-block' ) }
				initialOpen={ true }
			>
				<PanelRow>
					<fieldset>
						<TextControl
							label={ __( 'Name', 'basic-block' ) }
							value={ name }
							onChange={ onChangeName}
						/>
					</fieldset>
				</PanelRow>

			</PanelBody>
		</InspectorControls>

			<nav { ...useBlockProps()}>
					<h1>{name}</h1>
					<h2>Graphic Design &<br/>Creative Development</h2>
				<InnerBlocks
					template={NavTemplate}
				/>
			</nav>
					
		</div>
	);
}
