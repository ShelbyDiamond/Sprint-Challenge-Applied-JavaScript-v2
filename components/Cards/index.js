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
    const placement = document.querySelector(".cards-container");

    for (Something of Object.values(response.data.articles)) {
      Something.forEach(news => {
        const card = cardMaker(news);
        card.setAttribute("data-subject", "data");
        placement.appendChild(card);
      });
    }
  })

  .catch(e => {
    console.log(
      "This site broke, just kidding -- it's a small error, but you don't blame me -- I am just a student!"
    );
  });

function cardMaker(sprint) {
  const myCard = document.createElement("div");
  myCard.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = sprint.headline;
  myCard.appendChild(headline);

  const author = document.createElement("div");
  author.classList.add("author");
  myCard.appendChild(author);

  const img = document.createElement("div");
  img.classList.add("img-container");
  author.appendChild(img);

  const actualImg = document.createElement("img");
  actualImg.src = sprint.authorPhoto;
  img.appendChild(actualImg);

  const byline = document.createElement("span");
  byline.textContent = sprint.authorName;
  author.appendChild(byline);

  return myCard;
}
