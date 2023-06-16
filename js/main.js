var check=document.getElementById("color");
    
var id=document.getElementById("btn-color");

check.addEventListener("click",function() {

    
var a=["#060606","red","pink","yellow","green","blue", "violet","brown","gold","skyblue"];

var clip=Math.round(Math.random()*a.length);
id.style.backgroundColor=a[clip];

})
