/**
 * zelibobla.ru
 * index file: imports anything inside self folder
 *
 * @author Anton Zelenski zelibobla@gmail.com
 * @copyright zelibobla.ru
 */
"use strict";

var fs = require( "fs" ),
	path = require( "path" ),
	controllers = {};

var scanDir = function( dir, key ){
	fs.readdirSync(
		dir
	).filter(
		function( file ){
			return file.indexOf( "." ) !== 0 &&
			"index.js" !== file;
		}
	).forEach(
		function( file ){
			var p = path.join( dir, file ),
				stats = fs.lstatSync( p );
			if( stats.isFile() ){
				var name = file.substring( 0, file.indexOf( "Controller" ) );
				if( key ){
					if( "undefined" == typeof controllers[ key ] ){
						controllers[ key ] = {};
					}
					controllers[ key ][ name ] = require( p );
				} else {
					controllers[ name ] = require( p );
				}
			} else if( stats.isDirectory() ){
				scanDir( p, file );
			}
		}
	);
}
scanDir( __dirname );
module.exports = controllers;