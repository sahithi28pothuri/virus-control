class MFORM {
    constructor(){
        this.playButton = createButton("Play");
    this.titleImg = createImg("pics/bg.png", "game title");
    this.title = createElement('h1');
    this.singlePlayerImg = createImg("pics/solo.png", "game title");
    this.singlePlayer = createButton('Single Player');
    this.multiPlayerImg = createImg("pics/duo.png", "game title");
    this.multiPlayer = createButton('Multi-Player')
    this.greeting = createElement("h2");
    this.question = createElement('h2');
    this.question2 = createElement('h2');

    this.player1 = createImg('pics/soldier.png');
    this.player2 = createImg('pics/fisherman.png');
    this.player3 = createImg('pics/woodcutter.png');

    this.input1 = createInput('ENTER PLAYER NUMBER');

    this.sP1 = createButton('1');
    this.sP2 = createButton('2');
    this.sP3  = createButton('3');

    this.start1 = createButton('GO');
    this.resetButton = createButton("");

    this.countryTitle = createInput('Choose your country');
    this.cccOk = createButton("GO");
    this.usa = createButton("USA");
    this.korea = createButton("KOREA");
    this.india = createButton("INDIA");
    this.singapore = createButton("SINGAPORE");
    this.uk = createButton("GREAT BRITAIN");
    this.argentina = createButton("ARGENTINA");
    this.canada = createButton("CANADA");
    this.china = createButton("CHINA");
    this.russia = createButton("RUSSIA");
    this.japan = createButton("JAPAN");
    this.israel = createButton("ISRAEL");
    
    this.usaImg  = createImg('pics/usa.png');
    this.koreaImg  = createImg('pics/korea.jpg');
    this.indiaImg  = createImg('pics/india.png');
    this.singaporeImg  = createImg('pics/singapore.jpg');
    this.ukImg  = createImg('pics/uk.png');
    this.argentinaImg  = createImg('pics/argentina.jpg');
    this.canadaImg  = createImg('pics/canada.jpg');
    this.chinaImg  = createImg('pics/china.jpg');
    this.russiaImg  = createImg('pics/russia.png');
    this.japanImg  = createImg('pics/japan.png');
    this.israelImg  = createImg('pics/israel.jpg');
    this.cInput = createInput('ENTER YOUR NATION');

    this.biome1 = createImg('pics/city.png');
    this.biome2 = createImg('pics/desert.png');
    this.biome3 = createImg('pics/grass.png');
    this.biome4 = createImg('pics/snow.png');

    this.biomeOk = createButton('GO')
    this.bEnter = createInput('ENTER THE BIOME')

    this.b1 = createButton('1')
    this.b2 = createButton('2')
    this.b3 = createButton('3')
    this.b4 = createButton('4')
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.question.hide();
    this.singlePlayer.hide();

    this.player1.hide();
    this.player2.hide();
    this.player3.hide();
    this.question2.hide();
    this.input1.hide();
    this.start1.hide();
    this.sP1.hide();
    this.sP2.hide();
    this.sP3.hide();
    this.titleImg.hide();
    }

    display(){
        this.title.html('VIRUS CONTROL');
        this.title.position(width/2-125,20);
        this.title.size(900,900);
        this.titleImg.position(1, 1);
        this.titleImg.size(width,height)
    
        this.question.html('CHOOSE GAME TYPE');
        this.question.position(width/2-150,height/3);
    
        this.singlePlayer.position(width/3-50,height/2+100);
        this.singlePlayerImg.position(width/3-50,height/2-100);
        this.singlePlayerImg.size(150,150);
    
        this.multiPlayer.position(width/2+190,height/2+100);
        this.multiPlayerImg.position(width/2+200,height/2-100);
        this.multiPlayerImg.size(150,150);
    
        this.playButton.position(width / 2 - 90, height / 4);
        this.greeting.position(width / 2 - 300, height / 2 - 100);
    
        this.singlePlayer.class("customButton");
        this.multiPlayer.class("customButton");
        this.question.class("gameTitle");
        this.titleImg.class("gameTitle");
        this.title.class("gameTitle");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
        this.resetButton.class("resetButton");
        this.resetButton.position(width / 2 + 500, 100);
    
        this.resetButton.mousePressed(()=>{
          database.ref('/').set({
            carsAtEnd:0,
            gameState:0,
            gameType:'',
            playerCount:0,
            players: {}
          })
        })
    
        this.multiPlayer.mousePressed(()=>{
          console.log("hii");
        });

    }
}