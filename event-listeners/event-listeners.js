// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg' , './imgs/cat1.jpg','./imgs/cats2.jpg'];
var currentIndex = 0;

document.getElementsByTagName("img")[0].addEventListener("click", function (event) {
	showNextPicture();
    // event.target is the object that was clicked
});


 
  		
    // event.target is the object that was clicked





function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  else if (currentIndex == 1) {
  	document.getElementById('image').src="./imgs/cat1.jpg";
}
else{
	document.getElementById('image').src="./imgs/cat2.jpg";
}


  }


  // YOUR TASK: Finish this function!
