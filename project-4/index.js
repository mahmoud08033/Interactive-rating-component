let x =document.querySelector( '#container');
let y =document.querySelector( '#containr');
let btn = document.querySelector('#button');
let z = document.querySelectorAll('.num');
let d = document.querySelector('.demo');







z.forEach( function (rating){

    rating.addEventListener( 'click', function(event){
        
        event.preventDefault();

      const ratingtext= rating.querySelector('a').textContent;
      
      d.innerHTML = `You select ${ratingtext} out of 5`;

    
    })
    


})




    

btn.addEventListener('click', function(){


  x.classList.add('hide');
  y.classList.remove('hide');







}) 





   





