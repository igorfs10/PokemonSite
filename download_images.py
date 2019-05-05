import requests
from PIL import Image

#Constantes com quantidades de pokémons
PRIMEIRO_POKEMON = 1
ULTIMO_POKEMON = 809

#Tamando da imagem baixada
COMPRIMENTO = 250
ALTURA = 250
TAMANHO = (COMPRIMENTO, ALTURA)
TIPO_REDIMENSIONAMENTO = Image.BICUBIC

#Url de onde o script baixa os dados
URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"

#Inicia a sessão e mantém para que a conexão não seja fechaa a cada download
session = requests.Session()

#Executa um loop que vai baixar do primeiro ao ultimo pokémon
for i in range (PRIMEIRO_POKEMON, ULTIMO_POKEMON + 1):
	
	#Use o id com três casas decimais para salvar os arquivos
	id = str(i).zfill(3)

	#Gera o nome do arquivo com o diretório para salvar
	file = "images/" + id + ".png"

	#Baixa a imagem do site
	result = session.get(URL + id + ".png")
	#Salva o arquivo no computador
	open("images/" + i + ".png", "wb").write(result.content)

	#Abre a imagem para redimensionar
	img = Image.open(file)
	#Redimensiona a imagem
	img = img.resize(TAMANHO, resample = TIPO_REDIMENSIONAMENTO)
	#Salva a imagem redimensionada
	img.save(file, optimize = True)

	#Mostra uma mensagem depois de baixar cada imagem
	print(id + " downloaded." )
else:
	#Mostra uma mensagem depois que acaba
	print("End.")