/*
 * grunt-spritesheet
 * https://github.com/nicholasstephan/grunt-spritesheet
 *
 * Copyright (c) 2013 Nicholas Stephan
 * Licensed under the MIT license.
 */

'use strict';

var spritesmith = require('spritesmith'),
		_ = require('underscore'),
		fs = require('fs'),
		path = require('path'),
		url = require('url2');



module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('spritesheet', 'Your task description goes here.', function() {

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			
		});

		grunt.log.writeln("Building SpriteSheets...");


		

		// // Iterate over all specified file groups.
		// this.files.forEach(function(f) {
		// 	// Concat specified files.
		// 	var src = f.src.filter(function(filepath) {
		// 		// Warn on and remove invalid source files (if nonull was set).
		// 		if (!grunt.file.exists(filepath)) {
		// 			grunt.log.warn('Source file "' + filepath + '" not found.');
		// 			return false;
		// 		} else {
		// 			return true;
		// 		}
		// 	}).map(function(filepath) {
		// 		// Read file source.
		// 		return grunt.file.read(filepath);
		// 	}).join(grunt.util.normalizelf(options.separator));

		// 	// Handle options.
		// 	src += options.punctuation;

		// 	// Write the destination file.
		// 	grunt.file.write(f.dest, src);

		// 	// Print a success message.
		// 	grunt.log.writeln('File "' + f.dest + '" created.');
		// });
	});

};