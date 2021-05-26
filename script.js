const bkmarkCircle = document.getElementsByClassName("bkmark-circle");
const bkmarkSvgIn = document.getElementsByClassName("bkmarkSvgIn");
const btnBackProject = $(".btn-left");
var button = document.getElementsByClassName("btn-bookmark");
const btnContinue = $(".price-continue");
const buttonText = document.getElementsByClassName("btn-text");
const hamburger = $(".icn-ham");
const navbarMini = $(".nav-mini");
const iconClose = $(".icn-close-wrapper");
const cards = [$(".mn-cd-1"), $(".mn-cd-2"), $(".mn-cd-3")];
const radioInput = $(".input");
const navMiniItem = $(".nav-mini-item");
const body = $("body");
const backProjectCard = $(".backProjectCard");
const backToTopBtn = $(".backToTop");
var timesClicked = 0;
const html = $("html");
const backprojectClickElems = [btnBackProject, $(".slct-reward1"),
    $(".slct-reward2")];
const radioCheckClickElems = [radioInput.slice(0, 3)];

$(".input")[0].checked = false;
$("body").onunload =
    html.animate({
        scrollTop: 0
    }, "slow");
$(".input")[1].checked = false;
$(".input")[2].checked = false;
$(".pledgeSection").hide();

backToTopBtn.on("click", function () {
    html.scrollTop(0)

})
$(window).scroll(function () {
    if (html.scrollTop() > 840) {
        backToTopBtn.fadeIn(600);
    } else {
        backToTopBtn.fadeOut(400)
    }
})

radioCheckClickElems.forEach(function (elem) {
    elem.click(function radioCheck() {
        timesClicked++
        if (timesClicked > 1) {
            $("input").prop("checked", false)
            timesClicked = 0;
        }
        if (radioInput[0].checked == true) {
            if ($(window).width() < 480) {
                $(".backProjectCard1").addClass("heightIncrease");
            };
            $(".backProjectCard1 .pledgeSection").slideDown();
            $(".backProjectCard1 hr").show();
            radioInput[0].parentElement.style.border = "2px solid hsl(176, 50%, 47%)";
        } else if (radioInput[0].checked == false) {
            $(".backProjectCard1").removeClass("heightIncrease");
            setTimeout(function () {
                $(".backProjectCard1 hr").hide();
            }, 115)
            $(".backProjectCard1 .pledgeSection").slideUp(500);
            radioInput[0].parentElement.style.border = "2px solid #ececec";

        };

        if (radioInput[1].checked == true) {
            if ($(window).width() < 480) {
                $(".backProjectCard2").addClass("heightIncrease");
            }
            $(".backProjectCard2 .pledgeSection").slideDown();
            $(".backProjectCard2 hr").show();
            radioInput[1].parentElement.style.border = "2px solid hsl(176, 50%, 47%)";
        } else if (radioInput[1].checked == false) {
            $(".backProjectCard2").removeClass("heightIncrease");
            setTimeout(function () {
                $(".backProjectCard2 hr").hide();
            }, 115)
            $(".backProjectCard2 .pledgeSection").slideUp(500);
            radioInput[1].parentElement.style.border = "2px solid #ececec";
        };

        if (radioInput[2].checked == true) {
            if ($(window).width() < 480) {
                $(".backProjectCard3").addClass("heightIncrease");
            }
            $(".backProjectCard3 .pledgeSection").slideDown();
            $(".backProjectCard3 hr").show();
            radioInput[2].parentElement.style.border = "2px solid hsl(176, 50%, 47%)";
        } else if (radioInput[2].checked == false) {
            $(".backProjectCard3").removeClass("heightIncrease");
            setTimeout(function () {
                $(".backProjectCard3 hr").hide();
            }, 115)
            $(".backProjectCard3 .pledgeSection").slideUp(500);
            radioInput[2].parentElement.style.border = "2px solid #ececec";
        };
    })
})

backprojectClickElems.forEach(function (elem) {
    elem.on("click", function () {
        hamburger.hide();
        $(".backProject").fadeIn(500);
        $(".mn-cd-1").hide();
        $(".mn-cd-2").hide();
        $(".mn-cd-3").hide();
        html.animate({
            scrollTop: 0
        }, "slow")
    });
});
function bkmrkChange() {
    bkmarkCircle[0].setAttribute("fill", "hsl(176, 72%, 28%)");
    bkmarkSvgIn[0].setAttribute("fill", "#fff");
    button[0].removeAttribute("onclick");
    button[0].setAttribute("onclick", "bkmrkDefault()")
    button[0].style.backgroundColor = "#f4f8f9";
    buttonText[0].style.color = "#1d695f";
    buttonText[0].innerHTML = "Bookmarked";
    button[0].style.marginLeft = "20px";
    buttonText[0].style.left = "19px";
};

function bkmrkDefault() {
    bkmarkCircle[0].setAttribute("fill", "#707070");
    bkmarkSvgIn[0].setAttribute("fill", "#b1b1b1");
    button[0].removeAttribute("onclick");
    button[0].setAttribute("onclick", "bkmrkChange()");
    button[0].style.backgroundColor = "#f4f4f4";
    buttonText[0].style.color = "#808080";
    buttonText[0].innerHTML = "Bookmark";
    button[0].style.marginLeft = "0px";
    buttonText[0].style.left = "23px";
}

$(".icn-close").click(function () {
    hamburger.show();
    $(".backProject").fadeOut(300);
    $(".mn-cd-1").show();
    $(".mn-cd-2").show();
    $(".mn-cd-3").show();
    $(".input")[0].checked = false;
    $(".input")[1].checked = false;
    $(".input")[2].checked = false;
    backProjectCard.removeClass("heightIncrease");
    backProjectCard.css("border", "2px solid #ececec");
    $(".pledgeSection").hide();
    html.animate({
        scrollTop: 0
    }, "slow");
});

function changeColorBorder() {
    $("#card-h").hover(function () {
        $(".checkmark").css("border", "solid #3cb4ac 2px;");
    });
};

btnContinue.click(function () {
    $(".backProject").hide();
    $(".mn-cd-1").show();
    $(".mn-cd-2").show();
    $(".mn-cd-3").show();
    $(".mn-cd-1").css("filter", "brightness(90%)");
    $(".mn-cd-2").css("filter", "brightness(90%)");
    $(".mn-cd-3").css("filter", "brightness(90%)");
    $("body").css("background-color", "#c2c2c2");
    $(".hero-img-desktop").css("filter", "contrast(80%)");
    $(".backProject").css("display", "none");
    $(".thanks").css("display", "block");
    $(".input")[0].checked = false;
    $(".input")[1].checked = false;
    $(".input")[2].checked = false;
    backProjectCard.removeClass("heightIncrease");
    backProjectCard.css("border", "2px solid #ececec");
    $(".pledgeSection").hide();
    if (window.matchMedia("(max-width: 400px)").matches) {
        html.animate({
            scrollTop: 80
        }, "slow");
    };
    if (window.matchMedia("(min-width: 500px)").matches && window.matchMedia("(max-width: 1400px)").matches) {
        html.animate({
            scrollTop: 260
        }, "slow");
        body.css("overflow", "hidden");
    };
});

$(".gotIt").click(function () {
    $(".mn-cd-1").css("filter", "brightness(100%)")
    $(".mn-cd-2").css("filter", "brightness(100%)")
    $(".mn-cd-3").css("filter", "brightness(100%)")
    $("body").css("background-color", "#fff")
    $(".hero-img-desktop").css("filter", "contrast(100%)")
    $(".thanks").css("display", "none")
    body.css("overflow", "auto");
    html.animate({
        scrollTop: 0
    }, "slow");
})

//Inputs
var input2 = $(".input-price2");
var input3 = $(".input-price3");

//CONTINUE BUTTONS
var con2 = $(".card2Btn");
var con3 = $(".card3Btn");

var btn2 = $(".btn-2");


//For Card 2

function minPledge2() {
    if (input2.val() < 25) {
        btn2.css("border", "1px solid #83afad");
        con2.css("pointer-events", "none")
        con2.css("background-color", "#83afad")
    } else if (input2.val() > 25 || input2.val() == 25) {
        btn2.css("border", "1px solid hsl(176, 50%, 47%)");
        con2.css("pointer-events", "auto")
        con2.css("background-color", "hsl(176, 50%, 47%)")
    }
};

//For Card 3

function minPledge3() {
    if (input3.val() < 75) {
        btn2.css("border", "1px solid #83afad");
        con3.css("pointer-events", "none")
        con3.css("background-color", "#83afad")
    } else if (input3.val() > 75 || input3.val() == 75) {
        btn2.css("border", "1px solid hsl(176, 50%, 47%)");
        con3.css("background-color", "hsl(176, 50%, 47%)")
        con3.css("pointer-events", "auto")
    }
};

if ($(window).width() < 480) {
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