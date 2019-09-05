from distutils.dir_util import copy_tree
import pandas as pd
import numpy as np
import json
import os

PRIMEIRO_POKEMON = 1

#Cria pasta API se não existir
dirName = "api"
try:
    os.mkdir(dirName)
    print("Directory " , dirName ,  " created.") 
except FileExistsError:
    print("Directory " , dirName ,  " already exists.")
    
#Abre o csv
dataset = pd.read_csv("pokemons.csv")

#Pega o ultimo pokémon baseado no arquivo csv
ULTIMO_POKEMON = dataset.shape[0]

#Salva os dados de cada pokémon em um arquivo com o nome e outro com o id
for i in range (PRIMEIRO_POKEMON, ULTIMO_POKEMON + 1):
    data = dataset.iloc[i-1:i].to_json(orient = "records").replace("[", "").replace("]", "").replace("\/", "/").replace(".0", "")
    id = str(dataset.iloc[i-1:i,0].values[0])
    name = str(dataset.iloc[i-1:i,1].values[0])
    with open("api/" + id +".json", "w") as file:
        file.write(data)
    with open("api/" + name.lower() +".json", "w") as file:
        file.write(data)
    print(id + " generated.")

#salva os dados numa string
data = dataset[["id", "name", "color", "type_primary", "type_secondary", "image"]].to_json(orient = "records").replace("[", "").replace("]", "").replace("\/", "/").replace(".0", "")
data = '{"pokemons":[' + data + ']}'

#salva a string no arquivo
with open("api/pokemons.json", "w") as file:
    file.write(data)

with open("api/index.json", "w") as file:
    file.write(data)

print("API generated.")
