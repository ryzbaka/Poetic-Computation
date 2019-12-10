let backCanvas;
function setup(){
  backCanvas = createCanvas(displayWidth,displayHeight)
  backCanvas.position(0,0)
  backCanvas.style('z-index','-1')
  backCanvas.background('pink')
}
/*
function windowResized(){
    backCanvas.height=displayHeight
    backCanvas.width=displayWidth
}
*/
function draw(){
    backCanvas.width=displayWidth;
    backCanvas.height=displayHeight;
    ellipse(200,200,100,100)
    if(mouseIsPressed){
        stroke('white')
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
    backCanvas.background(mouseX,mouseY,pmouseX-pmouseY+100)
}