var toAnimate = document.querySelector(".js-animated");

var button = document.getElementById("doAnimation");
var resetButton = document.getElementById("reset");

button.addEventListener("click", function () {
    toAnimate.style.left = 0;

    var intervalId = setInterval(function () {
        if (parseInt(toAnimate.style.left.replace("px", "")) > 500) {
            clearInterval(intervalId);
            return;
        }

        toAnimate.style.left = (parseInt(toAnimate.style.left.replace("px", "")) + 2) + "px";
    }, 1);
});

resetButton.addEventListener("click", function () {
    var intervalId = setInterval(function () {
        if (parseInt(toAnimate.style.left.replace("px", "")) <= 0) {
            clearInterval(intervalId);
            return;
        }

        toAnimate.style.left = (parseInt(toAnimate.style.left.replace("px", "")) - 2) + "px";
    }, 1);
});