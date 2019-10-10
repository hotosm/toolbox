(function() {
    var article = document.querySelector('.article');
    var headers = document.querySelector('.article-body').querySelectorAll('h1, h2, h3, h4');
    article.addEventListener('scroll', function(e){onScroll(e, headers)});
})();

function onScroll(event, headers) {
    this.timeout;
    clearTimeout(this.timeout);
    var positionTop = event.target.scrollTop;
    var height = event.target.clientHeight;

    console.log(positionTop, height)
    this.timeout = setTimeout(function() {
        for (var i=0; i< headers.length; i++) {
            var id = headers[i].id;
            console.log(positionTop - headers[i].getBoundingClientRect().top);
        }
    }, 200);
}