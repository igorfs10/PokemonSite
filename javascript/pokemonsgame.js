"use strict";
const POKEMONS = [{
id: 0,
nome: "Escolha o Pokémon",
tipo1: QUESTION,
tipo2: QUESTION
},
{
id: 1,
nome: "Bulbasaur",
tipo1: GRASS,
tipo2: POISON
},
{
id: 2,
nome: "Ivysaur",
tipo1: GRASS,
tipo2: POISON 
},
{
id: 3,
nome: "Venusaur",
tipo1: GRASS,
tipo2: POISON 
},
{
id: 4,
nome: "Charmander",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 5,
nome: "Charmeleon",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 6,
nome: "Charizard",
tipo1: FIRE,
tipo2: FLYING 
},
{
id: 7,
nome: "Squirtle",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 8,
nome: "Wartortle",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 9,
nome: "Blastoise",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 10,
nome: "Caterpie",
tipo1: BUG ,
tipo2: BUG 
},
{
id: 11,
nome: "Metapod",
tipo1: BUG ,
tipo2: BUG 
},
{
id: 12,
nome: "Butterfree",
tipo1: BUG,
tipo2: FLYING 
},
{
id: 13,
nome: "Weedle",
tipo1: BUG,
tipo2: POISON 
},
{
id: 14,
nome: "Kakuna",
tipo1: BUG,
tipo2: POISON 
},
{
id: 15,
nome: "Beedrill",
tipo1: BUG,
tipo2: POISON 
},
{
id: 16,
nome: "Pidgey",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 17,
nome: "Pidgeotto",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 18,
nome: "Pidgeot",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 19,
nome: "Rattata",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 20,
nome: "Raticate",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 21,
nome: "Spearow",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 22,
nome: "Fearow",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 23,
nome: "Ekans",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 24,
nome: "Arbok",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 25,
nome: "Pikachu",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 26,
nome: "Raichu",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 27,
nome: "Sandshrew",
tipo1: GROUND ,
tipo2: GROUND 
},
{
id: 28,
nome: "Sandslash",
tipo1: GROUND ,
tipo2: GROUND 
},
{
id: 29,
nome: "Nidoran♀",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 30,
nome: "Nidorina",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 31,
nome: "Nidoqueen",
tipo1: POISON,
tipo2: GROUND 
},
{
id: 32,
nome: "Nidoran♂",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 33,
nome: "Nidorino",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 34,
nome: "Nidoking",
tipo1: POISON,
tipo2: GROUND 
},
{
id: 35,
nome: "Clefairy",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 36,
nome: "Clefable",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 37,
nome: "Vulpix",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 38,
nome: "Ninetales",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 39,
nome: "Jigglypuff",
tipo1: NORMAL,
tipo2: NORMAL 
},
{
id: 40,
nome: "Wigglytuff",
tipo1: NORMAL,
tipo2: NORMAL 
},
{
id: 41,
nome: "Zubat",
tipo1: POISON,
tipo2: FLYING 
},
{
id: 42,
nome: "Golbat",
tipo1: POISON,
tipo2: FLYING 
},
{
id: 43,
nome: "Oddish",
tipo1: GRASS,
tipo2: POISON 
},
{
id: 44,
nome: "Gloom",
tipo1: GRASS,
tipo2: POISON 
},
{
id: 45,
nome: "Vileplume",
tipo1: GRASS,
tipo2: POISON 
},
{
id: 46,
nome: "Paras",
tipo1: BUG,
tipo2: GRASS 
},
{
id: 47,
nome: "Parasect",
tipo1: BUG,
tipo2: GRASS 
},
{
id: 48,
nome: "Venonat",
tipo1: BUG,
tipo2: POISON 
},
{
id: 49,
nome: "Venomoth",
tipo1: BUG,
tipo2: POISON 
},
{
id: 50,
nome: "Diglett",
tipo1: GROUND ,
tipo2: GROUND 
},
{
id: 51,
nome: "Dugtrio",
tipo1: GROUND ,
tipo2: GROUND 
},
{
id: 52,
nome: "Meowth",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 53,
nome: "Persian",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 54,
nome: "Psyduck",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 55,
nome: "Golduck",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 56,
nome: "Mankey",
tipo1: FIGHTING ,
tipo2: FIGHTING 
},
{
id: 57,
nome: "Primeape",
tipo1: FIGHTING ,
tipo2: FIGHTING 
},
{
id: 58,
nome: "Growlithe",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 59,
nome: "Arcanine",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 60,
nome: "Poliwag",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 61,
nome: "Poliwhirl",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 62,
nome: "Poliwrath",
tipo1: WATER,
tipo2: FIGHTING 
},
{
id: 63,
nome: "Abra",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 64,
nome: "Kadabra",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 65,
nome: "Alakazam",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 66,
nome: "Machop",
tipo1: FIGHTING ,
tipo2: FIGHTING 
},
{
id: 67,
nome: "Machoke",
tipo1: FIGHTING ,
tipo2: FIGHTING 
},
{
id: 68,
nome: "Machamp",
tipo1: FIGHTING ,
tipo2: FIGHTING 
},
{
id: 69,
nome: "Bellsprout",
tipo1: GRASS,
tipo2: POISON 
},
{
id: 70,
nome: "Weepinbell",
tipo1: GRASS,
tipo2: POISON 
},
{
id: 71,
nome: "Victreebel",
tipo1: GRASS,
tipo2: POISON 
},
{
id: 72,
nome: "Tentacool",
tipo1: WATER,
tipo2: POISON 
},
{
id: 73,
nome: "Tentacruel",
tipo1: WATER,
tipo2: POISON 
},
{
id: 74,
nome: "Geodude",
tipo1: ROCK,
tipo2: GROUND 
},
{
id: 75,
nome: "Graveler",
tipo1: ROCK,
tipo2: GROUND 
},
{
id: 76,
nome: "Golem",
tipo1: ROCK,
tipo2: GROUND 
},
{
id: 77,
nome: "Ponyta",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 78,
nome: "Rapidash",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 79,
nome: "Slowpoke",
tipo1: WATER,
tipo2: PSYCHIC 
},
{
id: 80,
nome: "Slowbro",
tipo1: WATER,
tipo2: PSYCHIC 
},
{
id: 81,
nome: "Magnemite",
tipo1: ELECTRIC,
tipo2: STEEL 
},
{
id: 82,
nome: "Magneton",
tipo1: ELECTRIC,
tipo2: STEEL 
},
{
id: 83,
nome: "Farfetch'd",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 84,
nome: "Doduo",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 85,
nome: "Dodrio",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 86,
nome: "Seel",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 87,
nome: "Dewgong",
tipo1: WATER,
tipo2: ICE 
},
{
id: 88,
nome: "Grimer",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 89,
nome: "Muk",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 90,
nome: "Shellder",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 91,
nome: "Cloyster",
tipo1: WATER,
tipo2: ICE 
},
{
id: 92,
nome: "Gastly",
tipo1: GHOST,
tipo2: POISON 
},
{
id: 93,
nome: "Haunter",
tipo1: GHOST,
tipo2: POISON 
},
{
id: 94,
nome: "Gengar",
tipo1: GHOST,
tipo2: POISON 
},
{
id: 95,
nome: "Onix",
tipo1: ROCK,
tipo2: GROUND 
},
{
id: 96,
nome: "Drowzee",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 97,
nome: "Hypno",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 98,
nome: "Krabby",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 99,
nome: "Kingler",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 100,
nome: "Voltorb",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 101,
nome: "Electrode",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 102,
nome: "Exeggcute",
tipo1: GRASS,
tipo2: PSYCHIC 
},
{
id: 103,
nome: "Exeggutor",
tipo1: GRASS,
tipo2: PSYCHIC 
},
{
id: 104,
nome: "Cubone",
tipo1: GROUND ,
tipo2: GROUND 
},
{
id: 105,
nome: "Marowak",
tipo1: GROUND ,
tipo2: GROUND 
},
{
id: 106,
nome: "Hitmonlee",
tipo1: FIGHTING ,
tipo2: FIGHTING 
},
{
id: 107,
nome: "Hitmonchan",
tipo1: FIGHTING ,
tipo2: FIGHTING 
},
{
id: 108,
nome: "Lickitung",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 109,
nome: "Koffing",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 110,
nome: "Weezing",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 111,
nome: "Rhyhorn",
tipo1: GROUND,
tipo2: ROCK 
},
{
id: 112,
nome: "Rhydon",
tipo1: GROUND,
tipo2: ROCK 
},
{
id: 113,
nome: "Chansey",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 114,
nome: "Tangela",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 115,
nome: "Kangaskhan",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 116,
nome: "Horsea",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 117,
nome: "Seadra",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 118,
nome: "Goldeen",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 119,
nome: "Seaking",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 120,
nome: "Staryu",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 121,
nome: "Starmie",
tipo1: WATER,
tipo2: PSYCHIC 
},
{
id: 122,
nome: "Mr. Mime",
tipo1: PSYCHIC ,
tipo2: PSYCHIC,
},
{
id: 123,
nome: "Scyther",
tipo1: BUG,
tipo2: FLYING 
},
{
id: 124,
nome: "Jynx",
tipo1: ICE,
tipo2: PSYCHIC 
},
{
id: 125,
nome: "Electabuzz",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 126,
nome: "Magmar",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 127,
nome: "Pinsir",
tipo1: BUG ,
tipo2: BUG 
},
{
id: 128,
nome: "Tauros",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 129,
nome: "Magikarp",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 130,
nome: "Gyarados",
tipo1: WATER,
tipo2: FLYING 
},
{
id: 131,
nome: "Lapras",
tipo1: WATER,
tipo2: ICE 
},
{
id: 132,
nome: "Ditto",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 133,
nome: "Eevee",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 134,
nome: "Vaporeon",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 135,
nome: "Jolteon",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 136,
nome: "Flareon",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 137,
nome: "Porygon",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 138,
nome: "Omanyte",
tipo1: ROCK,
tipo2: WATER 
},
{
id: 139,
nome: "Omastar",
tipo1: ROCK,
tipo2: WATER 
},
{
id: 140,
nome: "Kabuto",
tipo1: ROCK,
tipo2: WATER 
},
{
id: 141,
nome: "Kabutops",
tipo1: ROCK,
tipo2: WATER 
},
{
id: 142,
nome: "Aerodactyl",
tipo1: ROCK,
tipo2: FLYING 
},
{
id: 143,
nome: "Snorlax",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 144,
nome: "Articuno",
tipo1: ICE,
tipo2: FLYING 
},
{
id: 145,
nome: "Zapdos",
tipo1: ELECTRIC,
tipo2: FLYING 
},
{
id: 146,
nome: "Moltres",
tipo1: FIRE,
tipo2: FLYING 
},
{
id: 147,
nome: "Dratini",
tipo1: DRAGON ,
tipo2: DRAGON 
},
{
id: 148,
nome: "Dragonair",
tipo1: DRAGON ,
tipo2: DRAGON 
},
{
id: 149,
nome: "Dragonite",
tipo1: DRAGON,
tipo2: FLYING 
},
{
id: 150,
nome: "Mewtwo",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 151,
nome: "Mew",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 152,
nome: "Chikorita",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 153,
nome: "Bayleef",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 154,
nome: "Meganium",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 155,
nome: "Cyndaquil",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 156,
nome: "Quilava",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 157,
nome: "Typhlosion",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 158,
nome: "Totodile",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 159,
nome: "Croconaw",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 160,
nome: "Feraligatr",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 161,
nome: "Sentret",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 162,
nome: "Furret",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 163,
nome: "Hoothoot",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 164,
nome: "Noctowl",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 165,
nome: "Ledyba",
tipo1: BUG,
tipo2: FLYING 
},
{
id: 166,
nome: "Ledian",
tipo1: BUG,
tipo2: FLYING 
},
{
id: 167,
nome: "Spinarak",
tipo1: BUG,
tipo2: POISON 
},
{
id: 168,
nome: "Ariados",
tipo1: BUG,
tipo2: POISON 
},
{
id: 169,
nome: "Crobat",
tipo1: POISON,
tipo2: FLYING 
},
{
id: 170,
nome: "Chinchou",
tipo1: WATER,
tipo2: ELECTRIC 
},
{
id: 171,
nome: "Lanturn",
tipo1: WATER,
tipo2: ELECTRIC 
},
{
id: 172,
nome: "Pichu",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 173,
nome: "Cleffa",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 174,
nome: "Igglybuff",
tipo1: NORMAL,
tipo2: NORMAL 
},
{
id: 175,
nome: "Togepi",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 176,
nome: "Togetic",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 177,
nome: "Natu",
tipo1: PSYCHIC,
tipo2: FLYING 
},
{
id: 178,
nome: "Xatu",
tipo1: PSYCHIC,
tipo2: FLYING 
},
{
id: 179,
nome: "Mareep",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 180,
nome: "Flaaffy",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 181,
nome: "Ampharos",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 182,
nome: "Bellossom",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 183,
nome: "Marill",
tipo1: WATER,
tipo2: WATER 
},
{
id: 184,
nome: "Azumarill",
tipo1: WATER,
tipo2: WATER 
},
{
id: 185,
nome: "Sudowoodo",
tipo1: ROCK ,
tipo2: ROCK 
},
{
id: 186,
nome: "Politoed",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 187,
nome: "Hoppip",
tipo1: GRASS,
tipo2: FLYING 
},
{
id: 188,
nome: "Skiploom",
tipo1: GRASS,
tipo2: FLYING 
},
{
id: 189,
nome: "Jumpluff",
tipo1: GRASS,
tipo2: FLYING 
},
{
id: 190,
nome: "Aipom",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 191,
nome: "Sunkern",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 192,
nome: "Sunflora",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 193,
nome: "Yanma",
tipo1: BUG,
tipo2: FLYING 
},
{
id: 194,
nome: "Wooper",
tipo1: WATER,
tipo2: GROUND 
},
{
id: 195,
nome: "Quagsire",
tipo1: WATER,
tipo2: GROUND 
},
{
id: 196,
nome: "Espeon",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 197,
nome: "Umbreon",
tipo1: DARK ,
tipo2: DARK 
},
{
id: 198,
nome: "Murkrow",
tipo1: DARK,
tipo2: FLYING 
},
{
id: 199,
nome: "Slowking",
tipo1: WATER,
tipo2: PSYCHIC 
},
{
id: 200,
nome: "Misdreavus",
tipo1: GHOST ,
tipo2: GHOST 
},
{
id: 201,
nome: "Unown",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 202,
nome: "Wobbuffet",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 203,
nome: "Girafarig",
tipo1: NORMAL,
tipo2: PSYCHIC 
},
{
id: 204,
nome: "Pineco",
tipo1: BUG ,
tipo2: BUG 
},
{
id: 205,
nome: "Forretress",
tipo1: BUG,
tipo2: STEEL 
},
{
id: 206,
nome: "Dunsparce",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 207,
nome: "Gligar",
tipo1: GROUND,
tipo2: FLYING 
},
{
id: 208,
nome: "STEELix",
tipo1: STEEL,
tipo2: GROUND 
},
{
id: 209,
nome: "Snubbull",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 210,
nome: "Granbull",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 211,
nome: "Qwilfish",
tipo1: WATER,
tipo2: POISON 
},
{
id: 212,
nome: "Scizor",
tipo1: BUG,
tipo2: STEEL 
},
{
id: 213,
nome: "Shuckle",
tipo1: BUG,
tipo2: ROCK 
},
{
id: 214,
nome: "Heracross",
tipo1: BUG,
tipo2: FIGHTING 
},
{
id: 215,
nome: "Sneasel",
tipo1: DARK,
tipo2: ICE 
},
{
id: 216,
nome: "Teddiursa",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 217,
nome: "Ursaring",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 218,
nome: "Slugma",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 219,
nome: "Magcargo",
tipo1: FIRE,
tipo2: ROCK 
},
{
id: 220,
nome: "Swinub",
tipo1: ICE,
tipo2: GROUND 
},
{
id: 221,
nome: "Piloswine",
tipo1: ICE,
tipo2: GROUND 
},
{
id: 222,
nome: "Corsola",
tipo1: WATER,
tipo2: ROCK 
},
{
id: 223,
nome: "Remoraid",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 224,
nome: "Octillery",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 225,
nome: "Delibird",
tipo1: ICE,
tipo2: FLYING 
},
{
id: 226,
nome: "Mantine",
tipo1: WATER,
tipo2: FLYING 
},
{
id: 227,
nome: "Skarmory",
tipo1: STEEL,
tipo2: FLYING 
},
{
id: 228,
nome: "Houndour",
tipo1: DARK,
tipo2: FIRE 
},
{
id: 229,
nome: "Houndoom",
tipo1: DARK,
tipo2: FIRE 
},
{
id: 230,
nome: "Kingdra",
tipo1: WATER,
tipo2: DRAGON 
},
{
id: 231,
nome: "Phanpy",
tipo1: GROUND ,
tipo2: GROUND 
},
{
id: 232,
nome: "Donphan",
tipo1: GROUND ,
tipo2: GROUND 
},
{
id: 233,
nome: "Porygon2",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 234,
nome: "Stantler",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 235,
nome: "Smeargle",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 236,
nome: "Tyrogue",
tipo1: FIGHTING ,
tipo2: FIGHTING 
},
{
id: 237,
nome: "Hitmontop",
tipo1: FIGHTING ,
tipo2: FIGHTING 
},
{
id: 238,
nome: "Smoochum",
tipo1: ICE,
tipo2: PSYCHIC 
},
{
id: 239,
nome: "Elekid",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 240,
nome: "Magby",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 241,
nome: "Miltank",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 242,
nome: "Blissey",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 243,
nome: "Raikou",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 244,
nome: "Entei",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 245,
nome: "Suicune",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 246,
nome: "Larvitar",
tipo1: ROCK,
tipo2: GROUND 
},
{
id: 247,
nome: "Pupitar",
tipo1: ROCK,
tipo2: GROUND 
},
{
id: 248,
nome: "Tyranitar",
tipo1: ROCK,
tipo2: DARK 
},
{
id: 249,
nome: "Lugia",
tipo1: PSYCHIC,
tipo2: FLYING 
},
{
id: 250,
nome: "Ho-Oh",
tipo1: FIRE,
tipo2: FLYING 
},
{
id: 251,
nome: "Celebi",
tipo1: PSYCHIC,
tipo2: GRASS 
},
{
id: 252,
nome: "Treecko",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 253,
nome: "Grovyle",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 254,
nome: "Sceptile",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 255,
nome: "Torchic",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 256,
nome: "Combusken",
tipo1: FIRE,
tipo2: FIGHTING 
},
{
id: 257,
nome: "Blaziken",
tipo1: FIRE,
tipo2: FIGHTING 
},
{
id: 258,
nome: "Mudkip",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 259,
nome: "Marshtomp",
tipo1: WATER,
tipo2: GROUND 
},
{
id: 260,
nome: "Swampert",
tipo1: WATER,
tipo2: GROUND 
},
{
id: 261,
nome: "Poochyena",
tipo1: DARK ,
tipo2: DARK 
},
{
id: 262,
nome: "Mightyena",
tipo1: DARK ,
tipo2: DARK 
},
{
id: 263,
nome: "Zigzagoon",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 264,
nome: "Linoone",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 265,
nome: "Wurmple",
tipo1: BUG ,
tipo2: BUG 
},
{
id: 266,
nome: "Silcoon",
tipo1: BUG ,
tipo2: BUG 
},
{
id: 267,
nome: "Beautifly",
tipo1: BUG,
tipo2: FLYING 
},
{
id: 268,
nome: "Cascoon",
tipo1: BUG ,
tipo2: BUG 
},
{
id: 269,
nome: "Dustox",
tipo1: BUG,
tipo2: POISON 
},
{
id: 270,
nome: "Lotad",
tipo1: WATER,
tipo2: GRASS 
},
{
id: 271,
nome: "Lombre",
tipo1: WATER,
tipo2: GRASS 
},
{
id: 272,
nome: "Ludicolo",
tipo1: WATER,
tipo2: GRASS 
},
{
id: 273,
nome: "Seedot",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 274,
nome: "Nuzleaf",
tipo1: GRASS,
tipo2: DARK 
},
{
id: 275,
nome: "Shiftry",
tipo1: GRASS,
tipo2: DARK 
},
{
id: 276,
nome: "Taillow",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 277,
nome: "Swellow",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 278,
nome: "Wingull",
tipo1: WATER,
tipo2: FLYING 
},
{
id: 279,
nome: "Pelipper",
tipo1: WATER,
tipo2: FLYING 
},
{
id: 280,
nome: "Ralts",
tipo1: PSYCHIC,
tipo2: PSYCHIC 
},
{
id: 281,
nome: "Kirlia",
tipo1: PSYCHIC,
tipo2: PSYCHIC 
},
{
id: 282,
nome: "Gardevoir",
tipo1: PSYCHIC,
tipo2: PSYCHIC 
},
{
id: 283,
nome: "Surskit",
tipo1: BUG,
tipo2: WATER 
},
{
id: 284,
nome: "Masquerain",
tipo1: BUG,
tipo2: FLYING 
},
{
id: 285,
nome: "Shroomish",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 286,
nome: "Breloom",
tipo1: GRASS,
tipo2: FIGHTING 
},
{
id: 287,
nome: "Slakoth",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 288,
nome: "Vigoroth",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 289,
nome: "Slaking",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 290,
nome: "Nincada",
tipo1: BUG,
tipo2: GROUND 
},
{
id: 291,
nome: "Ninjask",
tipo1: BUG,
tipo2: FLYING 
},
{
id: 292,
nome: "Shedinja",
tipo1: BUG,
tipo2: GHOST 
},
{
id: 293,
nome: "Whismur",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 294,
nome: "Loudred",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 295,
nome: "Exploud",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 296,
nome: "Makuhita",
tipo1: FIGHTING ,
tipo2: FIGHTING 
},
{
id: 297,
nome: "Hariyama",
tipo1: FIGHTING ,
tipo2: FIGHTING 
},
{
id: 298,
nome: "Azurill",
tipo1: NORMAL,
tipo2: NORMAL 
},
{
id: 299,
nome: "Nosepass",
tipo1: ROCK ,
tipo2: ROCK 
},
{
id: 300,
nome: "Skitty",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 301,
nome: "Delcatty",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 302,
nome: "Sableye",
tipo1: DARK,
tipo2: GHOST 
},
{
id: 303,
nome: "Mawile",
tipo1: STEEL,
tipo2: STEEL 
},
{
id: 304,
nome: "Aron",
tipo1: STEEL,
tipo2: ROCK 
},
{
id: 305,
nome: "Lairon",
tipo1: STEEL,
tipo2: ROCK 
},
{
id: 306,
nome: "Aggron",
tipo1: STEEL,
tipo2: ROCK 
},
{
id: 307,
nome: "Meditite",
tipo1: FIGHTING,
tipo2: PSYCHIC 
},
{
id: 308,
nome: "Medicham",
tipo1: FIGHTING,
tipo2: PSYCHIC 
},
{
id: 309,
nome: "Electrike",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 310,
nome: "Manectric",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 311,
nome: "Plusle",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 312,
nome: "Minun",
tipo1: ELECTRIC ,
tipo2: ELECTRIC 
},
{
id: 313,
nome: "Volbeat",
tipo1: BUG ,
tipo2: BUG 
},
{
id: 314,
nome: "Illumise",
tipo1: BUG ,
tipo2: BUG 
},
{
id: 315,
nome: "Roselia",
tipo1: GRASS,
tipo2: POISON 
},
{
id: 316,
nome: "Gulpin",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 317,
nome: "Swalot",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 318,
nome: "Carvanha",
tipo1: WATER,
tipo2: DARK 
},
{
id: 319,
nome: "Sharpedo",
tipo1: WATER,
tipo2: DARK 
},
{
id: 320,
nome: "Wailmer",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 321,
nome: "Wailord",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 322,
nome: "Numel",
tipo1: FIRE,
tipo2: GROUND 
},
{
id: 323,
nome: "Camerupt",
tipo1: FIRE,
tipo2: GROUND 
},
{
id: 324,
nome: "Torkoal",
tipo1: FIRE ,
tipo2: FIRE 
},
{
id: 325,
nome: "Spoink",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 326,
nome: "Grumpig",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 327,
nome: "Spinda",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 328,
nome: "Trapinch",
tipo1: GROUND ,
tipo2: GROUND 
},
{
id: 329,
nome: "Vibrava",
tipo1: GROUND,
tipo2: DRAGON 
},
{
id: 330,
nome: "Flygon",
tipo1: GROUND,
tipo2: DRAGON 
},
{
id: 331,
nome: "Cacnea",
tipo1: GRASS ,
tipo2: GRASS 
},
{
id: 332,
nome: "Cacturne",
tipo1: GRASS,
tipo2: DARK 
},
{
id: 333,
nome: "Swablu",
tipo1: NORMAL,
tipo2: FLYING 
},
{
id: 334,
nome: "Altaria",
tipo1: DRAGON,
tipo2: FLYING 
},
{
id: 335,
nome: "Zangoose",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 336,
nome: "Seviper",
tipo1: POISON ,
tipo2: POISON 
},
{
id: 337,
nome: "Lunatone",
tipo1: ROCK,
tipo2: PSYCHIC 
},
{
id: 338,
nome: "Solrock",
tipo1: ROCK,
tipo2: PSYCHIC 
},
{
id: 339,
nome: "Barboach",
tipo1: WATER,
tipo2: GROUND 
},
{
id: 340,
nome: "Whiscash",
tipo1: WATER,
tipo2: GROUND 
},
{
id: 341,
nome: "Corphish",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 342,
nome: "Crawdaunt",
tipo1: WATER,
tipo2: DARK 
},
{
id: 343,
nome: "Baltoy",
tipo1: GROUND,
tipo2: PSYCHIC 
},
{
id: 344,
nome: "Claydol",
tipo1: GROUND,
tipo2: PSYCHIC 
},
{
id: 345,
nome: "Lileep",
tipo1: ROCK,
tipo2: GRASS 
},
{
id: 346,
nome: "Cradily",
tipo1: ROCK,
tipo2: GRASS 
},
{
id: 347,
nome: "Anorith",
tipo1: ROCK,
tipo2: BUG 
},
{
id: 348,
nome: "Armaldo",
tipo1: ROCK,
tipo2: BUG 
},
{
id: 349,
nome: "Feebas",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 350,
nome: "Milotic",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 351,
nome: "Castform",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 352,
nome: "Kecleon",
tipo1: NORMAL ,
tipo2: NORMAL 
},
{
id: 353,
nome: "Shuppet",
tipo1: GHOST ,
tipo2: GHOST 
},
{
id: 354,
nome: "Banette",
tipo1: GHOST ,
tipo2: GHOST 
},
{
id: 355,
nome: "Duskull",
tipo1: GHOST ,
tipo2: GHOST 
},
{
id: 356,
nome: "Dusclops",
tipo1: GHOST ,
tipo2: GHOST 
},
{
id: 357,
nome: "Tropius",
tipo1: GRASS,
tipo2: FLYING 
},
{
id: 358,
nome: "Chimecho",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 359,
nome: "Absol",
tipo1: DARK ,
tipo2: DARK 
},
{
id: 360,
nome: "Wynaut",
tipo1: PSYCHIC ,
tipo2: PSYCHIC 
},
{
id: 361,
nome: "Snorunt",
tipo1: ICE ,
tipo2: ICE 
},
{
id: 362,
nome: "Glalie",
tipo1: ICE ,
tipo2: ICE 
},
{
id: 363,
nome: "Spheal",
tipo1: ICE,
tipo2: WATER 
},
{
id: 364,
nome: "Sealeo",
tipo1: ICE,
tipo2: WATER 
},
{
id: 365,
nome: "Walrein",
tipo1: ICE,
tipo2: WATER 
},
{
id: 366,
nome: "Clamperl",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 367,
nome: "Huntail",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 368,
nome: "Gorebyss",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 369,
nome: "Relicanth",
tipo1: WATER,
tipo2: ROCK 
},
{
id: 370,
nome: "Luvdisc",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 371,
nome: "Bagon",
tipo1: DRAGON ,
tipo2: DRAGON 
},
{
id: 372,
nome: "Shelgon",
tipo1: DRAGON ,
tipo2: DRAGON 
},
{
id: 373,
nome: "Salamence",
tipo1: DRAGON,
tipo2: FLYING 
},
{
id: 374,
nome: "Beldum",
tipo1: STEEL,
tipo2: PSYCHIC 
},
{
id: 375,
nome: "Metang",
tipo1: STEEL,
tipo2: PSYCHIC 
},
{
id: 376,
nome: "Metagross",
tipo1: STEEL,
tipo2: PSYCHIC 
},
{
id: 377,
nome: "Regirock",
tipo1: ROCK ,
tipo2: ROCK 
},
{
id: 378,
nome: "Regice",
tipo1: ICE ,
tipo2: ICE 
},
{
id: 379,
nome: "Registeel",
tipo1: STEEL ,
tipo2: STEEL 
},
{
id: 380,
nome: "Latias",
tipo1: DRAGON,
tipo2: PSYCHIC 
},
{
id: 381,
nome: "Latios",
tipo1: DRAGON,
tipo2: PSYCHIC 
},
{
id: 382,
nome: "Kyogre",
tipo1: WATER ,
tipo2: WATER 
},
{
id: 383,
nome: "Groudon",
tipo1: GROUND ,
tipo2: GROUND 
},
{
id: 384,
nome: "Rayquaza",
tipo1: DRAGON,
tipo2: FLYING 
},
{
id: 385,
nome: "Jirachi",
tipo1: STEEL,
tipo2: PSYCHIC 
},
{
id: 386,
nome: "Deoxys",
tipo1: PSYCHIC,
tipo2: PSYCHIC
},
{
id: 387,
nome: "Egg",
tipo1: QUESTION,
tipo2: QUESTION
}];
