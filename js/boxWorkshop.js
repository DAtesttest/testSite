////make function to toggle transparency on photo/arch pages
//for above to make them so they only load once!

//Architecture Picture Arrays
var sem1 = ['./img/arch/sem1/keletonOfADrawing.jpg', './img/arch/sem1/pinhole.jpg', './img/arch/sem1/skeletonOfADrawing.jpg', './img/arch/sem1/sundailPavilion.jpg' ];
var sem2 = ['./img/arch/sem2/Pavilion.jpg', './img/arch/sem2/sculpture1.jpg', './img/arch/sem2/sculpture2.jpg', './img/arch/sem2/bridgeproject.jpg'];
var sem3 = ['./img/arch/sem3/readingroom.jpg', './img/arch/sem3/houseaddition.jpg', './img/arch/sem3/houseanalysis.jpg', './img/arch/sem3/conceptualexplorations.jpg'];
var sem4 = ['./img/arch/sem4/winterplaza.jpg'];

//Photography Picture Arrays
var photoAmsterdam = ['./img/PictureByGallery/Amsterdam/cantelever.jpg', './img/PictureByGallery/Amsterdam/amsterdamtrainstation.jpg', './img/PictureByGallery/Amsterdam/nemo.jpg'];
var photoBelgium = ['./img/PictureByGallery/Belgium/IMG_1017.jpg', './img/PictureByGallery/Belgium/IMG_1018.jpg', './img/PictureByGallery/Belgium/streetart.jpg', './img/PictureByGallery/Belgium/IMG_1067.jpg'];
var photoBerlin = ['./img/PictureByGallery/Berlin/berlinwall.jpg'];
var photoBolivia = ['./img/PictureByGallery/Bolivia/bolivia3.jpg', './img/PictureByGallery/Bolivia/bolivia2.jpg', './img/PictureByGallery/Bolivia/bolivia6.jpg', './img/PictureByGallery/Bolivia/Bolivia4.jpg'];
var photoFrance = ['./img/PictureByGallery/France2012/france2012-2.jpg', './img/PictureByGallery/France2015/grapes.jpg', './img/PictureByGallery/France2015/Barcelonedugers1.jpg', './img/PictureByGallery/France2015/caveavin.jpg'];
var photoNewYork = ['./img/PictureByGallery/NewYork/IMG_9020.jpg', './img/PictureByGallery/NewYork/IMG_8867.jpg', './img/PictureByGallery/NewYork/IMG_9651.jpg', './img/PictureByGallery/NewYork/IMG_9087.jpg', './img/PictureByGallery/NewYork/IMG_9523.jpg', './img/PictureByGallery/NewYork/IMG_9235.jpg', './img/PictureByGallery/NewYork/IMG_9523.jpg', './img/PictureByGallery/NewYork/newyork.jpg'];

//Background Array
var archBG = ['./img/arch/bg/sem1.jpg','./img/arch/bg/sem2.jpg', './img/arch/bg/pavilion.sem3', './img/arch/bg/sem4',];
var photoBG = ['./img/PictureByGallery/Amsterdam/cantelever.jpg'];

var optionTarget = document.getElementsByClassName("optionTarget");
var targetArray = [sem1, sem2, sem3, sem4, photoAmsterdam, photoBelgium, photoBerlin, photoBerlin, photoBolivia, photoFrance, photoNewYork];
var nameArray = [sem1.name, sem2.name, sem3.name, sem4.name, photoAmsterdam, photoBelgium, photoBerlin, photoBolivia, photoFrance, photoNewYork];
var attachTo = document.getElementsByClassName("fillTarget")[0];

sem1.name = "sem1";
sem2.name = "sem2";
sem3.name = "sem3";
sem4.name = "sem4";
photoAmsterdam.name = "photoAmsterdam";
photoBelgium.name = "photoBelgium";
photoBerlin.name = "photoBerlin";
photoBolivia.name = "photoBolivia";
photoFrance.name = "photoFrance";
photoNewYork.name = "photoNewYork";

$(optionTarget).on("click", function() {
    whatId = this.id;
    function checkClick(whatId, nameArray) {
        return nameArray.indexOf(whatId) > -1;
    }
    if(checkClick) {
        chooseImages(whatId);
        //setBG(whatId);
    }
    return false;
});

function chooseImages(whatId){
    var count = 0;
    attachTo.innerHTML = "";
    for(i = 0; i < targetArray.length; i ++) {
        if (whatId == targetArray[i].name) {
            target = targetArray[i];
        }
    }
    for(i = 0; i < 2 ; i++ ) {
         if(target.length < 2) {
             whichOne = target[i];
             assignBoxImages(whichOne);
             break;
         }
        whichOne = target[i];
        assignBoxImages(whichOne);
    }
}

//make .box center of container and 2/3 as wide
//scroll button on right
//lead to next picture
//change the way pictures are boxed by only loading two at a time:
//current focus and next in line
//button on right that cycles all images
//load the image flipper at initial page, cycle through semesters 
//highlight the menu at what semester it is at
//have zoom effect to go from semester to projects
//have zoom effect when mouse over next in line

function setBG(target) {
    var bgTarget = 'url(' + './img/arch/bg/' + target + '.jpg)';
    document.getElementById("archBody").style.backgroundImage = bgTarget;
}

function assignBoxImages(whichOne) {
    var targetFill = document.createElement("img");

    targetFill.setAttribute("class", "box");
    targetFill.setAttribute("src", whichOne);
    attachTo.appendChild(targetFill);
}
