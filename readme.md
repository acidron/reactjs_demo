# Backend
Backend написан на Laravel 5.

Установка composer: 

    curl -sS https://getcomposer.org/installer | php


Установка пакетов: 

    php composer.phar install

Прогон тестов:

    phpunit

# Database

База данных на sqlite3. Файл базы в storage/database.sqlite.
Для тестового заполнения надо выполнить команды

    php artisan migrate:reset
    php artisan migrate
    php artisan db:seed


# Frontend
Реализовано в old-school варианте без сборки JS файлов.

Для пересборки CSS запустить gulp

# Запуск

http://localhost/ПАПКА_С_РЕПОЗИТОРИЕМ/public

Если http сервер сконфигурирован иначе, внести коррективы в config/app.php
