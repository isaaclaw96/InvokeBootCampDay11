// to detect which key is press

var boxy = document.getElementById('boxy');
var snd1 = document.getElementById('snd1');
var snd2 = document.getElementById('snd2');
var snd3 = document.getElementById('snd3');
var snd4 = document.getElementById('snd4');
var snd5 = document.getElementById('snd5');


var keyList = {};

var boxyPos = {x:0, y:0};

window.addEventListener('keydown', keyPressed);
window.addEventListener('keyup', keyReleased);



function keyPressed (evt){
    // console.log(evt);

    keyList[evt.keyCode] = true;   // push the keycode into array and assign to true
    // console.log(keyList);
    if(keyList[39]){
        console.log('go-right')
        boxyPos.x += 5;
        snd1.play();
    } if(keyList[38]){
        console.log('go-up');
        boxyPos.y -= 5;
        snd2.play();
    } if(keyList[40]){
        console.log('go-up');
        boxyPos.y += 5;
        snd3.play();
    } if(keyList[37]){
        console.log('go-right')
        boxyPos.x -= 5;
        snd4.play();
    }

   

    // switch(evt.keyCode){ //only moves in one direction
    //     case 39:
    //         boxyPos.x += 5;
    //         snd1.play();
    //         break;
    //     case 37:
    //         boxyPos.x -= 5;
    //         snd2.play();
    //         break;
    //     case 38:
    //         boxyPos.y -=5;
    //         snd3.play();
    //         break;
    //     case 40:
    //         boxyPos.y +=5;
    //         break;
    // }
    boxy.style.top = boxyPos.y + 'px';
    boxy.style.left = boxyPos.x + 'px';


}

function keyReleased(evt){
    delete keyList[evt.keyCode];
}

