<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<form action="mailto:harrison@jude.com" method="post" enctype="text/plain" <?php echo get_block_wrapper_attributes(); ?>>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter your email address" required><br>
  <label for="subject">Subject:</label>
  <input type="text" id="subject" name="subject" placeholder="Enter the subject of your message" required><br>
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="5" cols="40" placeholder="Enter your message here" required></textarea><br>
  <input type="submit" value="Send">
</form>

