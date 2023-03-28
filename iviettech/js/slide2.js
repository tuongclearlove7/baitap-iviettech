let slideCourseIndex = 1;
showSlidesCourse(slideCourseIndex);

// Next/previous controls
function plusSlidesCourse(n) {
  showSlidesCourse(slideCourseIndex += n);
}

// Thumbnail image controls
function currentSlideCourse(n) {
  showSlidesCourse(slideCourseIndex = n);
}

function showSlidesCourse(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesCourse");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideCourseIndex = 1}
  if (n < 1) {slideCourseIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideCourseIndex-1].style.display = "block";
  dots[slideCourseIndex-1].className += " active";
}