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

	#Pega os dados dos pokémons
	id = JSONContent["id"]
	name = JSONContent["species"]["name"]
	JSONSpeciesContent = session.get(JSONContent["species"]["url"]).json()

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
		ability3 = JSONContent["abilities"][0]["ability"]["name"]
		if JSONContent["abilities"][1]["slot"] == 2:
			ability2 = JSONContent["abilities"][1]["ability"]["name"]
			ability1 = JSONContent["abilities"][2]["ability"]["name"]
		else:
			""
			ability1 = JSONContent["abilities"][1]["ability"]["name"]
	else:
		ability3 = ""
		if JSONContent["abilities"][0]["slot"] == 2:
			ability2 = JSONContent["abilities"][0]["ability"]["name"]
			ability1 = JSONContent["abilities"][1]["ability"]["name"]
		else:
			ability2 = ""
			ability1 = JSONContent["abilities"][0]["ability"]["name"]
	
	#Pega cada status para mostrar e soma para ter a base total
	hp = JSONContent["stats"][5]["base_stat"]
	attack = JSONContent["stats"][4]["base_stat"]
	defense = JSONContent["stats"][3]["base_stat"]
	spAttack = JSONContent["stats"][2]["base_stat"]
	spDefense = JSONContent["stats"][1]["base_stat"]
	speed = JSONContent["stats"][0]["base_stat"]
	color = JSONSpeciesContent["color"]["name"]
	
	#Coloca os dados no vetor deixando a primeira letra maiuscula e removendo os traços para colocar espaço no lugar
	pokemons.append([id,
					name.replace("-"," ").capitalize(),
					type1.replace("-"," ").capitalize(),
					type2.replace("-"," ").capitalize(),
					ability1.replace("-"," ").capitalize(),
					ability2.replace("-"," ").capitalize(),
					ability3.replace("-"," ").capitalize(),
					hp,
					attack,
					defense,
					spAttack,
					spDefense,
					speed,
					color.replace("-"," ").capitalize()
					])

	#Mostra um texto para quando terminar o download de dados de cada pokémon
	print(name.replace("-"," ").capitalize() + " downloaded.")
	
#Coloca os dados dos pokémons em um dataset para montar uma tabela
dataset = pd.DataFrame(pokemons)

#Definindo o nome das colunas
dataset.columns = ["Id", "Name", "Type_Primary", "Type_Secondary", "Ability_Primary", "Ability_Secondary", "Ability_Hidden", "HP", "Attack", "Defense", "Special_Attack", "Special_Defense", "Speed", "Color"]

#Definindo a primeira coluna como o identificador de cada pokémon
dataset.set_index("Id", inplace = True)

#Salvando a tabela em um arquivo CSV
dataset.to_csv("pokemons.csv")

#Mostrando uma image de término
print("End.")