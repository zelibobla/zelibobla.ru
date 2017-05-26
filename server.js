/**
 * Zelibobla's home page
 * main file
 *
 * @author Anton Zelenski zelibobla@gmail.com
 * @copyright zelibobla.ru
 */
'use strict';

/** libraries */
var path = require( 'path' ),
	bodyParser = require( 'body-parser' ),
	express = require( 'express' ),
	session = require( 'express-session' );
	
/** environment */
var env = process.env.NODE_ENV || 'dev';
var config = require( './config.json' )[ env ];

var app = module.exports = express();

app.set( 'env', env );
app.set( 'port', config.port );
app.use( express.static( './server/public' ) );
app.set( 'views', path.join( __dirname, './server/public/views' ) );
app.set( 'view engine', 'pug' );

var urlencodedBodyParser = require( 'body-parser' ).urlencoded({ extended: true });
app.use( urlencodedBodyParser );

var jsonBodyParser = require( 'body-parser' ).json;
app.use( bodyParser.json() );

/** inject method-override middleware */
var methodOverride = require( 'method-override' );
app.use( methodOverride( 'X-HTTP-Method-Override' ) );

/** define session handler */
var session = require( 'express-session' ),
	FileStorage = require( 'session-file-store' )( session );
app.use(
	session(
		{
			secret: config.session_secret,
			store: new FileStorage(),
			/** since fileStorage doesn't suppport 'touch' method  @see https://github.com/expressjs/session */
			resave: true,
			saveUninitialized: true
		}
	)
);

/** define routes */
var router = require( './server/router.js' );
app.use( router );

app.listen( config.port );
console.log( `zelibobla.ru launched on port ${config.port}` );