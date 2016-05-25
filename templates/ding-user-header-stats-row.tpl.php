<?php
/**
 * @file
 * Template to render the user stats row.
 */
?>
<div class="user-stats-row">
  <div class="stats-label">
    <?php print $status['label']; ?>
  </div>
  <div class="stats-count">
    (<?php print $status['count']; ?>)
  </div>
</div>
