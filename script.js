var statusF = document.querySelector("h2");
var adddF = document.querySelector("#addF");
var remoov = document.querySelector("#removeF")

adddF.addEventListener("click",function(){
    statusF.innerHTML="Freinds";
    statusF.style.color="green";
})
remoov.addEventListener("click",function(){
    statusF.innerHTML="Stranger";
    statusF.style.color="red";
})
