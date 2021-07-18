var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d7c986ec-1f78-4dd6-a2cf-3a01850c1e53","8afc5c9d-7aa0-4bd6-ba76-ed3721e6290b","ce50cd6b-6379-4e6b-a390-74e43237eeb3","caf6bebd-650f-4f30-86e5-7674c10f0610","f2122c15-097b-4934-af2f-2ab32d40e18a","365dbaa2-6f26-42c9-b4d8-77a3bd6f8faa"],"propsByKey":{"d7c986ec-1f78-4dd6-a2cf-3a01850c1e53":{"name":"Ben10","sourceUrl":null,"frameSize":{"x":80,"y":118},"frameCount":1,"looping":true,"frameDelay":12,"version":"hMPFDPJdjlwp2uFyEEu3ALvDwXFMWjVr","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":118},"rootRelativePath":"assets/d7c986ec-1f78-4dd6-a2cf-3a01850c1e53.png"},"8afc5c9d-7aa0-4bd6-ba76-ed3721e6290b":{"name":"Malgax","sourceUrl":null,"frameSize":{"x":79,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"EKEV3Xuy1pLsiTotnk8qwjZo7TbZhHIf","loadedFromSource":true,"saved":true,"sourceSize":{"x":79,"y":101},"rootRelativePath":"assets/8afc5c9d-7aa0-4bd6-ba76-ed3721e6290b.png"},"ce50cd6b-6379-4e6b-a390-74e43237eeb3":{"name":"quen","sourceUrl":null,"frameSize":{"x":20,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"7WK7DX4idN3nAMBpwv_3r_Q6j1E9LoKs","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":74},"rootRelativePath":"assets/ce50cd6b-6379-4e6b-a390-74e43237eeb3.png"},"caf6bebd-650f-4f30-86e5-7674c10f0610":{"name":"vilgax","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"5WuPaI8brdl7bpvT0C6aap_MUczCO6za","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":150},"rootRelativePath":"assets/caf6bebd-650f-4f30-86e5-7674c10f0610.png"},"f2122c15-097b-4934-af2f-2ab32d40e18a":{"name":"monster","sourceUrl":null,"frameSize":{"x":50,"y":92},"frameCount":1,"looping":true,"frameDelay":12,"version":"qIfzspu7lW6fAoJi7X9.7cdlm1RP3QcN","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":92},"rootRelativePath":"assets/f2122c15-097b-4934-af2f-2ab32d40e18a.png"},"365dbaa2-6f26-42c9-b4d8-77a3bd6f8faa":{"name":"vilga_copy_1","sourceUrl":null,"frameSize":{"x":150,"y":274},"frameCount":1,"looping":true,"frameDelay":12,"version":"0.P44ZkZaBdOfbJxTiLCjKHcbuQO32vu","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":274},"rootRelativePath":"assets/365dbaa2-6f26-42c9-b4d8-77a3bd6f8faa.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//making lifes.

var life = 0;

// making ben10 alien.

var Ben10 = createSprite(50, 200, 50, 50);
Ben10.setAnimation("Ben10");

// making evil alien.

var monster = createSprite(155, 350, 50, 50);
monster.setAnimation("monster");

var malgax = createSprite(268, 70, 50, 50);
malgax.setAnimation("Malgax");

var quen = createSprite(381, 195, 50, 50);
quen.setAnimation("quen");

//add veloxity of evil alien.

malgax.velocityY = 8;                                                                               
monster.velocityY = -8;

  function draw() {
 
  background("white");
  text("Lives:" + life,307,15);
  
  strokeWeight(0);
  fill("lightblue");
  fill("yellow");



  createEdgeSprites();
  
  //making bounceoff of evil alien.
  
 monster.bounceOff(edges);
  malgax.bounceOff(edges);
  
  Ben10.bounceOff(monster); 
  Ben10.bounceOff(malgax);
  Ben10.bounceOff(edges);

   if (keyDown("left")) {
     Ben10.x=Ben10.x-5;
   }
   if (keyDown("right")) {
     Ben10.x=Ben10.x+5;
   }
  if (keyDown("up")) {
     Ben10.y=Ben10.y-5;
   }  
  if (keyDown("down")) {
     Ben10.y=Ben10.y+5; 
   } 
     
    if (Ben10.isTouching(malgax)|| Ben10.isTouching(monster)){
  Ben10.x=20;
  Ben10.y=190;
  playSound("assets/category_achievements/melodic_win_6.mp3");
  Ben10.setVelocity(0,0);
  life=life+1;
} 
     
//add Ben10 velocity.

Ben10.velocityX=0;

 if (Ben10.isTouching(quen)) {
   playSound("assets/JV4BSDN-claps.mp3");
   background("yellow");
   textSize(24);
   textFont("algerian");
   fill("red");
   text("You save the quen!!!", 70,200);
   textFont("times new roman");
   malgax.setVelocity(0,0);
   monster.setVelocity(0,0);
   gamestate= end;
 }

  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
