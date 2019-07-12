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

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    cardForArticles(response.data.articles);
    console.log(data);
  })
  .catch(error => {
    console.log(
      "This site broke, just kidding -- it's a small error, but you don't blame me -- I am just a student!",
      error
    );
  });

function cardForArticles(cards) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const authors = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const byAutherName = document.createElement("span");

  card.classList.add(".cards-container");
  headline.classList.add(".headline");
  authors.classList.add(".author");
  imgContainer.classList.add(".img-container");

  headline.textcontent = "${cardForArticles.data.name}";
}
