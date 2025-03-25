FROM php:8.2-fpm

# Installer les dépendances
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Installer les extensions PHP nécessaires
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier les fichiers du projet
COPY . /var/www/html

# Installer les dépendances Laravel
RUN composer install

# Configurer les permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage

# Exposer le port
EXPOSE 8741

# Lancer le serveur PHP
CMD ["php-fpm"]