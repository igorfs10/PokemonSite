import requests
from PIL import Image

PRIMEIRO_POKEMON = 1
ULTIMO_POKEMON = 809
session = requests.Session()

for i in range (PRIMEIRO_POKEMON, ULTIMO_POKEMON + 1):
	id = str(i).zfill(3)
	file = "images/" + id + ".png"
	result = session.get("https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + id + ".png")
	open(file, "wb").write(result.content)
	img = Image.open(file)
	size = (250 , 250)
	img.thumbnail(size)
	img.save(file)
	print(id + " downloaded." )
else:
	print("End.")