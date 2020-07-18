var count=0;
function rowdelete(row){
    document.getElementById(row).remove(); 
}

function show(){
    alert("you click on link")
}


function mouseover(){
    document.getElementById("bulb").src ="./bulb1.png"; 
}

function mouseout(){
    document.getElementById("bulb").src ="./bulb2.png"; 
}
function add(){
    count++;
    document.getElementById("count").innerText =count; 

}
function sub(){
    count--;
    document.getElementById("count").innerText =count;
}