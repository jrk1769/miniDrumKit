var noOfBtns = document.querySelectorAll(".drum").length;

var audio = new Audio("sounds/crash.mp3");

// Click Event 
for(var i = 0; i < noOfBtns; i++) {
	document.querySelectorAll("button")[i].addEventListener("click", function () {
	var changeButton = this.innerHTML;
	makeSound(changeButton);
	animatedKey(changeButton);
});	
}

// Keypress Event
document.addEventListener("keypress", function (event) {
	makeSound(event.key);
	animatedKey(event.key);
});

function makeSound(key) {
	switch (key) {
		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
		case "j":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		case "k":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
		case "l":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;
		default:
			console.log(changeButton);
	}
}

function animatedKey(currentKey) {
	var curBtn = document.querySelector("." + currentKey);
	curBtn.classList.add("animate");
	setTimeout(function() {
		curBtn.classList.remove("animate");
	}, 100);
}