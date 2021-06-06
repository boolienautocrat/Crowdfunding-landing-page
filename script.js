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

var input1 = $(".input-price1");
var input2 = $(".input-price2");
var input3 = $(".input-price3");

var con1 = $(".price-continue")[0];
var con2 = $(".price-continue")[1];
var con3 = $(".price-continue")[2];

var input1Div = $(".pledgeWrapper1");
var input2Div = $(".pledgeWrapper2");
var input3Div = $(".pledgeWrapper3");

con1.disabled = true;
con2.disabled = true;
con3.disabled = true;

// $(".input")[0].checked = false;
$(window).onload = function () {
    html.animate({
        scrollTop: 0
    }, "slow");
}

$("form").on("submit", function () {
    return false;
});

if ($(window).width() < 480 == true) {
    $(".icn-ham").show();
    $(".hero-img-desktop").removeAttr("src");
    $(".hero-img-desktop").attr("src", "/images/image-hero-mobile.jpg");
};

$(".input")[1].checked = false;
$(".input")[2].checked = false;
$(".pledgeSection").hide();

backToTopBtn.on("click", function () {
    html.scrollTop(0)

})
$(window).scroll(function () {
    if (html.scrollTop() > 840) {
        backToTopBtn.fadeIn(600).css("display", "flex");
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

            $(".icn-close").on("click", function () {
                if (timesClicked == 1) {
                    timesClicked = 0;
                    $(".backProjectCard1 hr").hide();
                    $(".backProjectCard2 hr").hide()
                    $(".backProjectCard3 hr").hide()
                }
            })

        };
        if (elem[0].checked == true) {
            if ($(window).width() < 480) {
                $(".backProjectCard1").addClass("heightIncrease");
            };
            $(".backProjectCard1 .pledgeSection").slideDown();
            $(".backProjectCard1 hr").show();
            input1.focus();
            elem[0].parentElement.style.border = "2px solid hsl(176, 50%, 47%)";
        } else if (elem[0].checked == false) {
            $(".backProjectCard1").removeClass("heightIncrease");
            setTimeout(function () {
                $(".backProjectCard1 hr").hide();
            }, 115)
            $(".backProjectCard1 .pledgeSection").slideUp(500);
            elem[0].parentElement.style.border = "1px solid #d9d9d9";

        };

        if (elem[1].checked == true) {
            if ($(window).width() < 480) {
                $(".backProjectCard2").addClass("heightIncrease");
            }
            $(".backProjectCard2 .pledgeSection").slideDown();
            $(".backProjectCard2 hr").show();
            input2.focus();
            elem[1].parentElement.style.border = "2px solid hsl(176, 50%, 47%)";
        } else if (elem[1].checked == false) {
            $(".backProjectCard2").removeClass("heightIncrease");
            setTimeout(function () {
                $(".backProjectCard2 hr").hide();
            }, 115)
            $(".backProjectCard2 .pledgeSection").slideUp(500);
            elem[1].parentElement.style.border = "1px solid #d9d9d9";
        };

        if (elem[2].checked == true) {
            if ($(window).width() < 480) {
                $(".backProjectCard3").addClass("heightIncrease");
            }
            $(".backProjectCard3 .pledgeSection").slideDown();
            $(".backProjectCard3 hr").show();
            input3.focus();
            elem[2].parentElement.style.border = "2px solid hsl(176, 50%, 47%)";
        } else if (elem[2].checked == false) {
            $(".backProjectCard3").removeClass("heightIncrease");
            setTimeout(function () {
                $(".backProjectCard3 hr").hide();
            }, 115)
            $(".backProjectCard3 .pledgeSection").slideUp(500);
            elem[2].parentElement.style.border = "1px solid #d9d9d9";
        };
    })
})

backprojectClickElems.forEach(function (elem) {
    elem.on("click", function () {
        hamburger.hide();
        $(".backProject").fadeIn(300);
        $(".mn-cd-1").hide();
        $(".mn-cd-2").hide();
        $(".mn-cd-3").hide();
        html.scrollTop(0);
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
    $(".backProjectCard hr").hide();
    hamburger.show();
    $(".backProject").fadeOut(300);
    $(".mn-cd-1").show();
    $(".mn-cd-2").show();
    $(".mn-cd-3").show();
    $(".input")[0].checked = false;
    $(".input")[1].checked = false;
    $(".input")[2].checked = false;
    backProjectCard.removeClass("heightIncrease");
    backProjectCard.css("border", "1px solid #d9d9d9");
    $(".pledgeSection").hide();
    html.scrollTop(0);
});

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
    $(".backProject").hide();
    $(".thanks").show();
    $(".input")[0].checked = false;
    $(".input")[1].checked = false;
    $(".input")[2].checked = false;
    $(".input-price")[0].value = "";
    input2.val("");
    input3.val("");
    $("hr").hide();
    backProjectCard.removeClass("heightIncrease");
    backProjectCard.css("border", "1px solid #d9d9d9");
    $(".pledgeSection").hide();
    if (window.matchMedia("(max-width: 400px)").matches) {
        html.scrollTop(80)
    };
    if (window.matchMedia("(min-width: 500px)").matches && window.matchMedia("(max-width: 1400px)").matches) {
        html.scrollTop(260);
    };
});

$(".gotIt").click(function () {
    $(".mn-cd-1").css("filter", "brightness(100%)")
    $(".mn-cd-2").css("filter", "brightness(100%)")
    $(".mn-cd-3").css("filter", "brightness(100%)")
    $("body").css("background-color", "#fff")
    $(".hero-img-desktop").css("filter", "contrast(100%)")
    $(".thanks").hide();
    body.css("overflow", "auto");
    html.scrollTop(0);
});

//For Card 1
input1.keydown(function () {
    if (input1.val() < 0) {
        input1Div.css("pointer-events", "none")
        input1Div.css("border", "1px solid #83afad")
        con1.style.backgroundColor = "#83afad";
        input1.css("pointer-events", "auto");
        con1.disabled = true;
    } else if (input1.val() > 0) {
        con1.disabled = false;
        input1Div.css("pointer-events", "auto");
        input1Div.css("border", "1px solid hsl(176, 50%, 47%)")
        con1.style.backgroundColor = null;
    };
})

input1.focus(function () {
    if (input1.val() < 1) {
        input1Div.css("pointer-events", "none")
        input1Div.css("border", "1px solid #83afad")
        con1.style.backgroundColor = "#83afad";
        input1.css("pointer-events", "auto");
        con1.disabled = true;
    } else if (input1.val() > 0) {
        con1.disabled = false;
        input1Div.css("pointer-events", "auto");
        input1Div.css("border", "1px solid hsl(176, 50%, 47%)")
        con1.style.backgroundColor = null;
    };
})

input1.keyup(function () {
    if (input1.val() < 0) {
        input1Div.css("pointer-events", "none")
        input1Div.css("border", "1px solid #83afad")
        con1.style.backgroundColor = "#83afad";
        input1.css("pointer-events", "auto");
        con1.disabled = true;
    } else if (input1.val() > 0) {
        con1.disabled = false;
        input1Div.css("pointer-events", "auto");
        input1Div.css("border", "1px solid hsl(176, 50%, 47%)")
        con1.style.backgroundColor = null;
    };
})



//For Card 2
input2.keydown(function () {
    if (input2.val() < 25) {
        input2Div.css("pointer-events", "none")
        input2Div.css("border", "1px solid #83afad")
        con2.style.backgroundColor = "#83afad";
        input2.css("pointer-events", "auto");
    } else if (input2.val() > 25 || input2.val() == 25) {
        con2.disabled = false;
        input2Div.css("pointer-events", "auto")
        input2Div.css("border", "1px solid hsl(176, 50%, 47%)")
        con2.style.backgroundColor = null;
    };
})

input2.focus(function () {
    if (input2.val() < 25) {
        input2Div.css("pointer-events", "none")
        input2Div.css("border", "1px solid #83afad")
        con2.style.backgroundColor = "#83afad";
        input2.css("pointer-events", "auto");
        con2.disabled = true;
    } else if (input2.val() > 25 || input2.val() == 25) {
        input2Div.css("pointer-events", "auto")
        input2Div.css("border", "1px solid hsl(176, 50%, 47%)")
        con2.style.backgroundColor = null;
        con2.disabled = false;
    };
})

input2.keyup(function () {
    if (input2.val() < 25) {
        input2Div.css("pointer-events", "none")
        input2Div.css("border", "1px solid #83afad");
        con2.style.backgroundColor = "#83afad";
        input2.css("pointer-events", "auto");
        con2.disabled = true;
    } else if (input2.val() > 25 || input2.val() == 25) {
        input2Div.css("pointer-events", "auto");
        input2Div.css("border", "1px solid hsl(176, 50%, 47%)");
        con2.style.backgroundColor = null;
        con2.disabled = false;
    };
})

//For Card 3

input3.keydown(function () {
    if (input3.val() < 75) {
        input3Div.css("pointer-events", "none")
        input3Div.css("border", "1px solid #83afad");
        con3.style.backgroundColor = "#83afad";
        con3.disabled = true;
        input3.css("pointer-events", "auto")
    } else if (input3.val() > 75 || input3.val() == 75) {
        input3Div.css("pointer-events", "auto")
        input3Div.css("border", "1px solid hsl(176, 50%, 47%)");
        con3.style.backgroundColor = null;
        con3.disabled = false
    };
});

input3.focus(function () {
    if (input3.val() < 25) {
        input3Div.css("pointer-events", "none")
        input3Div.css("border", "1px solid #83afad")
        con3.style.backgroundColor = "#83afad";
        con3.disabled = true;
        input3.css("pointer-events", "auto");
    } else if (input3.val() > 75 || input3.val() == 75) {
        input3Div.css("pointer-events", "auto")
        input3Div.css("border", "1px solid hsl(176, 50%, 47%)")
        con3.style.backgroundColor = null;
        con3.disabled = false;
    };
})

input3.keyup(function () {
    if (input3.val() < 75) {
        input3Div.css("pointer-events", "none")
        input3Div.css("border", "1px solid #83afad");
        con3.style.backgroundColor = "#83afad";
        con3.disabled = true;
        input3.css("pointer-events", "auto")
    } else if (input3.val() > 75 || input3.val() == 75) {
        input3Div.css("pointer-events", "auto")
        input3Div.css("border", "1px solid hsl(176, 50%, 47%)");
        con3.style.backgroundColor = null;
        con3.disabled = false
    };
});

hamburger.click(function () {
    navbarMini.show();
    navbarMini.animate({
        top: "90px"
    }, 400);
    $(this).hide();
    iconClose.show();
    cards[0].css("filter", "brightness(90%)");
    cards[1].css("filter", "brightness(90%)");
    cards[2].css("filter", "brightness(90%)");
    body.css("overflow", "hidden")
    body.css("background-color", "#ececec");
})

iconClose.click(function () {
    navbarMini.animate({
        top: "15px"
    }, 250);
    setTimeout(function () {
        navbarMini.fadeOut(100);
    }, 100)
    $(this).hide()
    hamburger.show();
    cards[0].css("filter", "brightness(100%)");
    cards[1].css("filter", "brightness(100%)");
    cards[2].css("filter", "brightness(100%)");
    body.css("overflow", "auto")
    body.css("background-color", "#fff");
})