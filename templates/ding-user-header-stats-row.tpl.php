<?php
/**
 * @file
 * Template to render the user stats row.
 */
?>
<div class="user-stats-row">
  <div class="stats-label">
    <a href="/<?php print $status['url']; ?>"><?php print $status['label']; ?></a>
  </div>
  <div class="stats-count">
    (<?php print $status['count']; ?>)
  </div>
</div>
