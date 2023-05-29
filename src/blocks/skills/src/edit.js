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
import { useBlockProps, InspectorControls  } from '@wordpress/block-editor';
import { TextareaControl,
		PanelBody,
		PanelRow, } from '@wordpress/components';
import { useState } from '@wordpress/element';


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
		attributes: {Skills},
		setAttributes,
		className,
	} = props;




	const parseString = (Str) =>{
	
		 const lst = Str.split(', ');
		 const lst_HTML = [];
		 return lst.map((item, index) => <li className={`skill-${index}`}>{item}</li>);

	}

	const SkillsList = parseString(Skills);

	const onSkillsChange = ( newContent ) => {
		setAttributes( { Skills: newContent } );
	};

	console.log(SkillsList);

	return (
		<div{ ...useBlockProps() }>

		<InspectorControls>
			<PanelBody
				title={ __( 'Settings', 'basic-block' ) }
				initialOpen={ true }
			>
				<PanelRow>

					<TextareaControl
						label="Skills"
						help="Enter Skills Sepparated by ', '"
						value={ Skills }
						onChange={ onSkillsChange}
        			/>

				</PanelRow>
			</PanelBody>
		</InspectorControls>

		<ul>
			{SkillsList}
		</ul>
			
		</div>
	);
}
