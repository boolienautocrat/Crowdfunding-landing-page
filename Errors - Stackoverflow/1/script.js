
// To click the radio button twice

function radioCheck() {

    timesClicked++
    if (timesClicked > 1) {
        $("input").prop("checked", false)
        timesClicked = 0;
    }
}
