
print("task1")
print("traingle area a=10,b=12,c=20:=> area= "+areaoftriangle(10,12,20,finds(10,12,20)));

print("task2")
print("power of 3 by 2 = "+power(3,2));

print("task3");
print("String 'my name is faizan' ::: deleteVovels => "+deleteVovels("my name is faizan"))

print("task4")
print("2Km convert to cm => "+kmtocm(3)+" cm  :::meters => "+kmtom(2)+" meters  :::feet => "+kmtofeet(2)+" feets   :::inches => "+kmtoinches(2)+" inches");
money=prompt("enter money")
print("conver "+money);
print(moneytocoin(parseInt(money)));




function moneytocoin(m){
    h=0;
    f=0;
    t=0;
    while(m>=0){
        
        if(m-100>=0){
            m=m-100;
            h++;
        }else if(m-50>=0){
            m=m-50;
            f++;
        }else if(m-10>=0){
            m=m-10;
            t++;
        }else {
            break;
        }
    }

return "you will have "+h+" hundred notes "+f+" fifty notes "+t+"  ten notes  "+m+" coins";
}





function kmtocm(km){
    return km*100000;
}

function kmtom(km){
    return km*1000;
}

function kmtofeet(km){
    return km*3280.84;
}

function kmtoinches(km){
    return km*39370.1;
}



function deleteVovels(string){
   var destring="";
    string=string.split("");
    string.forEach(element => {
        if(element!="a" && element!="e" && element!="i"&&element!="o" && element!="u"){
            destring+=element;
        }
    });
    return destring;
}

function power(a,b){
    return a**b;
}




function areaoftriangle(a,b,c,s){
    
    area = s*(s-a)*(s-b)*(s-c);
    return area;
}


function finds(a,b,c){
    s=(a+b+c)/2;
    return s
}






function print(string){
    node=document.createElement("li");
    text=document.createTextNode(string+" \n ");
    node.appendChild(text);
    document.getElementById("app").appendChild(node);
}