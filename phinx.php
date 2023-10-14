<?php

require_once('vendor/autoload.php');
require_once('server/database.php');

// use Server\Database\Connection;

// new Connection;

return [
    'migration_base_class' => 'Server\Database\Migrations\ParentMigration',
    'paths' => [
        'migrations' => 'server/Database/Migrations',
        'seeds' => 'server/Database/Seeds'
    ],
    'templates' => [
        'file' => 'server/Database/Migrations/template.txt'
    ],
    'environments' => [
        'default_migrations_table' => 'migrations',
        'default' => [
            'user' => getenv("DB_USERNAME"),
            'pass' => getenv("DB_PASSWORD"),
            'host' => getenv("DB_HOST"),
            'port' => 8889,
            'name' => getenv("DB_NAME"),
            'adapter' => 'mysql'
        ]
    ],

];
