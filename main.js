// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
const likeBtns = document.querySelectorAll('.like');
const modal = document.querySelector('#modal');

likeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    mimicServerCall()
      .then(val => {
        if (!e.target.classList.contains('activated-heart')) {
          e.target.textContent = FULL_HEART;
          e.target.classList.add('activated-heart');
        } else {
          e.target.textContent = EMPTY_HEART;
          e.target.classList.remove('activated-heart');
        }
      })
      .catch(err => {
        modal.classList.remove('hidden');
        modal.querySelector('#modal-message').textContent = err;
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
    // console.log(e.target.classList.contains('some'));
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject('Random server error. Try again.');
      } else {
        resolve('Pretend remote server notified of action!');
      }
    }, 300);
  });
}
