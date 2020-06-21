var number=prompt("Enter positive number:  ");
print(number);
print("Task 1");
print("Floor Value: "+Math.floor(number));
print("Round of Value "+Math.round(number));
print("Ceil Value "+Math.ceil(number));

print("Task 2");
var number=prompt("Enter negative number:");
print(number);
print("Floor Value: "+Math.floor(number));
print("Round of Value "+Math.round(number));
print("Ceil Value "+Math.ceil(number));

print("Task 3");
var number=prompt("Enter negative number:");
print("absolute Value of "+ number + " is "+Math.abs(number));

print("Task 4 ");
print("Random number " + Math.round(Math.random()*10))



function print(string){
    node=document.createElement("li");
    text=document.createTextNode(string+" \n ");
    node.appendChild(text);
    document.getElementById("app").appendChild(node);
}