// target the slider holder
var sliderHolder = document.getElementById('slider-holder');


// using js to create a div


//create a name for the div


//to put the div into 'slider-holder' in html


//using js to detect how many children and append accordingly for the width

var sliderList = [{
    
        id:"slider 1",
        title: "Welcome to Langkawi",
    }, 
    {    
        id: "slider 2",
        title: "Welcome to Malaysia",
    }, 
    {
        id: "slider 3",
        title: "welcome to Malaysia",
    },
    {
        id: "slider 4",
        title: "Welcome to Sarawak",
    }];

for(var i = 0; i < sliderList.length; i++) {
    console.log(sliderList[i]);
    var createSliderElement = document.createElement('div');
    createSliderElement.classList.add('slider-content');
    sliderHolder.appendChild(createSliderElement);
}

//create array sliderItem got 4 objects -> bgImg, title, subtitle


//sliderHolder.style.width = sliderItem.length*100 + 'vw';

//for (var i = 0; i < sliderItem.length; i++) {
//     var sliderEle = document.createElement('div');

//     var sliderTitle = document.createElement('h1');
//     sliderTitle.innerHTML = sliderItem[i].title

//     var sliderSubtitle = document.createElement('p');
//     sliderSubtitle.innerHTML = sliderItem[i].subTitle;

//     sliderEle.classList.add('slider');
//     sliderEle.appendChild(sliderTitle);
//     sliderEle.appendChild(sliderSubtitle);

//     sliderEle.style.backgroundImage = sliderItem[i].bgImg;

//     sliderHolder.appendChild(sliderEle);
// }