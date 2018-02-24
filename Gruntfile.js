module.exports = function (grunt) {

    var JS_MAIN_FILES = './app/**/*.js';
    var JS_TEST_FILES = './test/**/*.js';
    var JS_ALL_FILES = [JS_MAIN_FILES, JS_TEST_FILES];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            './dist/insane_ui.js': [JS_MAIN_FILES]
        },
        watch: {
            files: [JS_MAIN_FILES],
            tasks: ['browserify']
        },
        eslint: {
            options: {
                configFile: 'eslint.json',
                fix: true,
                rulesdir: ['eslint_rules']
            },
            src: JS_ALL_FILES
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("gruntify-eslint");

    grunt.registerTask('build', ['eslint', 'browserify']);
};