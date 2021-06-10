var database, form, player, game, allPlayers;
var gamestate = 0;
var playercount  
function setup(){
    createCanvas(500,500);
   database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
   
}

function draw(){
    background("white");
    
    if(playercount === 4){
    game.update(1)
    }
    
    if(gamestate === 1){
    clear()
    game.play()
    }

}
