class Game{

    constructor(){

        
    }
    getState(){
        var gamestateref = database.ref('gamestate');
        gamestateref.on('value',function(data){
            gamestate = data.val();
        })
    }
    update(state)
{
    database.ref('/').update({
        gamestate:state
    })
    

    
}

start(){

    if(gamestate === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }

}
play(){
form.hide()
textSize(30)
text('Game started',120,100)
Player.getPlayerInfo()
if(allPlayers !== undefined){
    var display_position = 130
    for(var plr in allPlayers){
        if(plr === 'player' + player.index){
fill('red')
        }
        else{

            fill('black')
        }
        display_position += 20
        textSize(15)
        text(allPlayers[plr].name + ':'+ allPlayers[plr].distance,120,display_position)
    }



}
if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance = player.distance + 50
    player.update()

}
}

}

