const inputRegion = document.querySelector("#input-region");
const selectRegion = document.querySelector("#select-region");
const baseEndPoint = "https://api.teleport.org/api/cities/?search=";

inputRegion.addEventListener("input", async () => {
  let endpoint = baseEndPoint + inputRegion.value;
  let result = await (await fetch(endpoint)).json();
  selectRegion.innerHTML = " ";
  let cities = result._embedded["city:search-results"];
  let length = cities.length > 5 ? 5 : cities.length;
  for (let i = 0; i < length; i++) {
    let option = document.createElement("option");
    option.value = cities[i].matching_full_name;
    selectRegion.appendChild(option);
  }
});
