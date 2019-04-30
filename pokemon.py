import urllib.request

PRIMEIRO_POKEMON = 1
ULTIMO_POKEMON = 809

for x in range (PRIMEIRO_POKEMON, ULTIMO_POKEMON + 1):
	if x < 10:
		urllib.request.urlretrieve("https://assets.pokemon.com/assets/cms2/img/pokedex/full/00" + str(x) + ".png", "00" + str(x) + ".jpg")
	elif x < 100:
		urllib.request.urlretrieve("https://assets.pokemon.com/assets/cms2/img/pokedex/full/0" + str(x) + ".png", "0" + str(x) + ".jpg")
	else:
		urllib.request.urlretrieve("https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + str(x) + ".png", str(x) + ".jpg")
	print(str(x) + " downloaded." )
else:
	print("End.")