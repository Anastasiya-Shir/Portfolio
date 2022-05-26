let list = document.querySelector(".list");
console.log(list);
let input = document.querySelector("input");
console.log(input);
let pen = document.querySelector("img");
console.log(pen);

pen.addEventListener('click', () => {
  list.remove();
});

input.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    let p = input.value;
    let li = document.createElement("li");
    li.innerHTML = p;
    list.appendChild(li);
  };

});
list.addEventListener('click', (event) => {
  let li = document.querySelectorAll("li");
  console.log(li);
  event.target.className += " active"
});

