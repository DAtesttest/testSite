//Architecture Picture Preview Arrays
var sem1Preview = ['./img/arch/sem1/skeletonOfADrawing.jpg', './img/arch/sem1/pinhole.jpg', './img/arch/sem1/sundailPavilion.jpg',];
var sem2Preview = ['./img/arch/sem2/Pavilion.jpg', './img/arch/sem2/sculpture1.jpg', './img/arch/sem2/sculpture2.jpg', './img/arch/sem2/bridgeproject.jpg'];
var sem3Preview = ['./img/arch/sem3/readingroom.jpg', './img/arch/sem3/houseaddition.jpg', './img/arch/sem3/houseanalysis.jpg', './img/arch/sem3/conceptualexplorations.jpg'];
var sem4Preview = ['./img/arch/sem4/winterplaza.jpg'];

//Architecture Picture Arrays

var sem1 = ['./img/arch/sem1/full/skeleton.jpg', './img/arch/sem1/full/sundail.jpg', './img/arch/sem1/full/pinhole.jpg'];


//Photography Picture Preview Arrays
var photoAmsterdamPreview = ['./img/PictureByGallery/Amsterdam/preview/cantelever.jpg', './img/PictureByGallery/Amsterdam/preview/amsterdamtrainstation.jpg', './img/PictureByGallery/Amsterdam/preview/nemo.jpg'];
var photoBelgiumPreview = ['./img/PictureByGallery/Belgium/preview/IMG_1017.jpg', './img/PictureByGallery/Belgium/preview/IMG_1018.jpg', './img/PictureByGallery/Belgium/preview/streetart.jpg', './img/PictureByGallery/Belgium/preview/IMG_1067.jpg'];
var photoBerlinPreview = ['./img/PictureByGallery/Berlin/preview/berlinwall.jpg'];
var photoBoliviaPreview = ['./img/PictureByGallery/Bolivia/preview/bolivia3.jpg', './img/PictureByGallery/Bolivia/preview/bolivia2.jpg', './img/PictureByGallery/Bolivia/preview/bolivia6.jpg', './img/PictureByGallery/Bolivia/preview/Bolivia4.jpg'];
var photoFrancePreview = ['./img/PictureByGallery/France/preview/france2012-2.jpg', './img/PictureByGallery/France/preview/grapes.jpg', './img/PictureByGallery/France/preview/Barcelonedugers1.jpg', './img/PictureByGallery/France/preview/caveavin.jpg'];
var photoNewYorkPreview = ['./img/PictureByGallery/NewYork/preview/IMG_9020.jpg', './img/PictureByGallery/NewYork/preview/IMG_8867.jpg', './img/PictureByGallery/NewYork/preview/IMG_9651.jpg', './img/PictureByGallery/NewYork/preview/IMG_9087.jpg', './img/PictureByGallery/NewYork/preview/IMG_9523.jpg', './img/PictureByGallery/NewYork/preview/IMG_9235.jpg', './img/PictureByGallery/NewYork/preview/IMG_9523.jpg', './img/PictureByGallery/NewYork/preview/newyork.jpg'];

//Photography Picture Arrays
var photoAmsterdam = ['./img/PictureByGallery/Amsterdam/cantelever.jpg', './img/PictureByGallery/Amsterdam/amsterdamtrainstation.jpg', './img/PictureByGallery/Amsterdam/nemo.jpg'];
var photoBelgium = ['./img/PictureByGallery/Belgium/IMG_1017.jpg', './img/PictureByGallery/Belgium/IMG_1018.jpg', './img/PictureByGallery/Belgium/streetart.jpg', './img/PictureByGallery/Belgium/IMG_1067.jpg'];
var photoBerlin = ['./img/PictureByGallery/Berlin/berlinwall.jpg'];
var photoBolivia = ['./img/PictureByGallery/Bolivia/bolivia3.jpg', './img/PictureByGallery/Bolivia/bolivia2.jpg', './img/PictureByGallery/Bolivia/bolivia6.jpg', './img/PictureByGallery/Bolivia/Bolivia4.jpg'];
var photoFrance = ['./img/PictureByGallery/France/france2012-2.jpg', './img/PictureByGallery/France/grapes.jpg', './img/PictureByGallery/France/Barcelonedugers1.jpg', './img/PictureByGallery/France/caveavin.jpg'];
var photoNewYork = ['./img/PictureByGallery/NewYork/IMG_9020.jpg', './img/PictureByGallery/NewYork/IMG_8867.jpg', './img/PictureByGallery/NewYork/IMG_9651.jpg', './img/PictureByGallery/NewYork/IMG_9087.jpg', './img/PictureByGallery/NewYork/IMG_9523.jpg', './img/PictureByGallery/NewYork/IMG_9235.jpg', './img/PictureByGallery/NewYork/IMG_9523.jpg', './img/PictureByGallery/NewYork/newyork.jpg'];

//Background Array
var archBG = ['./img/arch/bg/sem1.jpg','./img/arch/bg/sem2.jpg', './img/arch/bg/pavilion.sem3', './img/arch/bg/sem4',];
var photoBG = ['./img/PictureByGallery/Amsterdam/cantelever.jpg'];

var targetArray = [sem1, sem1Preview, sem2Preview, sem3Preview, sem4Preview, photoAmsterdamPreview, photoAmsterdam, photoBelgiumPreview, photoBelgium, photoBerlinPreview, photoBerlin, photoBoliviaPreview, photoBolivia, photoFrancePreview, photoFrance, photoNewYorkPreview, photoNewYork];
var nameArray = [sem1.name, sem1Preview.name, sem2Preview.name, sem3Preview.name, sem4Preview.name, photoAmsterdam, photoBelgium, photoBerlin, photoBolivia, photoFrance, photoNewYork];
var optionTarget = document.getElementsByClassName("optionTarget");
var attachTo = document.getElementsByClassName("fillTarget")[0];
var zoomedImage = document.getElementsByClassName("zoomedImage")[0];

sem1.name = "sem1";
sem1Preview.name = "sem1Preview";
sem2Preview.name = "sem2Preview";
sem3Preview.name = "sem3Preview";
sem4Preview.name = "sem4Preview";
photoAmsterdam.name = "photoAmsterdam";
photoAmsterdamPreview.name = "photoAmsterdamPreview";
photoBelgium.name = "photoBelgium";
photoBelgiumPreview.name = "photoBelgiumPreview";
photoBerlin.name = "photoBerlin";
photoBerlinPreview.name = "photoBerlinPreview";
photoBolivia.name = "photoBolivia";
photoBoliviaPreview.name = "photoBoliviaPreview";
photoFrance.name = "photoFrance";
photoFrancePreview.name = "photoFrancePreview";
photoNewYork.name = "photoNewYork";
photoNewYorkPreview.name = "photoNewYorkPreview";

var x = document.getElementById("photoBody");
var y = document.getElementById("archBody");

//make this so it only loads 5 images at a time
//make it so hover near arrows scrolls slowly, say 200% instead of 400%
try {
    if (y.id === "archBody") {
        for(i = 0; i < targetArray.length; i ++) {
            x = targetArray[i];
            for(r = 0; r < x.length; r ++) {
                if(x[r].indexOf("full") < 0 && x[r].indexOf("sem") > -1) {
                    assignBoxImages(x[r]);
                }
            }
        }
    }
} catch (e) {}

try {
    if (x.id === "photoBody") {
        $('.scrollButton').css("display", "initial");
        for(i = 0; i < targetArray.length; i ++) {
            x = targetArray[i];
            for(r = 0; r < x.length; r ++) {
                if(x[r].indexOf("preview") > -1) {
                    assignBoxImages(x[r]);
                }
            }
        }
    }
} catch (e) {}

$(optionTarget).on("click", function() {
    whatId = this.id;
    function checkClick(whatId, nameArray) {
        return nameArray.indexOf(whatId) > -1;
    }

    if(checkClick) {
        attachTo.innerHTML = "";
        setBG(whatId);
        chooseImages(whatId);
        $('.scrollButton').css("display", "initial");
    }
    return false;
});

function chooseImages(whatId){
    $('#contentContainer').animate( {
        scrollLeft: "0%"
    }, "fast");


    for(i = 0; i < targetArray.length; i ++) {
        if (whatId == targetArray[i].name) {
            target = targetArray[i];
        }
    }
    for(i = 0; i < target.length; i++ ) {
        whichOne = target[i];
        if(target[i].indexOf("full") > -1) {
            assignBoxImagesFull(whichOne);
        } else {
            assignBoxImages(whichOne);
        }
    }
}

$('.scrollRight').on("click", function() {
    $('#contentContainer').animate( {
        scrollLeft: "+=500%"
    }, "fast");
});

$('.scrollLeft').on("click", function() {
    $('#contentContainer').animate( {
        scrollLeft: "-=500%"
    }, "fast");
});


//load the image flipper at initial page, cycle through semesters
//highlight the menu at what semester it is at
//have zoom effect to go from semester to projects
//have zoom effect when mouse over next in line
//look into flat design for icons and links


function setBG(target) {

    if (target.substring(0, 3) == "sem") {
        var bgTarget = 'url(' + './img/arch/bg/' + target + '.jpg)';
        document.getElementById("archBody").style.backgroundImage = bgTarget;
    } else {
        return;
    }
}

function assignBoxImagesFull(whichOne) {
    var targetFill = document.createElement("img");

    targetFill.setAttribute("class", "box2");
    targetFill.setAttribute("name", whichOne);
    targetFill.setAttribute("src", whichOne);
    attachTo.appendChild(targetFill);
}

function assignBoxImages(whichOne) {
    var targetFill = document.createElement("img");

    targetFill.setAttribute("class", "box");
    targetFill.setAttribute("name", whichOne);
    targetFill.setAttribute("src", whichOne);
    attachTo.appendChild(targetFill);
}

//Zoom image stuff
$('.fillTarget').on("click", "img", function() {
    thisName = this.name;
    newName = thisName.replace("preview/", "");
    zoomBox = document.createElement("img");

    $("#photoBody").removeClass("initial");
    $("#photoBody").addClass("zoom");
    zoomBox.setAttribute("class", "imageZoom");
    zoomBox.setAttribute("src", newName);
    zoomedImage.appendChild(zoomBox);
    $(".box").css("opacity", "0.2");
    $("#contentPhotography").css("border", "0px");
});

$('.zoomedImage').on("click", "img", function() {
    zoomedImage.innerHTML = "";
    $("#photoBody").removeClass("zoom");
    $("#photoBody").addClass("initial");
    $("body").css("background-color", "white");
    $(".box").css("opacity", "1");
    $("#contentPhotography").css("border-top", "2px solid #2E2B2B");
    $("#contentPhotography").css("border-bottom", "2px solid #2E2B2B");
});
