function setup() {
    createCanvas(400,400)
    background('black')
  }
  function draw() {
    noStroke()
    fill(random(0,255),random(0,255),random(0,255),random(0,255))
    ellipse(random(0,400),random(0,400),random(50,100),random(50,100))
  }
  