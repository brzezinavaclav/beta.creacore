module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            target: {
                files: {
                    'css/style.min.css': ['resources/bower_components/bootstrap/dist/css/bootstrap.min.css', 'resources/bower_components/font-awesome/css/font-awesome.min.css', 'resources/bower_components/ResponsiveSlides.js/responsiveslides.css', 'resources/bower_components/lightbox2/dist/css/lightbox.css', 'resources/bower_components/animate.css/animate.min.css', 'resources/css/style.css']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/js.min.js': ['resources/bower_components/jquery/dist/jquery.min.js','resources/bower_components/bootstrap/dist/js/bootstrap.min.js','resources/bower_components/lightbox2/dist/js/lightbox.min.js', 'resources/bower_components/ResponsiveSlides.js/responsiveslides.min.js','resources/js/js.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['cssmin', 'uglify']);

};