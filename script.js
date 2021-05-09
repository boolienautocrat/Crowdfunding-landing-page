var bkmarkCircle = document.getElementsByClassName("bkmark-circle");
var bkmarkSvgIn = document.getElementsByClassName("bkmarkSvgIn");
var button = document.getElementsByClassName("btn-bookmark");
var buttonText = document.getElementsByClassName("btn-text");
var hamburger = $(".icn-ham")
var navbarMini = $(".nav-mini")
var iconClose = $(".icn-close-wrapper")
var cards = [$(".mn-cd-1"), $(".mn-cd-2"), $(".mn-cd-3")]
var navMiniItem = $(".nav-mini-item");
var body = $("body")

function bkmrkChange() {

    if (button[0].classList.contains("btn-bookmark")) {
        bkmarkCircle[0].setAttribute("fill", "hsl(176, 72%, 28%)");
        bkmarkSvgIn[0].setAttribute("fill", "#fff");
        button[0].style.backgroundColor = "#f4f8f9";
        button[0].classList.add("bookmarked");
        button[0].removeAttribute("onclick");
        button[0].setAttribute("onclick", "bkmrkChangeToDefault()")
        buttonText[0].style.color = "#1d695f";
        buttonText[0].innerHTML = "Bookmarked";
        button[0].style.marginLeft = "20px";
        buttonText[0].style.left = "17px";
    }
}

function bkmrkChangeToDefault() {
    if (button[0].classList.contains("bookmarked")) {
        button[0].classList.remove("bookmarked");
        bkmarkCircle[0].removeAttribute("fill", "hsl(176, 72%, 28%)");
        bkmarkCircle[0].setAttribute("fill", "#6f6f6f")
        bkmarkSvgIn[0].removeAttribute("fill", "#fff");
        bkmarkSvgIn[0].setAttribute("fill", "#b1b1b1");
        button[0].style.backgroundColor = "#f4f4f4";
        buttonText[0].style.color = "grey";
        buttonText[0].innerHTML = "Bookmark";
        button[0].style.marginLeft = "0px";
        buttonText[0].style.left = "20px";
        button[0].removeAttribute("onclick")
        button[0].setAttribute("onclick", "bkmrkChange()")
    }
}

function backproject() {
    hamburger.hide();
    $(".backProject").show();
    $(".mn-cd-1").hide();
    $(".mn-cd-2").hide();
    $(".mn-cd-3").hide();
}

var timesClicked = 0;
var radioInput = $(".input");

function backProjectShow() {
    hamburger.show();
    $(".backProject").hide();
    $(".mn-cd-1").show();
    $(".mn-cd-2").show();
    $(".mn-cd-3").show();
    if (radioInput[0].checked == true || radioInput[1].checked == true || radioInput[2].checked == true) {
        radioInput[0].checked = false; 
        radioInput[1].checked = false;
        radioInput[2].checked = false;
    }
}

function radioCheck() {

    timesClicked++
    if (timesClicked > 1) {
        $("input").prop("checked", false)
        timesClicked = 0;
    }

    if (radioInput[0].checked == true) {
        radioInput[0].parentElement.style.border = "2px solid hsl(176, 50%, 47%)";
        $(".backProjectCard1").addClass("heightIncrease");
    } else if (radioInput[0].checked == false) {
        $(".backProjectCard1").removeClass("heightIncrease");
        radioInput[0].parentElement.style.border = "2px solid #ececec";
    };

    if (radioInput[1].checked == true) {
        $(".backProjectCard2").addClass("heightIncrease");
        radioInput[1].parentElement.style.border = "2px solid hsl(176, 50%, 47%)";
    } else if (radioInput[1].checked == false) {
        $(".backProjectCard2").removeClass("heightIncrease");
        radioInput[1].parentElement.style.border = "2px solid #ececec";
    };

    if (radioInput[2].checked == true) {
        $(".backProjectCard3").addClass("heightIncrease");
        radioInput[2].parentElement.style.border = "2px solid hsl(176, 50%, 47%)";
    } else if (radioInput[2].checked == false) {
        $(".backProjectCard3").removeClass("heightIncrease");
        radioInput[2].parentElement.style.border = "2px solid #ececec";
    }
}

function changeColorBorder() {
    $("#card-h").hover(function () {
        $(".checkmark").css("border", "solid #3cb4ac 2px;");
    })
}

function redirectThanks() {
    $(".backProject").hide();
    $(".mn-cd-1").show();
    $(".mn-cd-2").show();
    $(".mn-cd-3").show();
    $(".mn-cd-1").css("filter", "brightness(90%)")
    $(".mn-cd-2").css("filter", "brightness(90%)")
    $(".mn-cd-3").css("filter", "brightness(90%)")
    $("body").css("background-color", "#c2c2c2")
    $(".hero-img-desktop").css("filter", "contrast(80%)")
    $(".backProject").css("display", "none");
    $(".thanks").css("display", "inline-block");
}

function thanksEnd() {
    $(".mn-cd-1").css("filter", "brightness(100%)")
    $(".mn-cd-2").css("filter", "brightness(100%)")
    $(".mn-cd-3").css("filter", "brightness(100%)")
    $("body").css("background-color", "#fff")
    $(".hero-img-desktop").css("filter", "contrast(100%)")
    $(".thanks").css("display", "none")
}

//Inputs
var input2 = $(".input-price2");
var input3 = $(".input-price3");

//CONTINUE BUTTONS
var con2 = $(".card2Btn");
var con3 = $(".card3Btn");


//For Card 2

function minPledge2() {
    if (input2.val() < 25) {
        con2.css("pointer-events", "none")
        con2.css("background-color", "#bfbfbf")
    } else if (input2.val() > 25 || input2.val() == 25) {
        con2.css("pointer-events", "auto")
        con2.css("background-color", "hsl(176, 50%, 47%)")
    }
};

//For Card 3

function minPledge3() {
    if (input3.val() < 75) {
        con3.css("pointer-events", "none")
        con3.css("background-color", "#bfbfbf")
    } else if (input3.val() > 75 || input3.val() == 75) {
        con3.css("background-color", "hsl(176, 50%, 47%)")
        con3.css("pointer-events", "auto")
    }
};

if (window.matchMedia("(max-width: 380px)").matches) {
    $(".icn-ham").show();
    $(".hero-img-desktop").removeAttr("src");
    $(".hero-img-desktop").attr("src", "/images/image-hero-mobile.jpg");
}

hamburger.click(function () {
    navbarMini.show();
    $(this).hide();
    iconClose.show();
    cards[0].css("filter", "brightness(90%)");
    cards[1].css("filter", "brightness(90%)");
    cards[2].css("filter", "brightness(90%)");
    body.css("overflow", "hidden")
    body.css("background-color", "#ececec");
})

iconClose.click(function () {
    navbarMini.hide();
    $(this).hide()
    hamburger.show();
    cards[0].css("filter", "brightness(100%)");
    cards[1].css("filter", "brightness(100%)");
    cards[2].css("filter", "brightness(100%)");
    body.css("overflow", "auto")
    body.css("background-color", "#fff");
})