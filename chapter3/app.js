age=22;

alert("i am "+age+"Years old");
var count=1

if(!localStorage.getItem("count")){
    localStorage.setItem("count",1);
}else{
   count= localStorage.getItem("count");
   count++;
   localStorage.setItem("count",count);
}

alert(count);


birthyear=1999;

node=document.createTextNode("my birth year is "+birthyear)

document.getElementById("age").appendChild(node);

name=prompt("User name");
prodect=prompt("Prodect name");
qua=prompt("quantity");

node1=document.createTextNode(name+' ordered '+qua +' '+ prodect+'(s) on XYZ Clothing store')

document.getElementById("prodect").appendChild(node1);

