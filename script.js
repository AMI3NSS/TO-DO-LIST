const inputField = document.getElementById("inputField");
const addButton = document.getElementById("btn");
const container = document.getElementById("wrapper");

addButton.addEventListener("click", () => {
  //creating divs
  const divs = document.createElement("div");
  divs.id = "box";

  // adding condition for if no input
  if (!inputField.value) {
    divs.style.display = "none";
  }

  // creating paragraphs
  const paragraph = document.createElement("p");
  paragraph.id = "task";
  paragraph.textContent = inputField.value.trim();

  // creating icon and styling
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-trash";
  icon.style.cursor = "pointer";

  // removing element
  icon.addEventListener("click", () => {
    divs.remove();
  });

  // appending elements
  divs.appendChild(paragraph);
  divs.appendChild(icon);
  container.appendChild(divs);
});
