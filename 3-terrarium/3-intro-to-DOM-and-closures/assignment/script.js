
  const img = document.getElementById("img-container");
  if(img){
    img.addEventListener("click", (event) => {
      event.preventDefault();

      let isTransforming = `<img src="./images/goku3.jpeg" class="img" width=400px/>`;

      let isTransformed = `<img src="./images/goku2.png" class="img" width=400px/>`;

      img.innerHTML = isTransforming;

      setTimeout(() => {
        img.innerHTML = isTransformed;
      }, 3000);
    });
  }
  
  img?.addEventListener('click', () => {

  });


