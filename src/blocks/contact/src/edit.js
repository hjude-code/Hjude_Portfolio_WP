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
		attributes:{MailTo, MailFrom, Subject, Message},
		setAttributes,
		classNames
	} = props

	return (
		<form>
			<label>Email</label>
			<input type="email" id="email" name="email" placeholder="Enter your email address"></input>
			<label>Subject</label>
			<input type="text" id="subject" name="subject" placeholder="Enter the subject of your message"></input>
			<label>Message</label>
			<textarea id="message" name="message" rows="5" cols="40" placeholder="Enter your message here"></textarea>
		</form>
	);
}
