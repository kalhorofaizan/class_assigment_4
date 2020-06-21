date =new Date();
print("task 1");
print(date);
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

print("task 2");
print(monthNames[date.getMonth()]);
print("task 3");
weekdays =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
print(weekdays[date.getDay()]);

print("task  4");
print("Customer Name: ABC");
print("Month: "+monthNames[date.getMonth()])
print("Number of Units: 456");
print("Charges per units: 16");
print("Net Amount: payable:"+ (456*166).toString() );
print("Late Fee :"+350);
print("Gross Amount : "+((456*16)+350).toString());




function print(string){
    node=document.createElement("li");
    text=document.createTextNode(string+" \n ");
    node.appendChild(text);
    document.getElementById("app").appendChild(node);
}