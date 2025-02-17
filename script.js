const images = [
	"frieren1.jpg",
	"frieren2.jpg",
	"frieren3.jpg",
	"frieren4.jpg",
	"frieren5.jpg"
]

let index = 0;

function changeImage() {
	index++;
	if (index >= images.length){
		index = 0
	}
	document.getElementById("image").src = images[index]
}