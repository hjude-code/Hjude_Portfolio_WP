<?php
/**
 * Title: front-page
 * Slug: hjude_wp/front-page
 * Categories: hidden
 * Inserter: no
 */
?>
<!-- wp:create-block/sidebarnav {"className":"HeroNav"} -->
<!-- wp:navigation {"ref":371,"textColor":"white","overlayMenu":"never","overlayBackgroundColor":"black","overlayTextColor":"white","layout":{"type":"flex","orientation":"horizontal","justifyContent":"left"},"style":{"spacing":{"blockGap":"1em"}}} /-->
<!-- /wp:create-block/sidebarnav -->

<!-- wp:create-block/messageheader {"greeting":"Dag, we gaan graag naar Nederlands! Lets do something dutch together!","backgroundColor":"Black","textColor":"white","fontSize":"medium"} -->
<!-- wp:video {"id":378} -->
<figure class="wp-block-video"><video autoplay loop muted src="<?php echo esc_url( get_stylesheet_directory_uri() ); ?>/assets/videos/pexels-engin-akyurt-1943483-1280x720-25fps.mp4"></video></figure>
<!-- /wp:video -->
<!-- /wp:create-block/messageheader -->

<!-- wp:query {"queryId":18,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true}} -->
<div class="wp-block-query"><!-- wp:post-template {"style":{"spacing":{"blockGap":"0"}}} -->
<!-- wp:cover {"useFeaturedImage":true,"hasParallax":true,"isRepeated":true,"dimRatio":50,"overlayColor":"Red","minHeight":100,"minHeightUnit":"vw","style":{"color":{"duotone":"unset"}},"className":".is-sticky","layout":{"type":"default"}} -->
<div class="wp-block-cover has-parallax is-repeated .is-sticky" style="min-height:100vw"><span aria-hidden="true" class="wp-block-cover__background has-red-background-color has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:post-title {"textAlign":"center","isLink":true,"style":{"elements":{"link":{"color":{"text":"var:preset|color|White"}}}}} /--></div></div>
<!-- /wp:cover -->
<!-- /wp:post-template --></div>
<!-- /wp:query -->

<!-- wp:spacer {"height":"43px"} -->
<div style="height:43px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:create-block/skills {"Skills":"motion design, project management, ui/ux design, front end development, branding \u0026 identity design, creative coding","textColor":"Black","fontSize":"large"} /-->

<!-- wp:template-part {"slug":"footer","area":"footer"} /-->