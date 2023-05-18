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
	ColorPicker,
	ColorPalette,
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
		attributes: {firstName, lastName, accentColor, mainColor},
		setAttributes,
		className,
	} = props;
	const onChangeFirstName = ( newContent ) => {
		setAttributes( { firstName: newContent } );
	};
	const onChangeLastName = ( newContent ) => {
		setAttributes( { lastName: newContent } );
	};


	let accent = {
		fill:accentColor
	}
	const accentColoring = {style: accent};
	const onChangeAccent = ( newContent ) => {
		setAttributes( { accentColor: newContent } );
	};

	let main = {
		color:mainColor
	}
	const mainColoring = {style: main};
	const onChangeMain = ( newContent ) => {
		setAttributes( { mainColor: newContent } );
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
								label={ __( 'firstName', 'basic-block' ) }
								value={ firstName }
								onChange={onChangeFirstName}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={ __( 'lastName', 'basic-block' ) }
								value={ lastName }
								onChange={onChangeLastName}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<ColorPalette
								label={ __( 'main', 'basic-block' ) }
								value={ mainColor }
								onChange={onChangeMain}
							/>
						</fieldset>
					</PanelRow>


					<PanelRow>
						<fieldset>
							<ColorPalette
								label={ __( 'accent', 'basic-block' ) }
								value={ accentColor }
								colors={[]}
								onChange={onChangeAccent}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>

			<nav { ...useBlockProps({style:main})}>
				<div class="navLinks">	
					<InnerBlocks
						template={NavTemplate}
					/>
				</div>
				<div id="navInfo">
					<div id="navName"> 
						<h1>{firstName}</h1>
						<svg id="logoBox" viewBox="0 0 601 483">
							<path {...accentColoring} id="BH_Logo" d="M578.5,161C567.4,180.3 552.5,197.1 534.7,210.3C537.9,220 539.6,230.4 539.6,241.2C539.6,296.7 494.6,341.7 439.1,341.7C420.8,341.7 403.7,336.8 388.9,328.2L519.6,102C496,88.3 468.5,80.4 439.2,80.4C392.7,80.4 350.9,100.1 321.5,131.7L321.5,8.1C324.8,6.4 328.1,4.8 331.4,3.3C321.3,1.3 310.8,0.2 300.1,0.2C300.1,0.1 300,0 300,0C300,0.1 299.9,0.2 299.9,0.2C289.3,0.2 278.9,1.3 268.9,3.2C272.1,4.7 275.3,6.2 278.5,7.8L278.5,131.6C249.2,100.1 207.3,80.3 160.9,80.3C131.6,80.3 104.2,88.2 80.5,101.9L211.1,328.1C196.3,336.6 179.2,341.5 160.9,341.5C105.4,341.5 60.4,296.5 60.4,241C60.4,230 62.2,219.5 65.4,209.7C47.6,196.6 32.7,179.9 21.6,160.6C7.9,184.2 0,211.7 0,241C0,329.8 72,401.8 160.8,401.8C171.4,401.8 181.8,400.8 191.9,398.8L282.3,283.8L260.3,436.3C260,438.2 259.9,440 259.9,441.9C259.9,464.1 277.9,482.1 300.1,482.1C322.3,482.1 340.3,464.1 340.3,441.9C340.3,440 340.1,438.1 339.9,436.3L317.9,283.9L407.8,398.8C418,400.8 428.5,401.9 439.3,401.9C528.1,401.9 600.1,329.9 600.1,241.1C600,212 592.1,184.6 578.5,161Z"/>
						</svg>
						<h1>{lastName}</h1>
					</div>
					<div id="navTagline">
						<h2>Graphic Design &</h2>
						<h2>Creative Development</h2>
					</div>
				</div>
			</nav>
							
		</div>
	);
}
