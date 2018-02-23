#!/bin/sh

WP_USER='wordpress',
WP_PW='wordpress',
WP_THEME_DIR='postlight-headless-wp',
WP_THEME_NAME='postlight-headless-wp',
WP_EMAIL='blkwtkns@headlesswpstarter.dev',
WP_DB_NAME='wordpress',
WP_DESCRIPTION='Just another (headless) WordPress site',

# wp core download --version=4.9.2 --locale=en_US --force

# wp core config --dbname=$WP_DB_NAME --dbuser=$WP_DB_NAME --dbpass=$WP_DB_NAME --dbhost='0.0.0.0'

# wp db drop --yes
# wp db create --yes

wp core install --url=localhost:8000 --title=$WP_THEME_NAME --admin_user=$WP_USER --admin_password=$WP_PW --admin_email=$WP_EMAIL --skip-email --yes

wp theme activate $WP_THEME_DIR --yes
# wp theme delete twentyfourteen
# wp theme delete twentyfifteen
# wp theme delete twentysixteen
# wp theme delete twentyseventeen

# wp plugin delete akismet
# wp plugin delete hello

wp plugin activate --all --yes

# wp acf sync

# wp rewrite structure "/%year%/%monthnum%/%day%/%postname%/"
#
# wp option update blogdescription $WP_DESCRIPTION
#
# wp post update 1 wp-content/themes/postlight-headless-wp/post-content/sample-post.txt --post_title="Sample Post" --post_name=sample-post
#
# wp post create wp-content/themes/postlight-headless-wp/post-content/welcome.txt --post_type=page --post_status=publish --post_name=welcome --post_title="Congratulations!"
#
# wp term update category 1 --name="Sample Category"
#
# wp menu create "Header Menu"
# wp menu item add-post header-menu 1
# wp menu item add-post header-menu 2
# wp menu item add-term header-menu category 1
# wp menu item add-custom header-menu "Read about the Starter Kit on Medium" https://trackchanges.postlight.com/introducing-postlights-wordpress-react-starter-kit-a61e2633c48c
# wp menu location assign header-menu header-menu
