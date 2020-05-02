// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const createCard = (article) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgAuthor = document.createElement('img');
    const authorName = document.createElement('span');

    headline.textContent = article.headline;
    imgAuthor.src = article.authorPhoto;
    authorName.textContent = `By ${article.authorName}`;

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    
    imgContainer.append(imgAuthor)
    author.append(imgContainer, authorName)
    card.append(headline, author)


    return card
}

cardContainer = document.querySelector('.cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        response.data.articles.javascript.forEach(article => {
            cardContainer.append(createCard(article))
        });
        response.data.articles.bootstrap.forEach(article => {
            cardContainer.append(createCard(article))
        });
        response.data.articles.technology.forEach(article => {
            cardContainer.append(createCard(article))
        });
        response.data.articles.jquery.forEach(article => {
            cardContainer.append(createCard(article))
        });
        response.data.articles.node.forEach(article => {
            cardContainer.append(createCard(article))
        });

    })
    .catch(err => {
        console.log('something happened! ', err)
    })