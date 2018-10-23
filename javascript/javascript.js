"use strict";

function mudarPokemon(id){
    if(id >= 0 && id < 388){
        pokemon.style.backgroundImage = `linear-gradient(${POKEMONS[id].tipo1.cor},${POKEMONS[id].tipo2.cor})`;
        imgPokemon.src=`./pokemons/${POKEMONS[id].id}.png`;
        pokemonNome.value = id;
        pokemonId.value = id;
        pokemonId.style.border = "solid 2px black";
    }else{
        pokemonId.style.border = "solid 2px red";
    }
}

function criarOpcoes(){
    for(let i in POKEMONS){
        pokemonNome.innerHTML = pokemonNome.innerHTML + `<option value="${POKEMONS[i].id}">${POKEMONS[i].nome}</option>`;
    }
}

criarOpcoes();