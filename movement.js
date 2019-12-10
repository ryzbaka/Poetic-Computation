let circleX=0
function setup() {
  createCanvas(400,400)
}

function draw() {
  if(circleX>425){
    circleX=0
  }
  background(150)
  ellipse(circleX,200,50,50)
  circleX+=5
}