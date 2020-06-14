muar=[[]];
muar=[[0,1,2,4],[1,0,1,2],[2,1,0,1,]];
fruits = ["apple", "banana", "mango", "orange","strawberry"];

for (i=0; i<fruits.length; i++){
    console.log(fruits[i]+"at index of : "+i);
}


console.log("Counting:")
for (i=0; i<15; i++){
    console.log(i);
}

console.log("Reverse counting:")
for (i=15; i>0; i--){
    console.log(i);
}


console.log("Even:")
for (i=0; i<15; i++){
    if(i%2==0){
        console.log(i);
    }
   
}
console.log("Odd:")
for (i=0; i<15; i++){
    if(i%2==1){
        console.log(i);
    }
   
}
console.log("Series:")
for (i=0; i<21; i++){
    if(i%2==0){
        console.log(i+"k");
    }
   
}

