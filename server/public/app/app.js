'use strict';
var app = function() {
	window.runShippingModule = function( elementId ) {
		if( 'undefined' == typeof FDM ){
			alert( 'Library is not attached' );
			return;
		}
		try{
			var entry = JSON.parse( document.getElementById( elementId ).value );
		} catch( e ){
			alert( 'Entry text you`ve passed in textarea could not be parsed as JSON. So we substitute it by default' );
			var entry = { "merchant_key": "babyworld", "customer": { "city": "Санкт-Петербург" }, "order": { "items": [ { "id": 81325, "length": 0.2, "width": 0.1, "height": 0.4, "weight": 0.5, "price": 8920, "VAT": 1601, "priceWithVAT": 10521 }, { "id": 81326, "length": 0.4, "width": 0.2, "height": 0.2, "weight": 0.6, "price": 4970, "VAT": 1211, "priceWithVAT": 6181 } ] } }
		}
		FDM.onComplete = function( result ) {
			document.getElementById( 'result' ).innerHTML = JSON.stringify( result, false, 2 );
			document.getElementById( 'entry' ).value = JSON.stringify( result, false, 2 );
		};
		FDM.init( entry );
	}
};
app();