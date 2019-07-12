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
    const isolatingMyTab = response.data.topics;

    console.log(isolatingMyTab);

    isolatingMyTab.forEach(i => {
      const placement = document.querySelector(".topics");
      placement.appendChild(tabMaker(i));
    });
    console.log(tab);
  })

  .catch(e => {
    console.log(
      "This site broke, just kidding -- it's a small error, but you don't blame me -- I am just a student!"
    );
  });

function makingMyTab(element) {
  const myTab = document.createElement("div");
  myTab.classList.add("tab");
  myTab.textContent = element;
  return myTab;
}
