/* jshint ignore:start */
//=include ../bower_components/jquery/dist/jquery.min.js
//=include ../bower_components/simplestatemanager/dist/ssm.min.js
//=include ../bower_components/outdated-browser/outdatedbrowser/outdatedbrowser.min.js
//=include ../bower_components/gsap/src/minified/TweenMax.min.js
//=include ../bower_components/matchHeight/dist/jquery.matchHeight-min.js
/* jshint ignore:end */

/*  ==========================================================================
    ==========================================================================

    Main JS
    1. Outdated Browser
	
    ==========================================================================
    ========================================================================== */

jQuery(document).ready(function($){

/*  ==========================================================================
	1. Outdated Browser
	========================================================================== */

	outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: ''
    });
	
});