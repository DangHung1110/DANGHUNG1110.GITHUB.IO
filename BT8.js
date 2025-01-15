import data from "./pokemonAPI.js";
const pokemon_list = document.querySelector(".content_img");
console.log(data)
function render() {
    let image = '';
    for(let i = 0; i < data.results.length; i++) {
        image += 
        `
        <div class="pokemon">
        <div class="id"> #${i+1} </div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png">
        <div class="pokemon_name"> ${data.results[i].name}</div>
        </div>
        `
    }
    pokemon_list.innerHTML = image;
}
console.log(pokemon_list)
render();
