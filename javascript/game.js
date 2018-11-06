"use strict";
let ATUALIZACAO = 100; //Em Milisegundos

let pokemon = [0,0,0,0,0,0,0],
	name = ["","","","","","","",""];

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
	for (let i = 1; i <= 6; i++){
		mudarPokemonJogo(pokemon[i], name[i], i);
		console.log(pokemon[i]);
	}
    head.removeChild(script);
}

atualizarPokemon();
setInterval(atualizarPokemon, ATUALIZACAO);