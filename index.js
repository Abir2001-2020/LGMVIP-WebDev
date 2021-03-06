//Navigation On scroll

window.addEventListener("scroll",function(){
    const header = document.querySelector(".header")
    header.classList.toggle('sticky',window.scrollY > 0)
})

//For responsiveness

const navBtn = document.querySelector('.nav')
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')

menuBtn.addEventListener("click", () => {
    navBtn.classList.add('active')
});

closeBtn.addEventListener("click", () => {
    navBtn.classList.remove("active")
})

//For Image sliding

var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){

  if(direction=="next"){
     index++;
      if(index==totalSlides){
       index=0;
      }
  } 
  else{
          if(index==0){
           index=totalSlides-1;
          }
          else{
           index--;
          }
   }

 for(i=0;i<slides.length;i++){
         slides[i].classList.remove("active");
 }
 slides[index].classList.add("active");     

}







