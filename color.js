function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background('white');
    let alphaDelta=80
    for(let j=0;j<20;j++){
      for(let i=0;i<20;i++){
      fill(100,200,200,80)//decides inside color
      stroke(255,59,129)//decides outline color
      arc(100+i*10,100+j*10,80,80,0,0.75*2*PI,PIE)
      }
    }
  }