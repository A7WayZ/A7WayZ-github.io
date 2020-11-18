function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(255);
    
    let n = map(mouseX, 0, windowWidth,0,10, true);
    n = round(n);
    
    for(let i= 0; i <= n; i++){
      x1 = map(i,0,n,0,width / 2, true);
      y1 = map(i,0,n,0,mouseY,true);
      x2 = map(i,0,n,width/2,width, true)
      y2 = map(i,0,n,mouseY,0, true)
      line(x1,y1,x2,y2);
    } 
  }