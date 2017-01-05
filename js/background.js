var background = (function(){
	
	var backgroundImage,
	    background1,
	    background2,
	    backgroundMiddle;

	function init(image){
		backgroundImage = image;
		backgroundMiddle = backgroundImage.height / 2;

		background1 = createBackgroundChop(0, 0, -backgroundMiddle);
	    display.addSprite(background1);

	    background2 = createBackgroundChop(0, backgroundMiddle, 0);
	    display.addSprite(background2);
	}

	function createBackgroundChop(x, y, startPosition){
	    var backgroundChop = display.createSprite(backgroundImage, false);

	    display.setClipOnSprite(backgroundChop, x, y, backgroundImage.width, backgroundMiddle);

	    backgroundChop.x = 0;
	    backgroundChop.y = startPosition;

	    return backgroundChop;
	}

	function moveBackground(){
	    var incrementY = 100 * display.getMovementFactor();

	    background2.y += incrementY;
	    background1.y += incrementY;    

	    if(background2.y > backgroundMiddle){
	        background2.y = -backgroundMiddle;
	    }

	    if(background1.y > backgroundMiddle){
	        background1.y = -backgroundMiddle;
	    }
	    
	}

	return {
		init: init,
		moveBackground: moveBackground
	};

})();