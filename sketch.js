let x = 0;
let jump = 200;
let pipesH = [50, 350];
let pipesX = [];
let gapHeight = 120; // Initial gap height
let gapPosition = 150; // Initial gap position
let score = 0;
let gameStarted = false;
let gameOver = false;
let HighScore = 0

function setup() {
  createCanvas(400, 400);
  textFont("Madimi One");
}

function drawStartScreen() {
  background(112, 196, 206);
  textSize(40);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Flapped  Bird", width / 2, height / 2 - 50);
  textSize(20);
  text("Press 'SPACE' to Play", width / 2, height / 2 + 50);
}

function drawGameOverScreen() {
  background(112, 196, 206);
  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Nice Try!", width / 2, height / 2 - 50);
  text("Score: " + score, width / 2, height / 2);
  text("High Score: " + HighScore, width / 2, height / 2 + 50);
  text("Press 'SPACE' to Retry", width / 2, height / 2 + 100);
}

function drawGame() {
  //drawing game background and background images
  background(112, 196, 206);
  


  //clouds
  fill(235, 252, 220);
  noStroke();
  ellipse(10, 320, 60, 110);
  ellipse(60, 320, 60, 90);
  ellipse(115, 320, 60, 100);
  ellipse(170, 320, 70, 75);
  ellipse(230, 320, 63, 90);
  ellipse(280, 320, 60, 80);
  ellipse(330, 320, 60, 130);
  ellipse(380, 320, 60, 90);

  //draw pipes
  for (var i = 0; i < 1; i++) {
    stroke(44, 72, 51);
    fill(117, 190, 49);

    //bottom pipe
    rect(x + 410 + pipesH[i], gapPosition + gapHeight, 30, 330 - gapPosition);
    rect(400 + x + pipesH[i], gapPosition + gapHeight, 50, 10); //bottom pipe lip

    //top pipe
    rect(400 + x + pipesH[i], gapPosition, 50, 10); //top pipe lip
    rect(x + 410 + pipesH[i], 0, 30, gapPosition);
  }

  if (x == 0) {
    gapPosition = random(10, 170); // Generate new gap position
  }

  //floor
  fill(221, 216, 150);
  strokeWeight(7);
  stroke(223, 167, 78);
  rect(-10, 350, 1800, 500);

  //grass above floor
  fill(153, 226, 83);
  strokeWeight(2);
  stroke(86, 143, 32);
  rect(-10, 340, 1800, 10);

  //get keypress
  if (keyIsPressed && keyCode == 32) {
    jump = jump - 10;
  } else if (true) {
    jump = jump + 2;
  }

  if (jump > 315) {
    jump = 315;
  }
  if (jump < 20) {
    jump = 20;
  }

  //bird
  noStroke();
  fill('yellow');
  ellipse(100, jump, 50, 50);
  fill(300);
  ellipse(115, jump - 6, 25, 30);
  fill(0);
  ellipse(120, jump - 8, 10, 15);
  fill('orange');
  rect(120, jump + 5, 15, 5);
  rect(120, jump + 10, 10, 5);
  stroke(5);
  fill(0);
  line(110, jump - 20, 130, jump - 15);

  for (let i = 0; i < 2; i++) {
    if (125 > x + 410 + pipesH[i] && 75 < x + 410 + pipesH[i] + 30) {
      if (jump - 25 < gapPosition || jump + 25 > gapPosition + gapHeight) {
        // Collision detected
        gameOver = true;
        break;
      }
    }
  }
  
  if (jump == 315){
    gameOver = true;
  }

  //make the pipes move
  if (x < 400) {
    x = x - 4;
  }

  if (x < -500) {
    x = 0;
    score = score + 1;
  }
  textSize(20);
  text("Score: " + score, 300, 380);
  
    if(score >= HighScore){
    HighScore = score
      
      

  }
}

function keyPressed() {
  if (!gameStarted && keyCode === 32) {
    gameStarted = true;
  } else if (gameOver && keyCode === 32) {
    resetGame();
  }
}

function resetGame() {
  gameOver = false;
  jump = 200;
  x = 0;
  score = 0;
}

function draw() {
  if (!gameStarted) {
    drawStartScreen();
  } else if (gameOver) {
    drawGameOverScreen();
  } else {
    drawGame();
  }
  console.log(jump)
}
