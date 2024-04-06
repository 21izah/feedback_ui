const columnELs = document.querySelectorAll(".column");

const btnEL = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedColumn = "";

columnELs.forEach((columnEL) => {
  columnEL.addEventListener("click", (event) => {
    removeActive();
    selectedColumn =
      event.target.innerText || event.target.parentNode.innerText;
    console.log(event.target.innerText || event.target.parentNode.innerText);
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEL.addEventListener("click", () => {
  if (selectedColumn !== "") {
    containerEl.innerHTML = `
    <strong> Thank you! </strong>
    <br>
    <br>
    <strong> Feedback: ${selectedColumn}</strong>
    <p> We'll use your feedback to improve our customer support.</p>
    
    `;
  }
});

function removeActive() {
  columnELs.forEach((columnEL) => {
    columnEL.classList.remove("active");
  });
}
