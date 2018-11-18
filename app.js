window.onload = function() {
  const API_KEY = '1836ff0dabce42ce86ee463e75d05fbd'

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json?" + API_KEY;
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function() {
    var data = JSON.parse(this.response);
    var articles = data.response.docs;
    for (var i = 0; i < 5; i++) {
      createElement('h1', articles[i].headline.main);
      createP(articles[i].snippet);
    }
  }

  document.getElementById("app").innerHTML = IndexPage().render();
}
