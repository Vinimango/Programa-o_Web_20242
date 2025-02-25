import { BalldontlieAPI } from "https://cdn.jsdelivr.net/npm/@balldontlie/sdk@1.2.2/+esm";
const token = "39ca8ef3-3c8e-4334-9dad-191f2040d87f";
let array1;

document.addEventListener("DOMContentLoaded", () => {
  const api = new BalldontlieAPI({ apiKey: token });
  var gokussj5 = document.getElementById("");

  console.log(gokussj5);
  // Using async/await
  async function getInfo() {
    try {
      const teams = await api.nba.getTeams({});
      array1 = teams.data;
      const yharin = document.getElementById("23");
      console.log(array1);
      array1.forEach((element) => {
        const frontbanners = document.createElement("div");
        frontbanners.classList.add("carousel");
        frontbanners.classList.add("slide");
        frontbanners.id("carouselExample");

        const superdiv = document.createElement("div");
        superdiv.classList.add("carousel-inner");

        const secondiv = document.createElement("div");
        secondiv.classList.add("carousel-item");
        secondiv.classList.add("active");

        frontbanners.appendChild(superdiv);
        superdiv.appendChild(secondiv);

        const banner = document.createElement("img");
        banner.classList.add("w-100");
        banner.classList.add("carmin");
        banner.classList.add("width");
        banner.src = "/images/teams/" + element.full_name + ".jpg";

        yharin.appendChild(banner);

        console.log(element);
        const timenome = element.full_name;
        // console.log (timenome)
      });
      //   console.log(yharin);

      var yharon = document.getElementById("0");
      yharon.innerHTML = array1[0].full_name;
      console.log(array1);
    } catch (error) {
      console.error(error);
    }
  }

  getInfo();
});
