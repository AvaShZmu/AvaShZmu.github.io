const images = [
	"frieren1.jpg",
	"frieren2.jpg",
	"frieren3.jpg",
	"frieren4.jpg",
	"frieren5.jpg"
]

const kill = "frierenkillyourself.jpg"
const burgor = "burgor.jpg"

let index = 0;

function changeImage() {
	index++;
	if (index >= images.length){
		index = 0
	}
	document.getElementById("image").src = images[index]
}
document.getElementById("clickentity").addEventListener("click", function(){
	let curr_img = document.getElementById("clickentity");
	let curr_cap = document.getElementById("clickcaption");
	curr_img.src = kill;
	curr_cap.innerText = "Nigger don't interrupt her";
	setTimeout(() => {
		curr_img.src = burgor;
		curr_cap.innerText = "Frieren eating";
	}, 3000)
});