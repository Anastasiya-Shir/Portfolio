let input = document.querySelector("input");
let imgContainer = document.querySelector(".photo")
let inputValue;

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

    fetch('https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
      .then(response => {
        return response.json();
      })
      .then(data => {
        imgCreate(data);
      })
      .catch(error => console.log(error));
  }
});


function imgCreate(data) {
  if (!data.results.length) {
    let textIfPictureDidNotFind = document.createElement("p");

    textIfPictureDidNotFind.className = "picture";

    textIfPictureDidNotFind.innerHTML = "Таких картинок нет";

    textIfPictureDidNotFind.style.color = "white";

    imgContainer.append(textIfPictureDidNotFind);
  }

  for (let i = 0; i < data.results.length; i++) {
    let img = document.createElement("img");

    img.className = "picture";

    img.src = data.results[i].links.download;

    imgContainer.append(img);
  }
}


