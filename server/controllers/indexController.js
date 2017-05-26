/**
 * zelibobla.ru
 * index controller
 *
 * @author Anton Zelenski zelibobla@gmail.com
 * @copyright zelibobla.ru
 */
"use strict";

var controller = function(){

	return {
		
		/**
		 * issue index file
		 * @return {Object} express response
		 */
		get: [
			( request, response ) => {
				response.render( 'index' );
			}
		]
	}
		
};

module.exports = controller();