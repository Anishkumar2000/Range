var a = document.querySelector("#ran");
a.addEventListener("input",check);
function check() {
   var ran = document.querySelector("#ran").value;

   var b = document.querySelector("#in").setAttribute("value", ran);

}



