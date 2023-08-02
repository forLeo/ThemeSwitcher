let clicks;

window.addEventListener('load', function () {
    updateClicks();
})

function changeThemeDark() {
    document.getElementById("heading").innerHTML = "Dark-Mode";
    document.getElementById("button").innerHTML = "White-Mode";
    document.getElementById("body").style.backgroundColor = "rgb(51, 51, 51)";
    document.getElementById("button").style.backgroundColor = "white";
    document.getElementById("button").style.color = "rgb(51, 51, 51)";
    document.getElementById("heading").style.color = "white";
    document.getElementById("clicksDisplayed").style.color = "white";
    document.getElementById("button").setAttribute("onclick", "changeThemeWhite()");
    document.getElementById("favicon").setAttribute ("href", "square_dark.ico");
    document.title = "Darkmode";
    clicks++;
    localStorage.setItem("clicksStored", clicks);
    updateClicks();
}

function changeThemeWhite() {
    clicks++;
    localStorage.setItem("clicksStored", clicks);
    window.location.reload();
}

function updateClicks() {
    clicks=localStorage.getItem("clicksStored")
    if (clicks===null)
    {
        clicks = 0;
    }
    document.getElementById("clicksDisplayed").innerHTML = clicks + " Clicks";
}