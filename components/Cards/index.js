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
    const javaScr = response.data.articles.javacript.map(funct => card(funct))
    javaScr.forEach(funct => funct.setAttribute("data-subject", "javascript"))

    const bootSt = response.data.articles.bootstrap.map(funct => card(funct))
    bootSt.forEach(funct => funct.setAttribute("data-subject", "bootstrap"))

    const tech = response.data.articles.technology.map(funct => card(funct))
    tech.forEach(funct => funct.setAttribute("data-subject", "technology"))

    const jQuery = response.data.articles.technology.map(funct => card(funct));
    jQuery.forEach(funct => funct.setAttribute("data-subject", "jQuery"))

    const node = response.data.articles.technology.map(funct => card(funct));
    node.forEach(funct => funct.setAttribute("data-subject", "node"))
    
    .catch(error => {
    console.log(
      "This site broke, just kidding -- it's a small error, but you don't blame me -- I am just a student!"
    )
  });
    
function build(sprint) {
  const blankCard = document.createElement("div")
  blankCard.classList.add("card")

  const headline = document.createElement("div")
  headline.classList.add("headline")
  headline.textContent = sprint.headline
  blankCard.appendChild(headline)

  const author = document.createElement("div")
  author.classList.add("author")
  blankCard.appendChild(author)

  const img = document.createElement("div")
  img.classList.add("img-container")
  blankCard.appendChild(img)

  const enterImg = document.createElement("img")
  enterImg.src = sprint.authorPhoto
  img.appendChild(enterImg)

  const credit = document.createElement("span")
  credit.textContent = sprint.authorName
  author.appendChild(credit)

  return blankCard
}
