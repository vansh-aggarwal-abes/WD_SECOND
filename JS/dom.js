// document.writeln("hello");

function result () {

    let inputData=document.getElementById("inputText").value;
    document.getElementById('text').innerHTML=inputData;


    let changeColor=document.getElementById('text');
    changeColor.style.color="red" ;

    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="pink";
}

let para=document.getElementById("paratext");
function changetextColor() {
    para.style.backgroundColor="#" + Math.floor(Math.random() * 16777215).toString(16);
}
para.addEventListener('mouseover', changetextColor);