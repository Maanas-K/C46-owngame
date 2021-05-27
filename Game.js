class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    /*car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);*/
    cars = [car1, car2]
      //, car3, car4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      if(keyDown("w")){
        cars[player.index - 1].velocityX = random(-2,2)
        cars[player.index - 1].velocityY = random(-2,2)


      }

      player.distancex = cars[player.index - 1].x
      player.distancey = cars[player.index - 1].y

      player.update();
      var index = 0
      for(var plr in allPlayers){
        
        if(index !== player.index) {
          cars[index ].x = allPlayers[plr].distancex ;
          cars[index ].y = allPlayers[plr].distancey ;
          
        }
        index +=1
        
      }
    }

        
    /*if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distancey +=10
      player.update();
    }

    if(player.distancey > 3860){
      gameState = 2;
    }*/
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
