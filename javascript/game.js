"use strict";
let ATUALIZACAO = 100; //Em Milisegundos

let pokemon1 = 0,
    pokemon2 = 0,
    pokemon3 = 0,
    pokemon4 = 0,
    pokemon5 = 0,
    pokemon6 = 0;

let cxPokemon = ["", cxPokemon1, cxPokemon2, cxPokemon3, cxPokemon4, cxPokemon5, cxPokemon6];

let imgPokemon = ["", imgPokemon1, imgPokemon2, imgPokemon3, imgPokemon4, imgPokemon5, imgPokemon6];

let head = document.getElementsByTagName('head')[0];

function mudarPokemonJogo(id, posicao){
        cxPokemon[posicao].style.backgroundImage = `linear-gradient(${POKEMONS[id].tipo1.cor},${POKEMONS[id].tipo2.cor})`;
        imgPokemon[posicao].src=`./pokemons/${POKEMONS[id].id}.png`;
}

function atualizarPokemon(){
    let script = document.createElement('script');
    script.src = 'pokemonatual.js';
    head.appendChild(script);
    mudarPokemonJogo(pokemon1, 1);
    mudarPokemonJogo(pokemon2, 2);
    mudarPokemonJogo(pokemon3, 3);
    mudarPokemonJogo(pokemon4, 4);
    mudarPokemonJogo(pokemon5, 5);
    mudarPokemonJogo(pokemon6, 6);
    head.removeChild(script);
}

atualizarPokemon();
setInterval(atualizarPokemon, ATUALIZACAO);