/*global module:false*/
module.exports = function(grunt) {
  require('./config/lineman').config.grunt.run(grunt);
  grunt.loadNpmTasks('grunt-contrib-sass');
};