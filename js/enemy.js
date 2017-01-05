var enemy = (function(){

	var enemyImage,
		enemies = [],
		msSinceLastEnemy = 0;

	function init(image){
		enemyImage = image;
	}

	function createEnemies(){
	    var enemyEveryMs = 2000;

	    if(msSinceLastEnemy >= enemyEveryMs){

	        msSinceLastEnemy = 0;
	        
	        createEnemy();

	    }else{

	        msSinceLastEnemy += display.getMsSinceLastFrame();

	    }
	}

	function createEnemy(){
		var newEnemy = display.createSprite(enemyImage, true);

		newEnemy.x = getRandomPositionByCell();
		newEnemy.y = -newEnemy.image.height / 2;

		newEnemy.kind = "enemy";

		display.addSprite(newEnemy);
		enemies.push(newEnemy);
		collisions.addSprite(newEnemy);
	}

	function doEnemiesActions(){
		moveEnemies();
	}

	function removeEnemy(enemy){
		var indexOfEnemy = enemies.indexOf(enemy);
		if(indexOfEnemy > -1){
			enemies.splice(indexOfEnemy, 1);
			display.removeSprite(enemy);
			collisions.removeSprite(enemy);
		}		
	}

	function moveEnemies(){
		var incrementY = 100 * display.getMovementFactor(),
	    	currentEnemy,
	        elapsedCanvasBottom;

	    for(var i = 0; i < enemies.length; ++i){
	        currentEnemy = enemies[i];

	        elapsedCanvasBottom = (currentEnemy.y + incrementY) > display.getHeight();

	        if(elapsedCanvasBottom){

	            removeEnemy(currentEnemy);

	        }else{

	            currentEnemy.y += incrementY;

	        }
	    }
	}

	function getRandomPositionByCell(){
		var randomCell = Math.random() * getTotalCells(),
			halfEnemyWidth = getCellWidth() / 2,
			positionInPixels = randomCell * getCellWidth() + halfEnemyWidth;

		return positionInPixels;
	}	

	function getTotalCells(){		
		return Math.floor(display.getWidth() / getCellWidth());
	}

	function getCellWidth(){
		return enemyImage.width;
	}

	return {
		init: init,
		createEnemies: createEnemies,
		createEnemy: createEnemy,
		removeEnemy: removeEnemy,
		doEnemiesActions: doEnemiesActions
	};

})();