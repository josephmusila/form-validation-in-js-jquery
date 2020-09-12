"use strict";

/*
function addBox() {
    var temp = document.getElementById("temp").content;
    var copy = document.importNode(temp, true);
    document.getElementById("app").appendChild(copy);

}
document.getElementById("btn").addEventListener("click",addBox);
*/
function valid() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var sub = document.getElementById("submit");
    var id= document.getElementById("id").value;
    var pin = document.getElementById("pin").value;
    var pin2 = document.getElementById("pin2").value;


    if (name == "" || age=="" || id=="" ||pin==" " ) {
        document.getElementById("err").innerHTML="highlighted fields  cannot be empty";
        document.getElementById("container").classList.add("not");
        //document.getElementById("details").classList.add("disp");
       return false;
     
    }else{
        document.getElementById("container").classList.remove("not");

    }
    if(age<18 ){
       
        document.getElementById("age").classList.add("not");
        document.getElementById("err").innerHTML="Only over 18 years allowed";
        document.getElementById("details").classList.add("disp");
        return false;
    }else{
        document.getElementById("age").classList.remove("not");
        document.getElementById("err").innerHTML="";
        

    }
    if(pin.length!==8){
        document.getElementById("pin").classList.add("not");
        document.getElementById("err").innerHTML="pin should be 8 digits long";
        //document.getElementById("details").classList.add("disp");
        return false;
    }else {
        document.getElementById("pin").classList.remove("not");
        document.getElementById("err").innerHTML="";
    }
    if(pin!==pin2){
        document.getElementById("err").innerHTML="pin must be the same";
        document.getElementById("pin").classList.add("not");
        document.getElementById("pin2").classList.add("not");
        //document.getElementById("details").classList.add("disp");
    }else{
        document.getElementById("pin").classList.remove("not");
        document.getElementById("pin2").classList.remove("not");

    }
    document.getElementById("pin2").classList.remove("not");
    document.getElementById("err").innerHTML="filled succesfully";
    //document.getElementById("details").classList.remove("disp");
  //output
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var sub = document.getElementById("submit");
    var id= document.getElementById("id").value;
    var pin = document.getElementById("pin").value;
    var pin2 = document.getElementById("pin2").value;

      // document.getElementById("first").innerHTML= "your name is"  + name ;
      // document.getElementById("second").innerHTML= "your age is"   +  age  +  "years";
       //document.getElementById("third").innerHTML= "your id is"  +  id ;
       //document.getElementById("fourth").innerHTML= "your pin is"  + pin ;
        
   

    

}
document.getElementById("submit").addEventListener("click", valid);
