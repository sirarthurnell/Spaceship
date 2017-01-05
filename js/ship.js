var ship = (function(){

	var shipImage,
	    ship,
	    shipHalfWidth,
	    shipHalfHeight;

	function init(image){
		shipImage = image;

		ship = display.createSprite(shipImage, true);
	    shipHalfWidth = ship.image.width / 2;
	    shipHalfHeight = ship.image.height / 2;

	    ship.x = display.getWidth() / 2;
	    ship.y = display.getHeight() - ship.image.height;

	    ship.kind = "ship";

	    display.addSprite(ship);
	}

	function doShipActions(){
	    var incrementX = 100 * display.getMovementFactor(),
	        incrementY = 100 * display.getMovementFactor(),
	        stepX = 0,
	        stepY = 0;

	    //Left arrow.
	    if(keyboard.pressedKeys[keyboard.keys.left]){
	        stepX = -1;
	    }

	    //Right arrow.
	    if(keyboard.pressedKeys[keyboard.keys.right]){
	        stepX = +1;
	    }

	    //Top arrow.
	    if(keyboard.pressedKeys[keyboard.keys.top]){
	        stepY = -1;
	    }

	    //Bottom arrow.
	    if(keyboard.pressedKeys[keyboard.keys.down]){
	        stepY = +1;
	    }

	    //s.
	    if(keyboard.pressedKeys[keyboard.keys.s]){
	        shoot.shootDown(ship.x, ship.y);
	    }

	    moveShipUntilLimits(incrementX * stepX, incrementY * stepY);   
	}

	function moveShipUntilLimits(incrementX, incrementY){
	    var hittingCanvasRight = (ship.x + shipHalfWidth + incrementX) > display.getWidth(),
	        hittingCanvasLeft = (ship.x - shipHalfWidth + incrementX) < 0,
	        hittingCanvasBottom = (ship.y + shipHalfHeight + incrementY) > display.getHeight(),
	        hittingCanvasTop = (ship.y - shipHalfHeight + incrementY) < 0;

	    if(!hittingCanvasLeft && !hittingCanvasRight){
	        ship.x += incrementX;
	    }

	    if(!hittingCanvasTop && !hittingCanvasBottom){
	        ship.y += incrementY;
	    }
	}

	function putShipOnTop(){
		display.putSpriteOnTop(ship);
	}

	return {
		init: init,
		doShipActions: doShipActions,
		putShipOnTop: putShipOnTop
	};

})();