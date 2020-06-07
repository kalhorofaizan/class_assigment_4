i=0;


node=document.createElement("li");
text=document.createTextNode("value of i is "+i);
node.appendChild(text);
document.getElementById("math").appendChild(node)


node=document.createElement("li");
text=document.createTextNode("value of i++ is "+i++);
node.appendChild(text);
document.getElementById("math").appendChild(node)

node=document.createElement("li");
text=document.createTextNode("now value of i is "+i);
node.appendChild(text);
document.getElementById("math").appendChild(node)

node=document.createElement("li");
text=document.createTextNode("value of ++i is "+ ++i);
node.appendChild(text);
document.getElementById("math").appendChild(node)

node=document.createElement("li");
text=document.createTextNode("now value of i is "+i);
node.appendChild(text);
document.getElementById("math").appendChild(node)


node=document.createElement("li");
text=document.createTextNode("value of i-- is "+ i--);
node.appendChild(text);
document.getElementById("math").appendChild(node)

node=document.createElement("li");
text=document.createTextNode("now value of i is "+i);
node.appendChild(text);
document.getElementById("math").appendChild(node)

node=document.createElement("li");
text=document.createTextNode("value of --i is "+ -i);
node.appendChild(text);
document.getElementById("math").appendChild(node)

node=document.createElement("li");
text=document.createTextNode("now value of i is "+i);
node.appendChild(text);
document.getElementById("math").appendChild(node)


node=document.createElement("li");
text=document.createTextNode("Q2");
node.appendChild(text);
document.getElementById("math").appendChild(node)

a=2;
b=1;
result=--a- --b+ ++b+b--;
node=document.createElement("li");
text=document.createTextNode("Result : "+result);
node.appendChild(text);
document.getElementById("math").appendChild(node)


name=prompt("Enter user name");

alert("hello user  "+name);

number=prompt("Enter number");

if(!number){
    number=5;
}



for(i=1;i<=10;i++){
    node=document.createElement("li");
    text=document.createTextNode(number+"x "+i+" = "+number*i);
    node.appendChild(text);
    document.getElementById("math").appendChild(node);
}

