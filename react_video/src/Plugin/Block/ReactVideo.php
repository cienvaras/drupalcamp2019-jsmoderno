<?php
namespace Drupal\react_video\Plugin\Block;
use Drupal\Core\Block\BlockBase;
/**
 * Provides a 'ReactVideo' block.
 *
 * @Block(
 *  id = "react_video",
 *  admin_label = @Translation("React Video"),
 * )
 */
class ReactVideo extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [] + parent::defaultConfiguration();
  }
  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['#markup'] = '<div id="react-video"></div>';
    $build['#attached']['library'][] = 'react_video/react-video';
    return $build;
  }
}
