var game = (function(){

    var backgroundImage,
        shootImage,
        shipImage,
        enemyImage;

    function init(){
        loader.init(startGame);
        shootImage = loader.downLoadImage('img/waterdrop.png');
        shipImage = loader.downLoadImage('img/spaceship.png');
        enemyImage = loader.downLoadImage('img/enemy.png');
        backgroundImage = loader.downLoadImage('img/background.png');
    }

    function startGame(){

        display.init();
        background.init(backgroundImage);  
        shoot.init(shootImage);
        ship.init(shipImage);
        enemy.init(enemyImage);

        collisions.setListener(collisionHappened);

        display.startTicker(animate);

    }

    function collisionHappened(source, target){

        removeCollisionElement(source);
        removeCollisionElement(target);

        function removeCollisionElement(element){
            switch(element.kind){
                case "shoot":
                    shoot.removeShoot(element);
                    break;
                case "enemy":
                    enemy.removeEnemy(element);
                    break;
            }
        }

    }

    function animate(){
        background.moveBackground();
        ship.doShipActions();
        shoot.moveShoots();
        enemy.createEnemies();
        enemy.doEnemiesActions();
        collisions.checkCollisions();
        orderSprites();    
    }

    function orderSprites(){
        ship.putShipOnTop();
    }

    return {
        init: init
    };

})();