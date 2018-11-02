"use strict";
let ATUALIZACAO = 100; //Em Milisegundos

let pokemon1 = 0,
	name1 = "",
    pokemon2 = 0,
	name2 = "",
    pokemon3 = 0,
	name3 = "",
    pokemon4 = 0,
	name4 = "",
    pokemon5 = 0,
	name5 = "",
    pokemon6 = 0,
	name6 = "";

let cxPokemon = ["", cxPokemon1, cxPokemon2, cxPokemon3, cxPokemon4, cxPokemon5, cxPokemon6];

let imgPokemon = ["", imgPokemon1, imgPokemon2, imgPokemon3, imgPokemon4, imgPokemon5, imgPokemon6];

let nomePokemon = ["", nomePokemon1, nomePokemon2, nomePokemon3, nomePokemon4, nomePokemon5, nomePokemon6];

let head = document.getElementsByTagName('head')[0];

function mudarPokemonJogo(id, nome, posicao){
        cxPokemon[posicao].style.backgroundImage = `linear-gradient(${POKEMONS[id].tipo1.cor},${POKEMONS[id].tipo2.cor})`;
        imgPokemon[posicao].src=`./pokemons/${POKEMONS[id].id}.png`;
		nomePokemon[posicao].innerText = nome;
}

function atualizarPokemon(){
    let script = document.createElement('script');
    script.src = 'pokemonatual.js';
    head.appendChild(script);
    mudarPokemonJogo(pokemon1, name1, 1);
    mudarPokemonJogo(pokemon2, name2, 2);
    mudarPokemonJogo(pokemon3, name3, 3);
    mudarPokemonJogo(pokemon4, name4, 4);
    mudarPokemonJogo(pokemon5, name5, 5);
    mudarPokemonJogo(pokemon6, name6, 6);
    head.removeChild(script);
}

atualizarPokemon();
setInterval(atualizarPokemon, ATUALIZACAO);