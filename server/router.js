/**
 * zelibobla.ru
 * assign particular controller actions to http queries
 *
 * @author Anton Zelenski zelibobla@gmail.com
 * @copyright zelibobla.ru
 */
"use strict";

module.exports = function(){
		
	var express = require( 'express' );
	var controllers = require( './controllers' );
	var router = express.Router();
	
	router.get( '/', controllers.index.get );

	return router;
}();