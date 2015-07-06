# Backend
Backend написан на Laravel 5. После развертывания тесты API запускаются командой phpunit

# Database

База данных на sqlite3. Файл базы в storage/database.sqlite.
Для тестового заполнения надо выполнить команды

php artisan migrate:reset
php artisan migrate
php artisan db:seed


# Frontend
Реализовано в простейшем варианте без сборки JS файлов.

Для пересборки CSS запустить gulp
