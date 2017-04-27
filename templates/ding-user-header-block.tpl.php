<?php
/**
 * @file
 * Template to render the user stats block.
 */
?>
<div class="ding-user-header">
  <div class="user-stats">
    <?php print render($status); ?>
  </div>

  <div class="user-links">
    <ul>
      <li><?php print l(t('My account'), 'user/' . $user->uid); ?></li>
      <li><?php print l(t('Edit user profile'), 'user/' . $user->uid . '/edit'); ?></li>
      <li><?php print l(t('Logout'), 'user/logout'); ?></li>
    </ul>
  </div>
</div>
