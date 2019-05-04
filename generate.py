from distutils.dir_util import copy_tree
import pandas as pd
import numpy as np
import json

PRIMEIRO_POKEMON = 1
ULTIMO_POKEMON = 807

#Abre o csv
dataset = pd.read_csv("pokemons.csv")

#Definindo a primeira coluna como o identificador de cada pokémon
dataset.set_index("Id", inplace = True)

for i in range (PRIMEIRO_POKEMON, ULTIMO_POKEMON + 1):
    data = dataset.iloc[i-1:i].to_json(orient = "records").replace("[", "").replace("]", "")
    id = str(i)
    with open("api/" + id +".json", "w") as file:
        file.write(data)
    print(id + " generated.")

#salva os dados numa string
data = dataset.iloc[PRIMEIRO_POKEMON-1:ULTIMO_POKEMON+1].to_json(orient = "records").replace("[", "").replace("]", "")
data = "{[" + data + "]}"

#salva a string no arquivo
with open("api/pokemons.json", "w") as file:
    file.write(data)

copy_tree("api", "/PokemonSite/api")

print("API generated.")