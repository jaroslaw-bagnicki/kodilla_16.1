// Const
var URL = 'http://api.icndb.com/jokes/random';


// UI vars and events listeners bindings
var $button = $('#get-joke').click(function() {
  getJoke()
});
var $para = $('#joke');

function getJoke() {
  $.ajax({
    method: 'GET',
    url: URL,
    success: function(res) {
      var joke = res.value.joke;
      $para.text(joke);
    }
  })
}

getJoke();

