// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
     this.sprite = 'images/enemy-bug.png';
this.x = 100;
this.y = 100;


    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
   

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   
this.x += (30*dt);
    
    

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(){

    this.sprite = 'images/char-pink-girl.png';
};
Player.prototype.update=function(){

};
Player.prototype.render = function(){
    //   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 
};
Player.prototype.handleInput = function(){
 
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();
var allEnemies = [];
var e1=new Enemy();
allEnemies[0]=e1;
var e2=new Enemy();
e2.x=200;
e2.y=200;
allEnemies[1]=e2;
var e3=new Enemy();
e3.x=50;
e3.y=50;
allEnemies[2]=e3;




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
