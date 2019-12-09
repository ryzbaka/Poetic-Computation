function setup() {
  createCanvas(400, 400);
  background("lightyellow")
  for(let i=0;i<1000;i+=20){
    stroke('grey')
    line(0,i,400,i)
  } 
  stroke('red')
  line(20,0,20,400)
}

function draw() {
  //console.log("X:",mouseX)
  //console.log("Y:",mouseY)
  if(mouseIsPressed){
    //noStroke()
    stroke('black')
    smooth()
    strokeWeight(1)
    fill(255,156,0,20)
    ellipse(mouseX,mouseY,50,50)
  }
}