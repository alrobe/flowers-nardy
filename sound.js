var playing = false;
var music = new Audio('img/Floricienta.mp3');

function playMusic(){
	playing = !playing;

	if (playing) {
		music.play();
	} else {
		music.pause();
	}
}