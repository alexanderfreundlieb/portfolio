<?php

/**
 * Extension Manager/Repository config file for ext "af6passenger".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'AF6Passenger',
    'description' => 'Simple extension to extend the sitepackage af6bus and add your own changes',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '12.4.0-12.4.99',
            'fluid_styled_content' => '12.4.0-12.4.99',
            'rte_ckeditor' => '12.4.0-12.4.99',
            'af6bus' => '2.0.0 - 2.99.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'AlexanderFreundlieb\\Af6passenger\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Alexander Freundlieb',
    'author_email' => 'alexander.freundlieb@icloud.com',
    'author_company' => 'Alexander Freundlieb',
    'version' => '1.3.0',
];
