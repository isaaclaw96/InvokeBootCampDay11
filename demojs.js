var clickRight = document.getElementById('right-btn');
var clickLeft = document.getElementById('left-btn');
var sliderHolder = document.getElementById('slider-holder');

var i = 0;

var j = 0;

function rightClick(posNum){
    i += posNum;
    console.log(i)
    if (i > 0){
        i = -300;
    } else if ( i < -300){
        i = 0;
    }
    sliderHolder.style.transform = `translateX(${i}vw)`; 
}

var sliderTimer = null;
sliderTimer = setInterval(timer,2000);
function timer() {
    j += -100;

    if (j < -300){ //(j < -((sliderList.length - 1)*100))
        j = 0;
    }
    sliderHolder.style.transform = `translateX(${j}vw)`
}

function stopTimer(sliderTimer){
    clearInterval(sliderTimer)
}
function resumeTimer() {
    sliderTimer = setInterval(timer,2000);
}