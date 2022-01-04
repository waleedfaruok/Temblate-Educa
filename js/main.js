// started iconse
let iconse = document.querySelector(".iconse");
let colora = document.querySelector(".colora");
let ex = document.querySelector(".ex");
let img = document.querySelector(".imge");
let arrayimg = [
    "img/pad1.jpg",
    "img/pad2.jpg",
    "img/pad3.jpg",
    "img/pad6.jpg",
    "img/pad7.jpg",
    "img/pad5.jpg"
];

setInterval(()=>{
let random = Math.floor(Math.random() * arrayimg.length);
img.src = arrayimg[random];
},2000);

iconse.addEventListener("click",function(){
 colora.classList.toggle("add");
});

ex.onclick = function(){
    this.parentElement.classList.remove("add");
};
// end iconse
// start cont
let ib1 = document.querySelectorAll(".ib1 .cont");
let dfals = false;

window.onscroll = function(){
    if(window.scrollY >= 200){
        if(!dfals){
            ib1.forEach((col) => addcint(col));
        }
        dfals = true;
    }
};
function addcint(el){
let cont = el.dataset.cont;
let cler = setInterval(()=>{
  el.textContent++;
  if(el.textContent == cont){
     clearInterval(cler);
  }
},2000 /cont );
};
// end cont


