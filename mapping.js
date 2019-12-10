function setup() {
    createCanvas(400,400)
  }
  
  function draw() {
    const mappedX=map(mouseX,0,400,0,255)
    const mappedY=map(mouseY,0,400,0,255)
    background(mappedX,mappedY,mappedX-mappedY+100)
  }