import pandas as pd
import numpy as np
import json

PRIMEIRO_POKEMON = 1
ULTIMO_POKEMON = 807

#Abre o csv
dataset = pd.read_csv("pokemons.csv")

#Definindo a primeira coluna como o identificador de cada pokémon
dataset.set_index("Id", inplace = True)

#salva os dados numa string
data = dataset.iloc[PRIMEIRO_POKEMON-1:ULTIMO_POKEMON+1].to_json(orient = "records").replace("[", "").replace("]", "")

#salva a string no arquivo
with open("api/pokemons.json", "w") as file:
    file.write(data)