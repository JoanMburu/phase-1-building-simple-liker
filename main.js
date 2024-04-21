// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  const likeButtons = document.querySelectorAll(".like");

  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          likeButton.classList.add("activated-heart");
          likeButton.innerHTML = "Liked! <span class='like-glyph'>&#x2665;</span>";
        })
        .catch(() => {
          modalMessage.innerText = "Error: Server request failed.";
          modal.classList.remove("hidden");
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
