
// Read the file with the URL that we passed to grunt test
var fs = require( 'fs' ),
	siteURL;

try {
	siteURL = fs.read( 'test/visual/.local_url' );
} catch(err) {
	siteURL = ( typeof siteURL === 'undefined' ) ? 'http://local.wordpress.dev' : siteURL;
}

casper.thenOpen( siteURL )

.then( function() {
	phantomcss.screenshot( '.post', 'post' );
});