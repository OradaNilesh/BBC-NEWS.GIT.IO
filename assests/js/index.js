const API_KEY = "ba348cc25c974a59b156407725441f57";
// const API_KEY = "4a2388c6812648d8babec2c5f6b89117";
const url = "https://newsapi.org/v2/everything?q=";
let paginationBox = document.querySelectorAll(".pagination-box");


window.addEventListener('load', () => fetchNews("India"));
let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')


function reload(home) {
    window.location.reload();
}
async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apikey=${API_KEY}`);
    const data = await res.json();
    const newData = data.articles
    // bindData(newData);


    
    let all_cards = (newData.length/5);
    let i,dataSkip= 0,loadData=5
   
console.log(all_cards)
    if(all_cards != -1){
        all_cards= all_cards+1
    }
    console.log(all_cards)

    for(let i = 1;i<4;i++){
        paginationBox[0].innerHTML += `<button data-skip=${dataSkip} load-data=${loadData} class="btn">${i}</button>`
        dataSkip = dataSkip+5
        loadData=loadData+5
      
    }

    let allPageBtn= paginationBox[0].querySelectorAll('.btn')

    for(let btn of allPageBtn){
        btn.onclick =()=>{
          let skip =  btn.getAttribute("data-skip")
          let loaded =  btn.getAttribute("load-data")
           
            bindData(newData,skip,loaded)
        }
    }
    console.log(allPageBtn)
    bindData(newData,0,5)
}



function bindData(articles, from,to) {
    const cardscontainer = document.getElementById("cards-container");
    const templateNews = document.getElementById("template-news")
    
    cardscontainer.innerHTML = '';
let filter= articles.slice(from,to)
    filter.forEach(article => {
        if (!article.urlToImage) return;


        const cardClone = templateNews.content.cloneNode(true);

        fillDataInCard(cardClone, article);
        cardscontainer.appendChild(cardClone);
        
    });

}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#img-news');
    const newsTilte = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = article.urlToImage;
    newsTilte.innerHTML = article.title;
    newsDesc.innerHTML = article.description;
    const date = new Date(article.publishedAt).toLocaleString('en-US', {
        timeZone: "Asia/Jakarta"
    })

    newsSource.innerHTML = `${article.source.name}.${date}`;
    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");

    })
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id)
    const navItem = document.getElementById('id');
    curSelectedNav?.classList.remove('active');
    curSelectedNav = navItem;
    curSelectedNav.classList.add('active')
    console.log(id)
}

const searchBtn = document.getElementById("search-btn");
const searchText = document.getElementById("search-text");

searchBtn.addEventListener('click', () => {
    const query = searchText.value;
    if (!query) return
    fetchNews(query);
    curSelectedNav?.classList.remove('active');
    curSelectedNav = null;
})
