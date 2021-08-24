const mix = require('laravel-mix');


mix.js('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);


    //Hot Reload
    mix.browserSync('127.0.0.1:8000')