city=prompt("Enter city")
if(city==="karachi"){
    alert("Welcome to city of lights");
}else{
    alert("welcome to "+city);
}


fu=prompt("Enter fuel");

if(fu<0.25){
    alert("Please refill the fuel in your car")
}


rand=Math.floor(Math.random(1,10)*10);


while(true){
   number= prompt("Guess the number");
   if(number==rand){
       alert("Bingo! Correct answer");
       break;
   }else{
       alert("Close enough to the correct answer");
   }
}

nu=prompt("Enter number")
if(nu%3==0){
    alert("number is divisible by 3")
}else{
    alert("number is not divisible by 3")
}


