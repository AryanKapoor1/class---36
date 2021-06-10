class Form{
    constructor(){

        this.title = createElement('h1')
        this.input = createInput('Enter your name')
        this.button = createButton('start');
        this.greeting = createElement('h2')
    }
        hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        }
    display(){
        this.title.html('car racing game');
        this.title.position(250,100);
        this.input.position(200,200);
        this.button.position(200,250);
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playercount = playercount + 1;
        player.index = playercount
        player.update()
        player.updatecount(playercount)
        this.greeting.html('Welcome' + player.name)
        this.greeting.position(200,200)
        })
    }
}