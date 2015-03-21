/*
 * grunt-templator
 *
 *
 * Copyright (c) 2015 Eugene Klymenko
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks s

  grunt.registerMultiTask('templator', 'grunt-webcomponent-master', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      markupFile: '',
      styleFile: '',
      resultFile: ''
    });

    var markup = grunt.file.read(options.markupFile);
    var style = grunt.file.read(options.styleFile);
    var result = '<template>\n\r<style>\n' + style + '</style>\n\r' + markup + '\n</template>';
    grunt.file.write(options.resultFile, result);
  });

};
