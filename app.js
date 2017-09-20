// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
     this.sprite = 'images/enemy-bug.png';

     this.x = x;
     this.y = y;


    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images 
};
/*Enemy.prototype.getDimension= function(){
    var img = 'images/enemy-bug.png';
    var enemyHeight=img.height;
    var enemyWidth=img.width;
    console.log(enemyHeight);
}*/
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   if(this.x<505){
     this.x+= (350*dt);
   }
   else
   {
    this.x=-200;
   }

 


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
    this.x=200;
    this.y=400;
};
Player.prototype.update=function(){
if(this.y<10){
   console.log("hi");}
var X = collision();
console.log(X);

};
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 
};
Player.prototype.handleInput = function(event){
    if (event == 'left' && this.x >0){
        this.x-=101;
    } else 
    if (event == 'right' && this.x < 400){
        this.x+=101;
    } else
     if(event == 'up' && this.y > 0 ){
        this.y-=83;
    } else 
    if(event == 'down' && this.y < 400 ){
        this.y+=83;
    }
 
};
 
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();
var enemy1 = new Enemy(-90,60);
var enemy2 = new Enemy(-200,140);
var enemy3 = new Enemy(-500,140);
var enemy4 = new Enemy(-800,220);
var enemy5 = new Enemy(-1000,220);
var allEnemies = [enemy1, enemy2,enemy3,enemy4,enemy5];
//enemy1 = {x: 5, y: 5, width: 74, height: 81}
 //player = {x: 20, y: 10, width: 74, height: 81}
Enemy.prototype.collision=function(){
   if (x>=0 && x<=400 && y>=50 && y<=250 ){
if (this.x < player.x + /*player.width*/ 101 &&
   this.x + this.width > player.x &&
   this.y < player.y + /*player.height*/171 &&
   this.height + this.y > player.y) {
    return("heloooó");
    // collision detected!
    }}
};



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
