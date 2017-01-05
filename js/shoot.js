var shoot = (function(){

	var shootImage,
	    shoots = [],
	    msSinceLastshoot = 0;

	function init(image){
		shootImage = image;
	}

	function shootDown(x, y){
	    var shootEveryMs = 100,
	        bullet;

	    if(msSinceLastshoot >= shootEveryMs){

	        msSinceLastshoot = 0;
	        bullet = display.createSprite(shootImage, true);

	        bullet.x = x;
	        bullet.y = y;

	        bullet.kind = "shoot";
	        
	        display.addSprite(bullet);
	        shoots.push(bullet);
	        collisions.addSprite(bullet);

	    }else{

	        msSinceLastshoot += display.getMsSinceLastFrame();

	    }
	}

	function removeShoot(shoot){
		var indexOfShoot = shoots.indexOf(shoot);
		if(indexOfShoot > -1){
			shoots.splice(indexOfShoot, 1);
			display.removeSprite(shoot);
			collisions.removeSprite(shoot);
		}		
	}

	function moveShoots(){
	    var incrementY = 200 * display.getMovementFactor(),
	    	currentBullet,
	        elapsedCanvasTop;

	    for(var i = 0; i < shoots.length; ++i){
	        currentBullet = shoots[i];

	        elapsedCanvasTop = (currentBullet.y + incrementY) < currentBullet.image.height;

	        if(elapsedCanvasTop){

	            removeShoot(currentBullet);

	        }else{

	            currentBullet.y -= incrementY;

	        }
	    }
	}

	return {
		init: init,
		shootDown: shootDown,
		removeShoot: removeShoot,
		moveShoots: moveShoots,
	};

})();