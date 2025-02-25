let array1 = [1, 2, 3];
let array2 = [];

document.addEventListener("DOMContentLoaded", () => {
  var gokussj4 = document
    .getElementById("12")
    .textContent.toLowerCase()
    .replace(/\s/g, "");

  console.log(gokussj4);

  async function getInfo() {
    try {
      const yharin = document.getElementById("carouselExampleIndicators");
      array1.forEach((element) => {
        console.log(element);

        const trinityforce = document.createElement("img");
        trinityforce.classList.add("d-block");
        trinityforce.classList.add("w-100");
        trinityforce.classList.add("carmin");
        trinityforce.src = "/images/players/" + gokussj4 + element + ".jpg";
        trinityforce.alt = "Slide" + element;

        const skeletron = document.createElement("div");
        skeletron.classList.add("carousel-item");
        if (element === 1) {
          skeletron.classList.add("active");
        }
        skeletron.appendChild(trinityforce);

        const austrumdeus = document.createElement("div");
        austrumdeus.classList.add("carousel-inner");
        austrumdeus.appendChild(skeletron);

        const terraria = document.createElement("div");
        terraria.classList.add("carousel-item");
        //terraria.src =

        yharin.appendChild(austrumdeus);
      });
    } catch (error) {
      console.error(error);
    }
  }

  getInfo();
});
