var fadeIn = document.getElementById('fadeIn');


console.log(parent);



window.addEventListener('scroll', function(){

  console.log(window.pageYOffset );



      if(window.pageYOffset > 700){


          fadeIn.style.opacity = 1;




      }




});
