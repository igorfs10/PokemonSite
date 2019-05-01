import numpy as np
import pandas as pd
import requests
import json

PRIMEIRO_POKEMON = 1
ULTIMO_POKEMON = 807
session = requests.Session()

pokemons = []

URL = "https://pokeapi.co/api/v2/pokemon/"
for i in range (PRIMEIRO_POKEMON, ULTIMO_POKEMON + 1):
	JSONContent = session.get(URL + str(i)).json()
	id = JSONContent['id']
	name = JSONContent['species']['name']
	if JSONContent['types'][0]['slot'] == 2:
		type1 = JSONContent['types'][1]['type']['name']
		type2 = JSONContent['types'][0]['type']['name']
	else:
		type1 = JSONContent['types'][0]['type']['name']
		type2 = JSONContent['types'][0]['type']['name']
	if JSONContent['abilities'][0]['slot'] == 3:
		ability3 = JSONContent['abilities'][0]['ability']['name']
		if JSONContent['abilities'][1]['slot'] == 2:
			ability2 = JSONContent['abilities'][1]['ability']['name']
			ability1 = JSONContent['abilities'][2]['ability']['name']
		else:
			ability2 = JSONContent['abilities'][1]['ability']['name']
			ability1 = JSONContent['abilities'][1]['ability']['name']
	else:
		ability3 = ""
		if JSONContent['abilities'][0]['slot'] == 2:
			ability2 = JSONContent['abilities'][0]['ability']['name']
			ability1 = JSONContent['abilities'][1]['ability']['name']
		else:
			ability2 = JSONContent['abilities'][0]['ability']['name']
			ability1 = JSONContent['abilities'][0]['ability']['name']
	hp = JSONContent['stats'][5]['base_stat']
	attack = JSONContent['stats'][4]['base_stat']
	defense = JSONContent['stats'][3]['base_stat']
	spAttack = JSONContent['stats'][2]['base_stat']
	spDefense = JSONContent['stats'][1]['base_stat']
	speed = JSONContent['stats'][0]['base_stat']
	total = hp + attack + defense + spAttack + spDefense +speed
	image = "images/" + str(i).zfill(3) + ".png"
	pokemons.append([id,
					name.replace('-',' ').capitalize(),
					type1.replace('-',' ').capitalize(),
					type2.replace('-',' ').capitalize(),
					ability1.replace('-',' ').capitalize(),
					ability2.replace('-',' ').capitalize(),
					ability3.replace('-',' ').capitalize(),
					hp,
					attack,
					defense,
					spAttack,
					spDefense,
					speed,
					total,
					image
					])
	print(name.replace('-',' ').capitalize() + " downloaded.")
	
dataset = pd.DataFrame(pokemons)
dataset.columns = ['Id', 'Name', 'Type_Primary', 'Type_Secondary', 'Primary_Ability', 'Secondary_Ability', 'Hidden_Ability', 'HP', 'Attack', 'Defense', 'Special_Attack', 'Special_Defense', 'Speed', 'Total', 'Image']
dataset.set_index('Id', inplace = True)
dataset.to_csv("api/pokemons.csv")
print("End.")