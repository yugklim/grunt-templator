/*
 * grunt-templator
 *
 *
 * Copyright (c) 2015 Eugene Klymenko
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },


    // Configuration to be run (and then tested).
    templator: {
      default_options: {
        options: {
          markupFile: 'test/template_components/template_markup.html',
          styleFile: 'test/template_components/template_style.css',
          resultFile: 'test/template_components/template_result.html'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, run this
  // plugin's task(s), then test the result.
  grunt.registerTask('default', ['templator:default_options', 'nodeunit']);


};
