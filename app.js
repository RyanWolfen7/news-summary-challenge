window.onload = function() {
  const API_KEY = '46d4c3c8937142eca861cda8a7eca0c0';
  const Articles = [];

  var url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`
  var req = new Request(url);
  fetch(req)
    .then(function(response) {
      return response.json();
      // console.log(response.json());
    })
    .then((data) => {
      data.articles.forEach(function(article) {
        Articles.push(article);
      })
    })
    console.log(Articles)
  document.getElementById("app").innerHTML = IndexPage().render(Articles);
}
