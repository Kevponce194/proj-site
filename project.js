var imageSources = ["images/IMG_4999.jpg", "images/IMG_8333.jpg", "images/IMG_4999 copy 2.jpg", "images/IMG_4999 copy 3.jpg"]
        
var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("gallery").src = imageSources[index];
  index++;
} , 2000);