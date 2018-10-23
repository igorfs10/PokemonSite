"use strict";
function changePokemon(id){
    if(id >= 0 && id < 387 && id != ""){
        pokemon.style.backgroundImage = `radial-gradient(${POKEMONS[id].tipo1.cor},${POKEMONS[id].tipo2.cor})`;
        pokemon.style.border = `solid 5px ${POKEMONS[id].tipo1.cor}`;
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