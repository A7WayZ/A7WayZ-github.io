
// Opg 1. tæl ned fra 10 - med while løkke
console.log("Opg 1 while loop")
var i = 10;
while(i >= 1){    
   console.log(i);
   i--;
}

// Opg 1. tæl ned fra 10 - med for løkke
console.log("Opg 1 for loop")
for(let i = 10; i >= 1; i--){
console.log(i)
}

// Opg 2. udregn værdien - med en løkke
console.log("Opg 2 loop")
var a = 0;
var i = 0;
while(i < 20){
   var a = i+(a+1);
   console.log(a);
   i++;
}

// Opg 3. udskriv 2 tabellen, 3 tabblen osv. osv.
console.log("Opg 3 loop")
for(a = 1;a<11;a++){
    for(b = 1;b<11;b++){
        console.log(a*b)
    }
}

// Opg 4. ligning "y=3x^2 + 6x + 9" der udskriver værdierne
console.log("Opg 4 loop")
for(var x = 0; x <= 100; x+=10){
   // y = 3x^2 + 6 + 9
   let y = 3*x*x+6*x+9;
    console.log(x+" : "+y)
}