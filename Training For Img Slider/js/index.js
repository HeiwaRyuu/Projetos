var imageSlider = document.querySelectorAll('.slide');
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
var current = 0;

/* Clear function */

function reset(){
    for(let i = 0; i < imageSlider.length; i++){
        imageSlider[i].style.display = 'none';
        }
}

/* Slide Starter */

function startSlide(){
    reset();
    imageSlider[0].style.display = 'block';
}
/* Left and Right Sliding movements */

function slideLeft(){
    reset();
    imageSlider[current - 1].style.display = 'block';
    current--;
}

function slideRight(){
    reset();
    imageSlider[current + 1].style.display = 'block';
    current++;
}
/* Left and Right arrow click events */
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = imageSlider.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function(){
    if(current === imageSlider.length - 1){
        current = -1;
    }
    slideRight();
});
startSlide();