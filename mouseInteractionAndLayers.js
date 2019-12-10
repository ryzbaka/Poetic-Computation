let layer0;
let layer1;
function setup() {
  createCanvas(400, 400);
  layer0=createGraphics(400,400)
  layer0.background("lightyellow")
  for(let i=0;i<1000;i+=20){
    layer0.stroke('grey')
    layer0.line(0,i,400,i)
  } 
  layer0.stroke('red')
  layer0.line(20,0,20,400)
  layer1=createGraphics(400,400)
  layer1.clear()
  image(layer0,0,0)
}

function draw() {
  image(layer0,0,0)
  fill(255,156,0,20)
  ellipse(mouseX,mouseY,50,50)
  if(mouseIsPressed){
    //noStroke()
    layer1.stroke('black')
    layer1.strokeWeight(1)
    layer1.fill(255,156,0,20)
    layer1.ellipse(mouseX,mouseY,50,50)
  }
  image(layer1,0,0)
}