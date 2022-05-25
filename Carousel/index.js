let counter = 0;


function showImage(i) {
  counter += i;
  const images = document.getElementsByClassName("picture");
  const dots = document.getElementsByClassName("dot");
  console.log(dots)
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    console.log(i);
    console.log(dots[i]);
    dots[i].className = dots[i].className.replace("active", " ");
  }
  if (counter > images.length - 1) {
    counter = 0;
  }
  if (counter < 0) {
    counter = images.length - 1;
  }
  images[counter].style.display = "block";
  dots[counter].className += " active";
}

showImage(counter)