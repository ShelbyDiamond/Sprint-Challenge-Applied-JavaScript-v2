// // STEP 1: Create a header component.
// // -----------------------
// // Using a function create the component you see below:
// //
// //  <div class="header">
// //    <span class="date">MARCH 28, 2019</span>
// //    <h1>Lambda Times</h1>
// //    <span class="temp">98°</span>
// //  </div >
// // And add it to the DOM in the .header-container component

function Header() {
  const newHeader = document.createElement("div");
  newHeader.classList.add("header");

  const addDate = document.createElement("span");
  addDate.classList.add("date");
  addDate.textContent = "SMARCH 28, 2019 XD";

  const h1Tag = document.createElement("h1");
  h1Tag.textContent = "Lambda Times";

  const temperature = document.createElement("span");
  temperature.classList.add("temp");
  temperature.textContent = "98°";

  newHeader.appendChild(addDate);
  newHeader.appendChild(h1Tag);
  newHeader.appendChild(temperature);

  document.querySelector(".header-container").appendChild(newHeader);
}

Header();
