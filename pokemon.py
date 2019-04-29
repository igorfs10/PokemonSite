import urllib.request

for x in range (1, 810):
	if x < 10:
		urllib.request.urlretrieve("https://assets.pokemon.com/assets/cms2/img/pokedex/full/00" + str(x) + ".png", "00" + str(x) + ".jpg")
	elif x < 100:
		urllib.request.urlretrieve("https://assets.pokemon.com/assets/cms2/img/pokedex/full/0" + str(x) + ".png", "0" + str(x) + ".jpg")
	else:
		urllib.request.urlretrieve("https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + str(x) + ".png", str(x) + ".jpg")
	print(str(x) + " downloaded." )
else:
print("End.")