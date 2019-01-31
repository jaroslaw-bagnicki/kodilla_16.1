// Const
var URL = 'http://api.icndb.com/jokes/random';


// UI vars
var button = document.querySelector('#get-joke');
var para = document.querySelector('#joke');

// Event listeners
button.addEventListener('click', function() {
  getJoke();
});

function getJoke() {
 var xhr = new XMLHttpRequest();
 xhr.open('GET', URL);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var res = JSON.parse(xhr.response);
      var joke = res.value.joke;
      para.innerHTML = joke;
    };
  };
  xhr.send();
};

getJoke();


