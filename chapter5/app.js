num1=parseInt( 3);
num2=parseInt( 5);

n=num2+num1;
node=document.createElement("li");
text=document.createTextNode("sum of 3 and 5 is "+ n);
node.appendChild(text);
document.getElementById("math").appendChild(node);

n=num1-num2;
node=document.createElement("li");
text=document.createTextNode("sub of 3 and 5 is "+ n);
node.appendChild(text);
document.getElementById("math").appendChild(node);

node=document.createElement("li");
text=document.createTextNode("mult of 3 and 5 is "+num1*num2);
node.appendChild(text);
document.getElementById("math").appendChild(node);

node=document.createElement("li");
text=document.createTextNode("div of 3 and 5 is "+num1/num2);
node.appendChild(text);
document.getElementById("math").appendChild(node);


// num;

node=document.createElement("li");
text=document.createTextNode("Q3");
node.appendChild(text);
document.getElementById("math").appendChild(node);

num=null;
node=document.createElement("li");
text=document.createTextNode("Value after variable declaration is: not defined");
node.appendChild(text);
document.getElementById("math").appendChild(node);

num=2;

node=document.createElement("li");
text=document.createTextNode("Initialvalue: "+num);
node.appendChild(text);
document.getElementById("math").appendChild(node);

num++;
node=document.createElement("li");
text=document.createTextNode("Initialvalue: "+num);
node.appendChild(text);
document.getElementById("math").appendChild(node);
num=num+7;
node=document.createElement("li");
text=document.createTextNode("Value after addition is: "+num);
node.appendChild(text);
document.getElementById("math").appendChild(node);
num--;
node=document.createElement("li");
text=document.createTextNode("Value after decrement is: "+num);
node.appendChild(text);
document.getElementById("math").appendChild(node);

node=document.createElement("li");
text=document.createTextNode("The remainder is : "+num%3);
node.appendChild(text);
document.getElementById("math").appendChild(node);

total=600*5;
node=document.createElement("li");
text=document.createTextNode("Total cost to buy 5 tickets to a movies is "+total+" PKR");
node.appendChild(text);
document.getElementById("math").appendChild(node);



for(i=1;i<=10;i++){
    node=document.createElement("li");
    text=document.createTextNode("4x1 = "+4*i);
    node.appendChild(text);
    document.getElementById("math").appendChild(node);
}

cel1=25
fr1=cel1*(9/5)+32

fr2=80;
cel2=(fr2-32)*5/9

node=document.createElement("li");
text=document.createTextNode(cel1+"C is "+fr1+" F");
node.appendChild(text);
document.getElementById("math").appendChild(node)

node=document.createElement("li");
text=document.createTextNode(fr2+"F is "+cel2+" C");
node.appendChild(text);
document.getElementById("math").appendChild(node)

