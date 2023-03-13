let n = document.getElementsByClassName("drum").length;

for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})
function makeSound(x) {
    switch (x) {
        case "w":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "a":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "s":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-4.mp3').play();
            break;
        case "j":
            new Audio('sounds/snare.mp3').play();
            break;
        case "k":
            new Audio('sounds/crash.mp3').play();
            break;
        case "l":
            new Audio('sounds/kick-bass.mp3').play();
            break;
        default:
            console.log(this.innerHTML);
    }
}

function buttonAnimation(y) {
    document.getElementsByClassName(y)[0].classList.add("pressed");
    setTimeout(function(){
        document.getElementsByClassName(y)[0].classList.remove("pressed");  
    },100);
}