// create element 
let createElemnt = document.createElement("div")
createElemnt.classList.add("resluts");
let createTextNode = document.createTextNode("Thanks");
createElemnt.appendChild(createTextNode);
let thanks = document.querySelector(".quiz");
let submite_bitton = document.querySelector(".submite");
submite_bitton.onclick = function(){
    thanks.remove();
    document.body.appendChild(createElemnt);
}

function welcome() {
    let person = prompt("Hello,what is Your name");
    if (person !=null) {
        document.getElementById("demo").innerHTML="Hello "+person +" ! How are you today?";
    } else 
    eindow.alert("canceued");
}