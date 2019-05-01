require("include")
--Declarations here
frames = 0
--Começo dos dados dos pokemons no emerald
DATA_POKEMON_1 = 0x020244EC
DATA_POKEMON_2 = DATA_POKEMON_1 + 100
DATA_POKEMON_3 = DATA_POKEMON_2 + 100
DATA_POKEMON_4 = DATA_POKEMON_3 + 100
DATA_POKEMON_5 = DATA_POKEMON_4 + 100
DATA_POKEMON_6 = DATA_POKEMON_5 + 100
--Espécie dos pokemons em ordem
ESPECIE_POKEMON_1 = DATA_POKEMON_1 + 32
ESPECIE_POKEMON_2 = ESPECIE_POKEMON_1 + 100
ESPECIE_POKEMON_3 = ESPECIE_POKEMON_2 + 100
ESPECIE_POKEMON_4 = ESPECIE_POKEMON_3 + 100
ESPECIE_POKEMON_5 = ESPECIE_POKEMON_4 + 100
ESPECIE_POKEMON_6 = ESPECIE_POKEMON_5 + 100


--Atualiza os dados após a quantidade de frames escolhidas
FRAMES_ATUALIZAR = 30

p1 = 0
p2 = 0
p3 = 0
p4 = 0
p5 = 0
p6 = 0

--Função executada a cada frame
function fn()
	--Atualiza a quantidade de frames passa
	frames = frames + 1
	if frames%FRAMES_ATUALIZAR == 0 then
		
		--Coloca os ids dos pokemons para comparar
		p1 = memory.readwordsigned(ESPECIE_POKEMON_1)
		n1 = getName(DATA_POKEMON_1)
		p2 = memory.readwordsigned(ESPECIE_POKEMON_2)
		n2 = getName(DATA_POKEMON_2)
		p3 = memory.readwordsigned(ESPECIE_POKEMON_3)
		n3 = getName(DATA_POKEMON_3)
		p4 = memory.readwordsigned(ESPECIE_POKEMON_4)
		n4 = getName(DATA_POKEMON_4)
		p5 = memory.readwordsigned(ESPECIE_POKEMON_5)
		n5 = getName(DATA_POKEMON_5)
		p6 = memory.readwordsigned(ESPECIE_POKEMON_6)
		n6 = getName(DATA_POKEMON_6)
		
		--Verifica se um pokemon mudou
		if p1 ~= pokemon1 or p2 ~= pokemon2 or p3 ~= pokemon3 or p4 ~= pokemon4 or p5 ~= pokemon5 or p6 ~= pokemon6 or n1 ~= name1 or n2 ~= name2 or n3 ~= name3 or n4 ~= name4 or n5 ~= name5 or n6 ~= name6 then
			--Le os ids que estão na memoria para pegar os pokemons
			pokemon1 = memory.readwordsigned(ESPECIE_POKEMON_1)
			name1 = getName(DATA_POKEMON_1)
			pokemon2 = memory.readwordsigned(ESPECIE_POKEMON_2)
			name2 = getName(DATA_POKEMON_2)
			pokemon3 = memory.readwordsigned(ESPECIE_POKEMON_3)
			name3 = getName(DATA_POKEMON_3)
			pokemon4 = memory.readwordsigned(ESPECIE_POKEMON_4)
			name4 = getName(DATA_POKEMON_4)
			pokemon5 = memory.readwordsigned(ESPECIE_POKEMON_5)
			name5 = getName(DATA_POKEMON_5)
			pokemon6 = memory.readwordsigned(ESPECIE_POKEMON_6)
			name6 = getName(DATA_POKEMON_6)
			
			--Converte os pokemons para o id correto
			if isEgg(DATA_POKEMON_1)then
				p1 = getPokemonId(412)
				n1 = "EGG"
			else
				p1 = getPokemonId(pokemon1)
			end
			if isEgg(DATA_POKEMON_2)then
				p2 = getPokemonId(412)
				n2 = "EGG"
			else
				p2 = getPokemonId(pokemon2)
			end
			if isEgg(DATA_POKEMON_3)then
				p3 = getPokemonId(412)
				n3 = "EGG"
			else
				p3 = getPokemonId(pokemon3)
			end
			if isEgg(DATA_POKEMON_4)then
				p4 = getPokemonId(412)
				n4 = "EGG"
			else
				p4 = getPokemonId(pokemon4)
			end
			if isEgg(DATA_POKEMON_5)then
				p5 = getPokemonId(412)
				n5 = "EGG"
			else
				p5 = getPokemonId(pokemon5)
			end
			if isEgg(DATA_POKEMON_6)then
				p6 = getPokemonId(412)
				n6 = "EGG"
			else
				p6 = getPokemonId(pokemon6)
			end
			
			--Salva no arquivo os pokemons usados para ser lido pelo Javascript
			local file = io.open("pokemonatual.js", "w+")
			file:write("pokemon[1] = " .. p1 .. ";\n")
			file:write("name[1] = '" .. n1 .. "';\n")
			file:write("pokemon[2] = " .. p2 .. ";\n")
			file:write("name[2] = '" .. n2 .. "';\n")
			file:write("pokemon[3] = " .. p3 .. ";\n")
			file:write("name[3] = '" .. n3 .. "';\n")
			file:write("pokemon[4] = " .. p4 .. ";\n")
			file:write("name[4] = '" .. n4 .. "';\n")
			file:write("pokemon[5] = " .. p5 .. ";\n")
			file:write("name[5] = '" .. n5 .. "';\n")
			file:write("pokemon[6] = " .. p6 .. ";\n")
			file:write("name[6] = '" .. n6 .. "';")
			file:close()
		end
	end
end
gui.register(fn)