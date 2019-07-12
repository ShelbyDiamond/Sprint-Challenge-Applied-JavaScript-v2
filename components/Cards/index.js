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

function cardForArticles(developer) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const authors = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const byAuthorName = document.createElement("span");

  card.classList.add(".headline");
  author.classList.add(".author");
  // card.classList.add(".cards-container");
  // imgContainer.classList.add(".img-container");

  headline.textcontent = `${developer.data.headline}`;
  authors.textContent = `${developer.data.authors}`;
  byAuthorName.textContent = `By: ${developer.data.byAuthorName}`;
  // imgContainer.setAttribute("src", `$`)
  // img.setAttribute("src", `${cards.data.URL}`);

  card.appendChild(headline);
  author.appendChild(".img-container");
  author.appendChild(img);
  author.appendChild(byAuthorName);

  const cards = document.querySelector(".cards");
  cards.appendChild(card);
  console.log(card);
}
