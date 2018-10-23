--Declarations here
frames = 0
--Começo dos dados dos pokemons no emerald
DATA_POKEMON_1 = 0x020244EC
--Espécie dos pokemons em ordem
ESPECIE_POKEMON_1 = DATA_POKEMON_1 + 32
ESPECIE_POKEMON_2 = ESPECIE_POKEMON_1 + 100
ESPECIE_POKEMON_3 = ESPECIE_POKEMON_2 + 100
ESPECIE_POKEMON_4 = ESPECIE_POKEMON_3 + 100
ESPECIE_POKEMON_5 = ESPECIE_POKEMON_4 + 100
ESPECIE_POKEMON_6 = ESPECIE_POKEMON_5 + 100
--Atualiza os dados após a quantidade de frames escolhidas
FRAMES_ATUALIZAR = 15

function getPokemonId(id)
	--Pokémon com ids diferentes da dex
	if id == 277 then return 252 end
	if id == 278 then return 253 end
	if id == 279 then return 254 end
	if id == 280 then return 255 end
	if id == 281 then return 256 end
	if id == 282 then return 257 end
	if id == 283 then return 258 end
	if id == 284 then return 259 end
	if id == 285 then return 260 end
	if id == 286 then return 261 end
	if id == 287 then return 262 end
	if id == 288 then return 263 end
	if id == 289 then return 264 end
	if id == 290 then return 265 end
	if id == 291 then return 266 end
	if id == 292 then return 267 end
	if id == 293 then return 268 end
	if id == 294 then return 269 end
	if id == 295 then return 270 end
	if id == 296 then return 271 end
	if id == 297 then return 272 end
	if id == 298 then return 273 end
	if id == 299 then return 274 end
	if id == 300 then return 275 end
	if id == 301 then return 290 end
	if id == 302 then return 291 end
	if id == 303 then return 292 end
	if id == 304 then return 276 end
	if id == 305 then return 277 end
	if id == 306 then return 285 end
	if id == 307 then return 286 end
	if id == 308 then return 287 end
	if id == 309 then return 278 end
	if id == 310 then return 279 end
	if id == 311 then return 283 end
	if id == 212 then return 284 end
	if id == 313 then return 320 end
	if id == 314 then return 321 end
	if id == 315 then return 300 end
	if id == 316 then return 301 end
	if id == 317 then return 352 end
	if id == 318 then return 343 end
	if id == 319 then return 344 end
	if id == 320 then return 299 end
	if id == 321 then return 324 end
	if id == 322 then return 302 end
	if id == 323 then return 339 end
	if id == 324 then return 340 end
	if id == 325 then return 370 end
	if id == 326 then return 341 end
	if id == 327 then return 342 end
	if id == 328 then return 349 end
	if id == 329 then return 350 end
	if id == 330 then return 318 end
	if id == 331 then return 319 end
	if id == 332 then return 328 end
	if id == 333 then return 329 end
	if id == 334 then return 330 end
	if id == 335 then return 296 end
	if id == 336 then return 297 end
	if id == 337 then return 309 end
	if id == 338 then return 310 end
	if id == 339 then return 322 end
	if id == 340 then return 323 end
	if id == 341 then return 363 end
	if id == 342 then return 364 end
	if id == 343 then return 365 end
	if id == 344 then return 331 end
	if id == 345 then return 332 end
	if id == 346 then return 361 end
	if id == 347 then return 362 end
	if id == 348 then return 337 end
	if id == 349 then return 338 end
	if id == 350 then return 298 end
	if id == 351 then return 325 end
	if id == 352 then return 326 end
	if id == 353 then return 311 end
	if id == 354 then return 312 end
	if id == 355 then return 303 end
	if id == 356 then return 308 end
	if id == 357 then return 309 end
	if id == 358 then return 333 end
	if id == 359 then return 334 end
	if id == 360 then return 360 end
	if id == 361 then return 355 end
	if id == 362 then return 356 end
	if id == 363 then return 315 end
	if id == 364 then return 287 end
	if id == 365 then return 288 end
	if id == 366 then return 289 end
	if id == 367 then return 316 end
	if id == 368 then return 317 end
	if id == 369 then return 357 end
	if id == 370 then return 293 end
	if id == 371 then return 294 end
	if id == 372 then return 295 end
	if id == 373 then return 366 end
	if id == 374 then return 367 end
	if id == 375 then return 368 end
	if id == 376 then return 359 end
	if id == 377 then return 353 end
	if id == 378 then return 354 end
	if id == 379 then return 336 end
	if id == 380 then return 335 end
	if id == 381 then return 369 end
	if id == 382 then return 304 end
	if id == 383 then return 305 end
	if id == 384 then return 306 end
	if id == 385 then return 351 end
	if id == 386 then return 313 end
	if id == 387 then return 314 end
	if id == 388 then return 345 end
	if id == 389 then return 346 end
	if id == 390 then return 347 end
	if id == 391 then return 348 end
	if id == 392 then return 280 end
	if id == 393 then return 281 end
	if id == 394 then return 282 end
	if id == 395 then return 371 end
	if id == 396 then return 372 end
	if id == 397 then return 373 end
	if id == 398 then return 374 end
	if id == 399 then return 375 end
	if id == 400 then return 376 end
	if id == 401 then return 377 end
	if id == 402 then return 378 end
	if id == 403 then return 379 end
	if id == 404 then return 382 end
	if id == 405 then return 383 end
	if id == 406 then return 384 end
	if id == 407 then return 380 end
	if id == 408 then return 381 end
	if id == 409 then return 385 end
	if id == 410 then return 386 end
	if id == 411 then return 358 end
	if id == 412 then return 387 end
	if id >= 413 and id <= 439 then return 201
	else return id end
end

--Função executada a cada frame
function fn()
	--Atualiza a quantidade de frames passa
	frames = frames + 1
	if frames%FRAMES_ATUALIZAR == 0 then
		pokemon1 = memory.readwordsigned(ESPECIE_POKEMON_1)
		pokemon2 = memory.readwordsigned(ESPECIE_POKEMON_2)
		pokemon3 = memory.readwordsigned(ESPECIE_POKEMON_3)
		pokemon4 = memory.readwordsigned(ESPECIE_POKEMON_4)
		pokemon5 = memory.readwordsigned(ESPECIE_POKEMON_5)
		pokemon6 = memory.readwordsigned(ESPECIE_POKEMON_6)
		
		p1 = getPokemonId(pokemon1)
		p2 = getPokemonId(pokemon2)
		p3 = getPokemonId(pokemon3)
		p4 = getPokemonId(pokemon4)
		p5 = getPokemonId(pokemon5)
		p6 = getPokemonId(pokemon6)
		
		print(p1)
		print(p2)
		print(p3)
		print(p4)
		print(p5)
		print(pokemon6)
		
		local file = io.open("pokemonatual.js", "w+")
		file:write("pokemon1 = " .. p1 .. ";\n")
		file:write("pokemon2 = " .. p2 .. ";\n")
		file:write("pokemon3 = " .. p3 .. ";\n")
		file:write("pokemon4 = " .. p4 .. ";\n")
		file:write("pokemon5 = " .. p5 .. ";\n")
		file:write("pokemon6 = " .. p6 .. ";")
		file:close()
	end
end
gui.register(fn)