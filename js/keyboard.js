var keyboard = (function(){

	var pressedKeys = [],
	    keys = {
	        top: '38',
	        down: '40',
	        left: '37',
	        right: '39',
	        s: '83',
	    };

	$(window).keydown(function(e){
        pressedKeys[e.which] = true;
    });

    $(window).keyup(function(e){
        pressedKeys[e.which] = false;
    });

    return {
    	pressedKeys: pressedKeys,
    	keys: keys
    };

})();