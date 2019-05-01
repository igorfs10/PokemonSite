"use strict";

/*Funções para serem usadas na página para o jogo*/

//Constante que marca o tempo em que a atualização de pokémon vai acontecer. Em milisegundos
const ATUALIZACAO = 100;

//Inicializando variáveis para pegar os ids e nomes dos pokémons
let pokemon = [0,0,0,0,0,0,0],
    name = ["","","","","","","",""];

//Guarda os elementos da página em vetores
let cxPokemon = ["", cxPokemon1, cxPokemon2, cxPokemon3, cxPokemon4, cxPokemon5, cxPokemon6];
let imgPokemon = ["", imgPokemon1, imgPokemon2, imgPokemon3, imgPokemon4, imgPokemon5, imgPokemon6];
let nomePokemon = ["", nomePokemon1, nomePokemon2, nomePokemon3, nomePokemon4, nomePokemon5, nomePokemon6];

//Armazena o head da página em uma varável para adicionar e remover o script das variáveis dos pokémon nele
let head = document.getElementsByTagName('head')[0];

//Função para atualizar o pokémon no quadro, a função pega o ID, nome e qual caixa ele vai mudar. Através do ID ela pega a imagem e as cores dos tipos.
function mudarPokemonJogo(id, nome, posicao){
        cxPokemon[posicao].style.backgroundImage = `linear-gradient(${POKEMONS[id].tipo1.cor},${POKEMONS[id].tipo2.cor})`;
        imgPokemon[posicao].src=`./pokemons/${POKEMONS[id].id}.png`;
		nomePokemon[posicao].innerText = nome;
}

//Essa função atualiza todas as caixas para mostrar os pokémons, ela adiciona o script com as variáveis da equipe e remove para ser adicionada novamente
function atualizarPokemon(){
    let script = document.createElement('script');
    script.src = 'js/current.js';
    head.appendChild(script);
	for (let i = 1; i <= 6; i++){
		mudarPokemonJogo(pokemon[i], name[i], i);
	}
    head.removeChild(script);
}

//Atualiza os quadros no começo
atualizarPokemon();

//Executa a atualização no intervalo definido pela constante
setInterval(atualizarPokemon, ATUALIZACAO);