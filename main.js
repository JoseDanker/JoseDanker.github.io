

const setupEventListeners = () => {
	document.querySelector('.btn-group').addEventListener('click', fetchNews)
}

function fetchNews(){
    let show_news = document.getElementById('noticias');
    show_news.innerHTML = "";

fetch('https://newsapi.org/v2/top-headlines?category=technology&apiKey=3019cb39a7ec4cf19461364c161388a5').then((resp) => resp.json()).then(dato => {
    console.log(dato);
    let noticias = (dato.articles);
    const top10 = noticias.slice(0,10);
    top10.map(function(number) {
        let div = document.createElement('noticias');
        div.innerHTML= `<div class="card text-white bg-secondary mb-3">
                            <div class="card-body">
                                <br>    
                                <a href="${number.url}"><img style = "max-width:800px" src=${number.urlToImage} ></a></br>
                                <h1>${number.title}</h1>
                                <h2>${number.description}</h2>
                            </div>
                        </div>`;
                        
        show_news.appendChild(div);

    })
});
}
document.addEventListener('DOMContentLoaded', setupEventListeners);
