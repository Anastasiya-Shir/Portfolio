let input = document.querySelector("input");
console.log(input)
let imgContainer = document.querySelector(".photo")
let inputValue;
console.log(imgContainer)

function imgCreate(data) {
  for (let i = 0; i < data.results.length; i++) {
    let img = document.createElement("img");
    img.className = "picture";
    img.src = data.results[i].links.download;
    imgContainer.append(img);
  }
}

input.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    document.querySelector(".photo").textContent = "";

    inputValue = input.value;

    let promise = fetch('https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')

      .then(response => {
        return response.json();
      })

      .then(data => {
        console.log(data)
        imgCreate(data);
      })
      .catch(error => console.log(error));
  }
});


function imgCreate(data) {
  if (data.results.length == 0) {
    let p = document.createElement("p");
    p.className = "picture";
    p.innerHTML = "Таких картинок нет"
    p.style.color = "white"
    imgContainer.append(p);
  }

  for (let i = 0; i < data.results.length; i++) {
    let img = document.createElement("img");
    img.className = "picture";
    img.src = data.results[i].links.download;
    imgContainer.append(img);
  }
}


