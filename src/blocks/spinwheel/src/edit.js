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
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import {
	ColorPicker,
	PanelBody,
	PanelRow,
	NumberControl
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
export default function Edit(props) {

	const {
		attributes: {Main_Background, Spinwheel_Color, Spinwheel_Ball_Color},
		setAttributes,
		className,
	} = props;

	let Background = {
		backgroundColor:Main_Background
	}
	const BackgroundColoring = {style: Background};
	const onChangeBackground = ( newContent ) => {
		setAttributes( { Main_Background: newContent } );
	};

	let Spinwheel = {
		backgroundColor:Spinwheel_Color
	}
	const SpinwheelColoring = {style: Spinwheel};
	const onChangeSpinwheel = ( newContent ) => {
		setAttributes( { Spinwheel_Color: newContent } );
	};

	let SpinwheelBall = {
		backgroundColor:Spinwheel_Ball_Color
	}
	const SpinwheelBallColoring = {style: SpinwheelBall};
	const onChangeSpinwheelBall = ( newContent ) => {
		setAttributes( { Spinwheel_Ball_Color: newContent } );
	};

	console.log({BackgroundColoring})

	return (
		<div>

			<InspectorControls>
				<PanelBody
					title={ __( 'Settings', 'basic-block' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<fieldset>
							<ColorPicker
								label={ __( 'Background', 'basic-block' ) }
								value={ Main_Background }
								onChange={onChangeBackground}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<ColorPicker
								label={ __( 'Spinwheel', 'basic-block' ) }
								value={ Spinwheel_Color }
								onChange={onChangeSpinwheel}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<ColorPicker
								label={ __( 'Spinwheel_Ball', 'basic-block' ) }
								value={ Spinwheel_Ball_Color }
								onChange={onChangeSpinwheelBall}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
			</InspectorControls>



			<div class="wp-block-create-block-spinwheel" {...BackgroundColoring}>
				<div {...SpinwheelColoring} class="spinWheel">
					<div {...SpinwheelBallColoring} class='spinWheel_ball'></div>
				</div>
			</div>

		</div>
	);
}
