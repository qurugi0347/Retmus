
var showDetail= function(obj){
  var children = obj.children;
  obj.classList.add("active");
  var detail_slider=document.getElementById("detail_slider");
  var list_slider=document.getElementById("list_slider");
  while(children.length>1){
    children[1].classList.remove("hidden");
    detail_slider.appendChild(children[1]);
  }
  detail_slider.classList.remove("hidden");
  list_slider.classList.add("hidden");
  document.getElementById("back").classList.remove("hidden");
}

var closeDetail = function(){
  var obj = document.getElementsByClassName("active")[0];
  var detail_slider=document.getElementById("detail_slider");
  var list_slider=document.getElementById("list_slider");
  while(detail_slider.children.length>0){
    detail_slider.children[0].classList.add("hidden");
    obj.appendChild(detail_slider.children[0]);
  }
  detail_slider.classList.add("hidden");
  list_slider.classList.remove("hidden");
  obj.classList.remove("active");
  document.getElementById("back").classList.add("hidden");
}

//$('#slider')
