let list = document.querySelector(".list");
let input = document.querySelector("input");
let pen = document.querySelector("img");

pen.addEventListener('click', () => {
  let li = document.getElementsByTagName("li");

  for (let i = li.length - 1; i >= 0; i--) {
    li[i].remove();
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let inputValue = input.value;
    let li = document.createElement("li");
    li.innerHTML = inputValue;
    list.appendChild(li);
  };
});

list.addEventListener('click', (event) => {
  event.target.className += " active"
});

