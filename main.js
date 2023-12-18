// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

//BACKGROUND
ctx.fillStyle = "red";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

//4x6
ctx.fillStyle = "white";

for (let col = 0; col < 4; col++) {
  for (let row = 0; row < 6; row++) {
    let x = 40 + col * 22;
    let y = 215 + row * 22;
    ctx.fillRect(x, y, 10, 10);
  }
}

//5
ctx.fillStyle = "white";

for (let col = 0; col < 5; col++) {
  let x = 170 + col * 25;
  ctx.fillRect(x, 130, 10, 475);
}

//6
ctx.fillStyle = "white";

for (let row = 0; row < 6; row++) {
  let y = 385 + row * 40;
  ctx.fillRect(20, y, 115, 20);
}
