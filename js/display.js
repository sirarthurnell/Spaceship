var display = (function(){

	var stage,
	    canvas,
	    width,
	    height,
	    movementFactor,
	    msSinceLastFrame = 0,
	    tickCallbck;

	 function init(){

	 	canvas = document.getElementById('canvas');
    	stage = new createjs.Stage(canvas);
    	width = canvas.width;
    	height = canvas.height;
    	createjs.Ticker.useRAF = true;
    	createjs.Ticker.setFPS(30);

	 }

	 function getWidth(){
	 	return width;
	 }

	 function getHeight(){
	 	return height;
	 }

	 function getMovementFactor(){
	 	return movementFactor;
	 }

	 function getMsSinceLastFrame(){
	 	return msSinceLastFrame;
	 }

	 function setClipOnSprite(sprite, x, y, width, height){
	 	var clipArea = new createjs.Rectangle(x, y, width, height);
	 	sprite.sourceRect = clipArea;
	 }

	 function createSprite(bitmap, autoCenter){
	 	var sprite = new createjs.Bitmap(bitmap);

	 	if(autoCenter){
	 		sprite.regX = sprite.image.width / 2;
	    	sprite.regY = sprite.image.height / 2;
	 	}
	    
	 	return sprite;
	 }

	 function addSprite(sprite){
	 	stage.addChild(sprite);
	 }

	 function removeSprite(sprite){
	 	stage.removeChild(sprite);
	 }

	 function update(){
	 	stage.update();
	 }

	 function startTicker(tickCallback){
	 	tickCallbck = tickCallback;
	 	createjs.Ticker.addEventListener("tick", tick);
	 }

	 function tick(e){

	    if(!e.paused){
	        msSinceLastFrame = e.delta;
	        movementFactor = msSinceLastFrame / 1000;
	        tickCallbck();
	        stage.update(); 
	    }
	    
	}

	 function pauseTicker(){
	 	createjs.Ticker.setPaused(true);
	 }

	 function resumeTicker(){
	 	createjs.Ticker.setPaused(false);
	 }

	 function putSpriteOnTop(sprite){
		stage.setChildIndex(sprite, stage.getNumChildren() - 1);
	 }

	 return {
	 	getWidth: getWidth,
	 	getHeight: getHeight,
	 	getMovementFactor: getMovementFactor,
	 	getMsSinceLastFrame: getMsSinceLastFrame,
	 	init: init,
	 	setClipOnSprite: setClipOnSprite,
	 	createSprite: createSprite,
	 	addSprite: addSprite,
	 	removeSprite: removeSprite,
	 	update: update,
	 	startTicker: startTicker,
	 	pauseTicker: pauseTicker,
	 	resumeTicker: resumeTicker,
	 	putSpriteOnTop: putSpriteOnTop,
	 };

})();