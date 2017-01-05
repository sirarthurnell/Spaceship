var collisions = (function(){

	var spritesToTest = [],
		callbck;

	function setListener(callback){
		callbck = callback;
	}

	function addSprite(sprite){
		spritesToTest.push(sprite);
	}

	function removeSprite(sprite){
		var indexOfSprite = spritesToTest.indexOf(sprite);
		spritesToTest.splice(indexOfSprite, 1);
	}

	function checkCollisions(){
		var currentSprite,
			nextSprite;

		for(var i = 0; i < spritesToTest.length; i++){

			currentSprite = spritesToTest[i];

			for(var j = 0; j < spritesToTest.length; j++){

				nextSprite = spritesToTest[j];

				if(currentSprite !== nextSprite && hitTest(currentSprite, nextSprite)){
					callbck(currentSprite, nextSprite);
				}

			}

		}

	}

	function hitTest(source, target){
		var sourceX = source.x - source.image.width / 2,
			sourceY = source.y - source.image.height / 2,
			sourceWidth = source.image.width,
			sourceHeight = source.image.height,
			sourceTotalDistanceX = sourceX + sourceWidth,
			sourceTotalDistanceY = sourceY + sourceHeight,			
			targetX = target.x - target.image.width / 2,
			targetY = target.y - target.image.height / 2,
			targetWidth = target.image.width,
			targetHeight = target.image.height,
			targetTotalDistanceX = targetX + targetWidth,
			targetTotalDistanceY = targetY + targetHeight,

			collideX = (sourceTotalDistanceX >= targetX) && (sourceX <= targetTotalDistanceX),
			collideY = (sourceTotalDistanceY >= targetY) && (sourceY <= targetTotalDistanceY);

			if(collideX && collideY){
				return true;
			}else{
				return false;
			}
	}

	return {
		setListener: setListener,
		addSprite: addSprite,
		removeSprite: removeSprite,
		checkCollisions: checkCollisions
	};

})();