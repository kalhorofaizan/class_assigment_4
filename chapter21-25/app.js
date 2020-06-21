index=prompt("Enter index for Pakistan");
a="Pakistan"


print("task 1")
print("String:Pakistai!");
print("index of "+a[index]+" "+index);
print("task 2");
city="Hyderabad";
print("City: "+city);
var newcity =city.replace("Hyder","Islam")
print("after replace: "+newcity);

st="Ali and Sami are best friends. They play cricket and football together."
print("task 3");
print(st);
print("replace");
newst=st.replace("and","&");
newst=newst.replace("and","&");
print(newst);
print("task 4");
upst=prompt("Enter string");
newupst= upst.toUpperCase();
print(newupst);







function print(string){
    node=document.createElement("li");
    text=document.createTextNode(string+" \n ");
    node.appendChild(text);
    document.getElementById("app").appendChild(node);
}