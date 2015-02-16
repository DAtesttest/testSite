//ARRAYS:
//Architecture Picture Preview Arrays
var sem1Preview = ['./img/arch/sem1/skeletonOfADrawing.jpg', './img/arch/sem1/pinhole.jpg', './img/arch/sem1/sundailPavilion.jpg',];
var sem2Preview = ['./img/arch/sem2/Pavilion.jpg', './img/arch/sem2/sculpture1.jpg', './img/arch/sem2/sculpture2.jpg', './img/arch/sem2/bridgeproject.jpg'];
var sem3Preview = ['./img/arch/sem3/readingroom.jpg', './img/arch/sem3/houseaddition.jpg', './img/arch/sem3/houseanalysis.jpg', './img/arch/sem3/conceptualexplorations.jpg'];
var sem4Preview = ['./img/arch/sem4/winterplaza.jpg'];
//Architecture Picture Arrays
var sem1 = ['./img/arch/sem1/full/skeleton.jpg', './img/arch/sem1/full/sundail.jpg', './img/arch/sem1/full/pinhole.jpg'];
var sem2 = ['./img/arch/sem1/full/skeleton.jpg', './img/arch/sem1/full/sundail.jpg', './img/arch/sem1/full/pinhole.jpg'];
var sem3 = ['./img/arch/sem1/full/skeleton.jpg', './img/arch/sem1/full/sundail.jpg', './img/arch/sem1/full/pinhole.jpg'];
var sem4 = ['./img/arch/sem1/full/skeleton.jpg', './img/arch/sem1/full/sundail.jpg', './img/arch/sem1/full/pinhole.jpg'];
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
//Name Arrays
var targetArray = [sem1, sem1Preview, sem2Preview, sem3Preview, sem4Preview, photoAmsterdamPreview, photoAmsterdam, photoBelgiumPreview, photoBelgium, photoBerlinPreview, photoBerlin, photoBoliviaPreview, photoBolivia, photoFrancePreview, photoFrance, photoNewYorkPreview, photoNewYork];
var nameArray = [sem1.name, sem1Preview.name, sem2Preview.name, sem3Preview.name, sem4Preview.name, photoAmsterdam, photoBelgium, photoBerlin, photoBolivia, photoFrance, photoNewYork];
sem1.name = "sem1";
sem1Preview.name = "sem1Preview";
sem2Preview.name = "sem2Preview";
sem3Preview.name = "sem3Preview";
sem4Preview.name = "sem4Preview";
sem1.name = "sem1";
sem2.name = "sem2";
sem3.name = "sem3";
sem4.name = "sem4";
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
//Image Variables
var attachTo = document.getElementsByClassName("fillTarget")[0];
var optionTarget = document.getElementsByClassName("optionTarget");
var zoomedImage = document.getElementsByClassName("zoomedImage")[0];
//Page Variables

//highlight the menu at what semester it is at
//create back button to go to initial arch page
//header and footer start at middle of page, taking up whole page
////quick transition down, revealing site, and bringing them to normal position

//Detect current page
$(document).ready(function() {
    var x = document.getElementsByTagName("body")[0];
    try {
        if (x.id === "photoBody") {
            initialPhotog();
        }
    } catch (e) {}
    try {
        if (x.id === "archBody") {
            initialArch();
        }
    } catch (e) {}
});

function initialPhotog() {
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

function initialArch() {
    console.log("cat");
    for(i = 0; i < targetArray.length; i ++) {
        x = targetArray[i];
        for(r = 0; r < x.length; r ++) {
            if(x[r].indexOf("full") < 0 && x[r].indexOf("sem") > -1) {
                assignBoxImages(x[r]);
            }
        }
    }
}

//checks what is clicked on
$(optionTarget).on("click", function() {
    whatId = this.id;
    if(whatId === "back") {
        location.reload();
    }
    function checkClick(whatId, nameArray) {
        return nameArray.indexOf(whatId) > -1;
    }
    if(checkClick) {
        //clears already loaded images
        attachTo.innerHTML = "";
        //call images associated with click and creats scroll buttons
        chooseImages(whatId);
        $('.scrollButton').css("display", "initial");
    }
    return false;
});

function chooseImages(whatId){
    $('.contentContainer').removeClass("archGrid");
    $('.contentContainer').addClass("projectSlider");
    $('.contentContainer').animate( {
        scrollLeft: "0%"
    }, "fast");


    for(i = 0; i < targetArray.length; i ++) {
        //uses id name to look through array of names
        if (whatId == targetArray[i].name) {
            //when it's found it uses that dir as images
            target = targetArray[i];
        }
    }
    for(i = 0; i < target.length; i++ ) {
        //loops through image dir 
        whichOne = target[i];
        if(target[i].indexOf("full") > -1) {
            $('.scrollButton').css("display", "initial");
            $(".contentContainer").addClass("afterClick");
            //for non preview images
            assignBoxImagesFull(whichOne);
        } else {
            //for preview images
            assignBoxImages(whichOne);
        }
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

    zoomBox.setAttribute("class", "imageZoom");
    zoomBox.setAttribute("src", newName);
    zoomedImage.appendChild(zoomBox);
    $(".box").css("opacity", "0.2");
});

$('.zoomedImage').on("click", "img", function() {
    zoomedImage.innerHTML = "";
    $(".box").css("opacity", "1");
});

//controls scroll buttons
$('.scrollRight').on("click", function() {
    console.log("dog");
    $('.contentContainer').animate( {
        left: "-=350"
    }, "fast");
});

$('.scrollLeft').on("click", function() {
    console.log("cat");
    $('.contentContainer').animate( {
        left: "+=350"
    }, "fast");
});

//sectionMenu
$('.outer').click(function() {
    whatRegion = this.className;
    whatRegion = whatRegion.replace("outer ", "");
    $('.inner.'+whatRegion).toggleClass('visible');
});
