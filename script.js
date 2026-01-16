var main = document.querySelector("#main")
var cursor = document.querySelector(".cursor")

main.addEventListener("mousemove", function(dets){
  //These left and will only work when you give the positon: absolute; to the cursor in css
  cursor.style.left = dets.x+"px"; 
  cursor.style.top = dets.y+"px";
})
h1.addEventListener("mouseenter",function(){
  cursor.style.transform += "scale(2)";
})
h1.addEventListener("mouseleave",function(){
  cursor.style.transform = "translate(-50%,-50%)";
})