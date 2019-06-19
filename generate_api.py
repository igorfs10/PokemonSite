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
    print("Directory " , dirName ,  " Created.") 
except FileExistsError:
    print("Directory " , dirName ,  " already exists.")
    
#Abre o csv
dataset = pd.read_csv("pokemons.csv")

#Pega o ultimo pokémon baseado no arquivo csv
ULTIMO_POKEMON = dataset.shape[0]

#Definindo a primeira coluna como o identificador de cada pokémon
#dataset.set_index("Id", inplace = True)

for i in range (PRIMEIRO_POKEMON, ULTIMO_POKEMON + 1):
    data = dataset.iloc[i-1:i].to_json(orient = "records").replace("[", "").replace("]", "")
    id = str(i)
    with open("api/" + id, "w") as file:
        file.write(data)
    print(id + " generated.")

#salva os dados numa string
data = dataset[["Id", "Name"]].to_json(orient = "records").replace("[", "").replace("]", "")
data = "{[" + data + "]}"

#salva a string no arquivo
with open("api/pokemons", "w") as file:
    file.write(data)

with open("api/index", "w") as file:
    file.write(data)

print("API generated.")
