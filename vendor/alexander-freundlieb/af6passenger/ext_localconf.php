<?php

declare(strict_types=1);
defined('TYPO3') or die();

/* Typoscript */
// add pagets
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig("@import 'EXT:af6passenger/Configuration/TypoScript/PageTS/pagets.typoscript'");

/*RTE Configs */
// register RTE config
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['af6mainRTE'] = 'EXT:af6passenger/Configuration/RTE/af6mainRTE.yaml';
