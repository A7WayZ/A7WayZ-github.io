function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(255);
    
    let n = map(mouseX, 0, windowWidth,0,10, true);
    n = round(n);
    
    for(let i= 0; i <= n; i++){ // En konstant loop funktion. i er 0, så når musens cursor ændre x værdi hvor den er større end 0 skal den:
      x1 = map(i,0,n,0,width / 2, true); //inden for rækkeviden cursorens x værdi er = sandt
      y1 = map(i,0,n,0,mouseY,true); // inden for rækkeviden cursorens y værdi er = sandt
      x2 = map(i,0,n,width/2,width, true); // linjerne i mellem x1
      y2 = map(i,0,n,mouseY,0, true); // linjerne i mellem y2 dvs. højden af linjerne.
      line(x1,y1,x2,y2);
    } 
  }