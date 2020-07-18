print("task 1");
printDate();
print("task 2");
pname("hassan","ali");
print("task 3");
print(sum(1,2));
print("task 4");
print(count(1,11));

function printDate (){
    date = new Date();
    print(date);
}

function  pname (fname,lname){
    print(fname+" "+lname);
}
function count(num1,num2){
    for (i=num1; i<=num2; i++){
    
        print(i);
    }
}

function sum(num1,num2){
    return num1+num2;
}


function print(string){
    node=document.createElement("li");
    text=document.createTextNode(string+" \n ");
    node.appendChild(text);
    document.getElementById("app").appendChild(node);
}