module.exports = function(grunt) {

    // 1. Общая конфигурация
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Настройки для склеивания файлов
            dist: {
                src: [
                    'js/libs/hw.js', // Все js-файлы в директории libs
                    'js/global.js'  // Отдельный файл
                ],
                dest: 'js/build/production.js',
            }
        }

    });

    // 3. Сообщаем, какие плагины мы собираемся использовать
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Определяем задачу по умолчанию, которая будет выполняться при запуске команды grunt в терминале.
    grunt.registerTask('default', ['concat']);

};