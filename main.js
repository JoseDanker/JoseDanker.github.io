
let show_news = document.getElementById('noticias');

fetch('https://newsapi.org/v2/top-headlines?category=technology&apiKey=3019cb39a7ec4cf19461364c161388a5').then((resp) => resp.json()).then(dato => {
    console.log(dato);
    let noticias = (dato.articles);
    console.log(dato.articles);
    noticias.map(function(number) {
        let div = document.createElement('noticias');
        div.innerHTML= `<br>    
                        <img style = "max-width:800px" src=${number.urlToImage}></br>
                        <h1>${number.title}</h1>
                        <h2>${number.description}</h2>`;
        show_news.appendChild(div);

    })
});
