// Lav en variabel og kald den x
// giv x værdien en array
let x = [];

// opret flere variabler med array
let xSpeed = [];
let y = [];
let ySpeed = [];

// opret variablen d og tildel værdien som en array
  let d = [];

let c;

// Definer en funktion der kan ændre fyld og stregfarve
function changeColor() {
  c = color(random(255), random(255), random(255));
  strokeWeight(10);
  stroke(c);
}

function setup() {
  background(255)
  createCanvas(windowWidth, windowHeight);
  const speedScale = 128
  changeColor();
}

function draw() {
  background(c);

  rect(0, 0, width, height);

  for (i=0;i<x.length;i++){
    // tegn en cirkel med centrum i (x, y) og diameter d
  circle(x[i], y[i], d[i]);

// hvis x er større end bredden af lærredet
  // så sæt xSpeed til -xSpeed
  if (x[i] > width - d[i] / 2) {
    changeColor();
    xSpeed[i] = -xSpeed[i];
  }

  if (x[i] < 0 + d[i] / 2) {
    changeColor();
    xSpeed[i] = -xSpeed[i];
  }

  if (y[i] > height - d[i] / 2 || y[i] < 0 + d[i] / 2) {
    changeColor();
    ySpeed[i] = -ySpeed[i];
  }

  x[i] = x[i] + xSpeed[i];
  y[i] = y[i] + ySpeed[i];
  }
}
//Jeg har så opstillet en function med mousepressed
  // Som hører med til min array
  // Der så laver cirkler fra hvor ens mus x og y værdi er
  // Og hvor speeden på cirklerne er forskellige mellem -5 og 5 i x og y speed
  // Diameteren på cirklerne er også forskellige mellem 20 og 80
function mousePressed() {
  x.push(mouseX)
  y.push(mouseY)
  xSpeed.push(random(-5,5))
  ySpeed.push(random(-5,5))
  d.push(random(20,80))
}