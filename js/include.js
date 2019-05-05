"use strict";

//Funções para ser usada no site

//Atualiza o quadro com os dados do pokémon, usando o ID
function mudarPokemon(id){
    if(id >= 0 && id < POKEMONS.length && id != ""){
        id = parseInt(id);
        pokemon.style.backgroundImage = `linear-gradient(${POKEMONS[id].tipo1.cor},${POKEMONS[id].tipo2.cor})`;
        imgPokemon.src=`./images/${id}.png`;
        pokemonId.value = id;
        pokemonIdNome.value = POKEMONS[id].nome;
        pokemonId.style.border = "solid 2px black";
        pokemonIdNome.style.border = "solid 2px black";
		let text = "";
		for(let i in POKEMONS[id].local){
			text += `<p>${POKEMONS[id].local[i]}</p>`;
		}
		local.innerHTML = text;
    }else{
        pokemonId.style.border = "solid 2px red";
        pokemonIdNome.style.border = "solid 2px red";
    }
}

//Cria a lista de pokémon para serem mostradas no combobox
function criarOpcoes(){
    for(let i in POKEMONS){
        pokemonNome.innerHTML = pokemonNome.innerHTML + `<option value="${POKEMONS[i].nome}"></option>`;
    }
}

//Função para pegar o id do pokémon pelo nome e atualizar o quadro
function pegaPokemonPorNome(nome){
    let idPokemon = POKEMONS.findIndex(x => x.nome.toLowerCase() == nome.toLowerCase());
    mudarPokemon(idPokemon);
}

//Executa a função que cria as combobox
criarOpcoes();