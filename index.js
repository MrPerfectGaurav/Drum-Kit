// Detect Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// Detect Keyboard Press

document.addEventListener("keypress", function(event){
    var pressedKey = (event.key).toLowerCase();
    makeSound(pressedKey);
    buttonAnimation(pressedKey);
});

// Function which play sound

function makeSound(detectKey) {
    switch (detectKey) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default: console.log(detectKey);
            break;
    }
}

// Button Animation

function buttonAnimation(pressedButton) {
    var activeButton = document.querySelector("." + pressedButton);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}