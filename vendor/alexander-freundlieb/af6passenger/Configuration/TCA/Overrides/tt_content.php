<?php

declare(strict_types=1);
defined('TYPO3') or die();

call_user_func(static function () {
    // Add header palette
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
        'tt_content',
        '--palette--;;headers',
        'mask_curriculum',
        'after:tx_container_parent'
    );
});
