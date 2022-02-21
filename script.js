import { pokemonArray } from "./data/pokemon.js";

const pokeContainer = document.querySelector(".card-container")
for(let poke of pokemonArray) {
    pokeContainer.innerText = poke 
}

const pokeList = `<div class = "card-container"
    <h1>${pokemonArray.id}</h1>
    <h2>${pokemonArray.name}</h2>
    <p>${pokemonArray.type}</p>
    <img src=${pokemonArray.sprite} </img>
    </div>`;


pokeContainer.innerText = pokeList ; 


