function setup() {
    createCanvas(400, 400);
    background(200)
  }
  
  function recursiveDraw(x1,x2,y,s,a){
    fill(255,54,0,a)
    ellipse(x1,y,s,s)
    ellipse(x2,y,s,s)
    recursiveDraw(x1+10,x2+10,y,s-10,a-10)
  }
  function draw() {
    const x1=100;
    const x2=200
    const y1=200
    const s=50
    const alphaVal=200
    recursiveDraw(x1,x2,y1,s,alphaVal)
  }