var likeBtn = document.getElementById("like");
var countDiv = document.getElementById('countDiv');
var count = 0;
function like() {
  if (likeBtn.classList.contains("fa-regular")) {
    likeBtn.classList.remove("fa-regular");
    likeBtn.classList.add("fa-solid");
    count++;
  } else {
    likeBtn.classList.remove("fa-solid");
    likeBtn.classList.add("fa-regular");
    count--;
  }
  likeBtn.classList.toggle("liked");
  countDiv.innerHTML = count+" "+"like";
}