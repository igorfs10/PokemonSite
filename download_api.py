import numpy as np
import pandas as pd
import requests
import json

#Constantes com quantidades de pokémons
PRIMEIRO_POKEMON = 1
ULTIMO_POKEMON = 807

#Inicia a sessão e mantém para que a conexão não seja fechada a cada download
session = requests.Session()

#Inicia um vetor que vai receber os dados de cada pokémon
pokemons = []

#Url de onde o script baixa os dados
URL = "https://pokeapi.co/api/v2/pokemon/"

#Executa um loop que vai baixar do primeiro ao ultimo pokémon
for i in range (PRIMEIRO_POKEMON, ULTIMO_POKEMON + 1):
	#Baixa a página em formato JSON
	JSONContent = session.get(URL + str(i)).json()
	JSONSpeciesContent = session.get(JSONContent["species"]["url"]).json()

	#Pega os dados dos pokémons
	id = JSONContent["id"]
	name = JSONSpeciesContent["names"][2]["name"]
	color = JSONSpeciesContent["color"]["name"]

	#Verifica os slots para salvar o tipo de forma correta. Se possuir só 1 tipo ele salva os dois como o mesmo tipo
	if JSONContent["types"][0]["slot"] == 2:
		type1 = JSONContent["types"][1]["type"]["name"]
		type2 = JSONContent["types"][0]["type"]["name"]
	else:
		type1 = JSONContent["types"][0]["type"]["name"]
		type2 = ""

	#Verifica os slots para salvar as habilidades de forma correta. Se possuir uma habilidade, a função define a segunda habilidade usando a primeira
	#Se não possuir a hidden ability ela ficara vazia
	if JSONContent["abilities"][0]["slot"] == 3:
		JSONAbilityContent = session.get(JSONContent["abilities"][0]["ability"]["url"]).json()
		ability3 = JSONAbilityContent["names"][2]["name"]

		if JSONContent["abilities"][1]["slot"] == 2:
			JSONAbilityContent = session.get(JSONContent["abilities"][1]["ability"]["url"]).json()
			ability2 = JSONAbilityContent["names"][2]["name"]

			JSONAbilityContent = session.get(JSONContent["abilities"][2]["ability"]["url"]).json()
			ability1 = JSONAbilityContent["names"][2]["name"]
		else:
			ability2 = ""

			JSONAbilityContent = session.get(JSONContent["abilities"][1]["ability"]["url"]).json()
			ability1 = JSONAbilityContent["names"][2]["name"]
	else:
		ability3 = ""

		if JSONContent["abilities"][0]["slot"] == 2:
			JSONAbilityContent = session.get(JSONContent["abilities"][0]["ability"]["url"]).json()
			ability2 = JSONAbilityContent["names"][2]["name"]

			JSONAbilityContent = session.get(JSONContent["abilities"][1]["ability"]["url"]).json()
			ability1 = JSONAbilityContent["names"][2]["name"]
		else:
			ability2 = ""

			JSONAbilityContent = session.get(JSONContent["abilities"][0]["ability"]["url"]).json()
			ability1 = JSONAbilityContent["names"][2]["name"]
	
	#Pega cada status para mostrar
	hp = JSONContent["stats"][5]["base_stat"]
	attack = JSONContent["stats"][4]["base_stat"]
	defense = JSONContent["stats"][3]["base_stat"]
	spAttack = JSONContent["stats"][2]["base_stat"]
	spDefense = JSONContent["stats"][1]["base_stat"]
	speed = JSONContent["stats"][0]["base_stat"]

	image = "https://raw.githubusercontent.com/igorfs10/PokemonSite/gh-pages/images/" + str(id) + ".png"
	
	#Coloca os dados no vetor deixando a primeira letra maiuscula e removendo os traços para colocar espaço no lugar
	pokemons.append([id,
					name,
					color.replace("-"," ").capitalize(),
					type1.capitalize(),
					type2.capitalize(),
					ability1,
					ability2,
					ability3,
					hp,
					attack,
					defense,
					spAttack,
					spDefense,
					speed,
					image
					])

	#Mostra um texto para quando terminar o download de dados de cada pokémon
	print(name + " downloaded.")
	
#Coloca os dados dos pokémons em um dataset para montar uma tabela
dataset = pd.DataFrame(pokemons)

#Definindo o nome das colunas
dataset.columns = ["id", "name", "color", "type_primary", "type_secondary", "ability_primary", "ability_Secondary", "Ability_hidden", "hp", "attack", "defense", "special_attack", "special_defense", "speed", "image"]

#Definindo a primeira coluna como o identificador de cada pokémon
dataset.set_index("id", inplace = True)

#Salvando a tabela em um arquivo CSV
dataset.to_csv("pokemons.csv")

#Mostrando uma image de término
print("End.")