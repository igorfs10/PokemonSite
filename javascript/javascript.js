"use strict";

function mudarPokemon(id){
    if(id >= 0 && id < POKEMONS.length && id != ""){
        id = parseInt(id);
        pokemon.style.backgroundImage = `linear-gradient(${POKEMONS[id].tipo1.cor},${POKEMONS[id].tipo2.cor})`;
        imgPokemon.src=`./pokemons/${id}.png`;
        pokemonId.value = id;
        pokemonIdNome.value = POKEMONS[id].nome;
        pokemonId.style.border = "solid 2px black";
        pokemonIdNome.style.border = "solid 2px black";
    }else{
        pokemonId.style.border = "solid 2px red";
        pokemonIdNome.style.border = "solid 2px red";
    }
}

function criarOpcoes(){
    for(let i in POKEMONS){
        pokemonNome.innerHTML = pokemonNome.innerHTML + `<option value="${POKEMONS[i].nome}"></option>`;
    }
}

function pegaPokemonPorNome(nome){
    let idPokemon = POKEMONS.findIndex(x => x.nome.toLowerCase() == nome.toLowerCase());
    mudarPokemon(idPokemon);
}

criarOpcoes();