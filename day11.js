var key = document.querySelectorAll('.key')

var soundList = { 
    snd1: new Howl({src:['audio/1.mp3']}),  
    snd2: new Howl({src:['audio/2.mp3']}),
    snd3: new Howl({src:['audio/3.mp3']}),
    snd4: new Howl({src:['audio/4.mp3']}),  
    snd5: new Howl({src:['audio/5.mp3']}),
    snd6: new Howl({src:['audio/6.mp3']}),
    snd7: new Howl({src:['audio/7.mp3']}),  
    snd8: new Howl({src:['audio/8.mp3']}),
    snd9: new Howl({src:['audio/9.mp3']}),
    snd10: new Howl({src:['audio/laser.mp3']}),
    snd11: new Howl({src:['audio/pewpew.mp3']}),
}


var keyList = {};

window.addEventListener('keydown', function(evt){
    keyList[evt.keyCode] = true;
    console.log(keyList)
    if (evt.repeat) return;
    if (keyList[65]){
        soundList.snd1.play();
        key[0].classList.add('keyactive');
    }
    if (keyList[87]){
        soundList.snd2.play();
        console.log(key[1])
        key[1].classList.add('keyactive');
    }
    if (keyList[83]){
        soundList.snd3.play();
        key[2].classList.add('keyactive');
    }
    if (keyList[69]){
        soundList.snd4.play();
        key[3].classList.add('keyactive');
    }
    if (keyList[68]){
        soundList.snd5.play();
        key[4].classList.add('keyactive');
    }
    if (keyList[82]){
        soundList.snd6.play();
        key[5].classList.add('keyactive');
    }
    if (keyList[70]){
        soundList.snd7.play();
        key[6].classList.add('keyactive');
    }
    if (keyList[84]){
        soundList.snd8.play();
        key[7].classList.add('keyactive');
    }
    if (keyList[71]){
        soundList.snd9.play();
        key[8].classList.add('keyactive');
    }
    if (keyList[32]){
        soundList.snd10.play();
    }
    if (keyList[13]){
        soundList.snd11.play();
    }
})

document.addEventListener('keyup', function(evt){
    if (keyList[65]){
        key[0].classList.remove('keyactive');
    }
    if (keyList[87]){
        key[1].classList.remove('keyactive');
    }
    if (keyList[83]){
        key[2].classList.remove('keyactive');
    }
    if (keyList[69]){
        key[3].classList.remove('keyactive');
    }
    if (keyList[68]){
        key[4].classList.remove('keyactive');
    }
    if (keyList[82]){
        
        key[5].classList.remove('keyactive');
    }
    if (keyList[70]){
        
        key[6].classList.remove('keyactive');
    }
    if (keyList[84]){
       
        key[7].classList.remove('keyactive');
    }
    if (keyList[71]){
       
        key[8].classList.remove('keyactive');
    }
    
    delete keyList[evt.keyCode];
})
setInterval(function(){ 
},10);