var ator,carro1,carro2,carro3,estrada,carro4,carro5,carro6
var imagemCarro1,imagemAtor,imagemCarro2,imagemCarro3,imagemCarro4,imagemCarro5,imagemCarro6,imagemEstrada;

var vidas=10

var pontuaçao = 0



function preload(){
  imagemAtor = loadImage('imagens/ator-1.png')
  
  imagemCarro1 = loadImage('imagens/carro-1.png')
  imagemCarro2 = loadImage('imagens/carro-2.png')
  imagemCarro3 = loadImage('imagens/carro-3.png')
  imagemCarro4 = loadImage('imagens/carro-1.png') 
  imagemCarro5 = loadImage('imagens/carro-2.png') 
  imagemCarro6 = loadImage('imagens/carro-3.png')
  
  imagemEstrada = loadImage('imagens/estrada.png')
  
}

function setup(){
  createCanvas(600,350)
  
  carro1 = createSprite(590, 50,20,20)
  carro1.addImage(imagemCarro1)
  carro1.scale = 0.5
  
  carro2 = createSprite(590,100, 20,20)
  carro2.addImage(imagemCarro2)
  carro2.scale = 0.5
  
  carro3 = createSprite(590,150, 20,20)
  carro3.addImage(imagemCarro3)
  carro3.scale = 0.5
  
  carro4 = createSprite(590,200,20,20)
  carro4.addImage(imagemCarro4)
  carro4.scale = 0.5
  
  carro5 = createSprite(590,250,20,20)
  carro5.addImage(imagemCarro5)
  carro5.scale = 0.5
  
  carro6 = createSprite(590,300,20,20)
  carro6.addImage(imagemCarro6)
  carro6.scale = 0.5
  
  carro1.velocityX = -9
  carro2.velocityX = -6
  carro3.velocityX = -8
  carro4.velocityX = -7
  carro5.velocityX = -5
  carro6.velocityX = -10
  
  
  ator = createSprite(250,335,20,20)
  
  ator.addImage(imagemAtor)
  ator.scale = 0.2
  
  
  
   if(vidas < 1){
    
   }
}

function draw(){
  
  background(imagemEstrada)
  
  if(carro1.x < 0){
     carro1.x = 680
     }
  
  if(carro2.x < 0){
    carro2.x = 680
  }
  
  if(carro3.x < 0){
    carro3.x = 680
  }
  
  if(carro4.x < 0){
    carro4.x = 680
  }
  
  if(carro5.x < 0){
    carro5.x = 680
  }
  
  if(carro6.x < 0){
    carro6.x = 680
  }
  
  if(keyDown('up')){
    ator.y -=4
  }
  
  if(keyDown('down')){
    ator.y +=4
  }
  
  if(ator.y < 20){
    ator.y = 335
    
  pontuaçao = pontuaçao + 1
    
  }
  
  if(ator.y > 335){
    ator.y = 335
  }
  
  
  
  if(
  ator.isTouching(carro1)||
  ator.isTouching(carro2)||
  ator.isTouching(carro3)||
  ator.isTouching(carro4)||
  ator.isTouching(carro5)||
  ator.isTouching(carro6)
  ){
     
 
    ator.y = 335

    vidas = vidas - 1 
    
    
     }
  
    text("pontuação: "+pontuaçao,30,20)
  
  textSize(20,20)
  text("vidas: "+vidas,370,20)
  
 
 
  
  
  
  
  drawSprites()
}