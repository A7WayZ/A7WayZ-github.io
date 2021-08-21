var x;
var changeDirection;

function setup() {
  createCanvas(500, 500);
	x = 1;
	changeDirection = false;
	//denne variables rolle fungere som en "switch" som vælger hvilken
	//retning cirklen skal gå efter..
}

function draw() {
  background(220);
	ellipse(x,250,80);
  fill('red')
	if(x>width){
		changeDirection=true}
	//hvis cirklen går til den højre side, skifter den retning
	//Effekten med retningen er nedenunder.
	else if (x<=0){
		changeDirection=false}
	//hvis cirklen kommer forbi den venstre side (eller blive lige med 0)
	//skifter den retning.
	
	if (x>=0 && changeDirection == false){
		x=x+1}
	//hvis x er større eller er lig med 0, skal den gå mod højre
	else if(changeDirection == true){
		x=x-1}
	//Når "switch" har skiftet engang, så er x nødt til at være større end bredde
	//så skal cirklen gå tilbage til venstre i starte forfra.
}
