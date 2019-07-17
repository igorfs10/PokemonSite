"use strict";

var url = 'https://igorfs10.github.io/PokemonSite/api/';

var pokemons;
fetch(url).then(res => res.json()).then((out) => {pokemons = out.pokemons;}).catch(err => { throw err });

new Vue({
    el: "#app",
    data: {
        pokemon: {
            name: null,
            id: 0,
            type_primary: null,
            type_secondary: null,
            image: "https://raw.githubusercontent.com/igorfs10/PokemonSite/gh-pages/images/0.png"
        },
        cores: {"background-image": "linear-gradient(#68A090, #68A090)"},
        coresTipo: {"background-image": "linear-gradient(to right, #68A090, #68A090)"},
        typePrimary: null,
        singleType: null,
        typeSecondary: null
    },
    methods: {
        changePokemon(event){
            var inputId = parseInt(event.target.value);
            if((inputId < pokemons.length) && (inputId >= 0)){
                this.pokemon = pokemons[inputId];
            }else if((typeof inputId !== NaN) || (inputId < 0)){
                this.pokemon = pokemons[0];
            }else{
                this.pokemon = pokemons[pokemons.length - 1];
                pokemonId.value = pokemons.length - 1;
            }
            if(this.pokemon.type_secondary){
                this.cores = {"background-image": "linear-gradient(" + getTypeColor(this.pokemon.type_primary) + ", " + getTypeColor(this.pokemon.type_secondary) +")"};
                this.coresTipo = {"background-image": "linear-gradient(to right, " + getTypeColor(this.pokemon.type_primary) + ", " + getTypeColor(this.pokemon.type_secondary) +")"};
                this.typePrimary = this.pokemon.type_primary;
                this.typeSecondary = this.pokemon.type_secondary;
                this.singleType = null;
            }else{
                this.cores = {"background-image": "linear-gradient(" + getTypeColor(this.pokemon.type_primary) + ", " + getTypeColor(this.pokemon.type_primary) +")"};
                this.coresTipo = {"background-image": "linear-gradient(to right, " + getTypeColor(this.pokemon.type_primary) + ", " + getTypeColor(this.pokemon.type_primary) +")"};
                this.typePrimary = null;
                this.typeSecondary = null;
                this.singleType = this.pokemon.type_primary;
            }
        }
    }
});

function getTypeColor(type){
    switch(type){
        case "Normal":
            return "#A8A878";
        case "Fire":
            return "#F08030";
        case "Fighting":
            return "#C03028";
        case "Water":
            return "#6890F0";
        case "Flying":
            return "#A890F0";
        case "Grass":
            return "#78C850";
        case "Poison":
            return "#A040A0";
        case "Electric":
            return "#F8D030";
        case "Ground":
            return "#E0C068";
        case "Psychic":
            return "#F85888";
        case "Rock":
            return "#B8A038";
        case "Ice":
            return "#98D8D8";
        case "Bug":
            return "#A8B820";
        case "Dragon":
            return "#7038F8";
        case "Ghost":
            return "#705898";
        case "Dark":
            return "#705848";
        case "Steel":
            return "#B8B8D0";
        case "Fairy":
            return "#EE99AC";
        default:
            return "#68A090";
    }
}