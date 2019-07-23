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
    makingTabs("ALL");

    newTab.forEach(tab => {
      tab === "node.js" && (tab = "node");
      makingTabs(tab);
    });
  })

  .catch(error => {
    console.log(
      "This site broke, just kidding -- it's a small error, but you can't blame me -- I am but a humble student!"
    );
  });

let topic = document.querySelector(".topics");

function makingTabs(information) {
  const tab1 = document.createElement("div");
  console.log(information);

  tab1.classList.add("tab");
  tab1.setAttribute("data-subject", information);
  tab1.textContent = information;
  topic.appendChild(tab1);

  return tab1;
}

topic.addEventListener("click", element => {
  const cards = document.querySelectorAll(".card");
  let targetTopic = event.target.dataset.subject;

  cards.forEach(card => {
    card.style.display = "flex";
    console.log(card);
    if (card.dataset.subject != targetTopic) {
      card.style.display = "none";
    }

    if (targetTopic === "ALL") {
      card.style.display = "flex";
    }
  });
});
