// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    const newTab = response.data.topics;

    newTab.forEach(tab => {
      const placeHolder = document.querySelector(".topics");
      const makeTab = makingTabs(tab);
      placeHolder.appendChild(makeTab);
      console.log(makeTab.dataset.subject);
      makeTab.addEventListener("click", element => {
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => (card.style.display = "none"));
        const selectedCard = document.querySelectorAll(
          `.card[data-subject="${makeTab.dataset.subject}"]`
        );
        selectedCard.forEach(tab => (tab.style.display = "flex"));
      });
    });
  })
  .catch(error => {
    console.log(
      "This site broke, just kidding -- it's a small error, but you can't blame me -- I am just a student!"
    );
  });

function makingTabs(information) {
  const tab1 = document.createElement("div");
  tab1.classList.add("tab");
  tab1.setAttribute("data-subject", information);
  tab1.textContent = information;
  return tab1;
}
