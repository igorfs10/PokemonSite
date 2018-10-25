-- Based on the gen 3 Lua script by FractalFusion
-- Modified by EverOddish for automatic image updates
local game=2 --see below
local startvalue=0x83ED --insert the first value of RNG

-- It is not necessary to change anything beyond this point.

--for different display modes
local status=1
local substatus={1,1,1}

local tabl={}
local prev={}

local xfix=0 --x position of display handle
local yfix=65 --y position of display handle

local xfix2=105 --x position of 2nd handle
local yfix2=0 --y position of 2nd handle

local k 

local new_party = ""
 
local last_check = 0
local last_party = {}
--Fill last party to compare after
for slot = 1, 6 do
	party_member = {}
	party_member["id"] = ""
	party_member["species"] = 500
	last_party[slot] = party_member
end
	
local last_levels = {-1, -1, -1, -1, -1, -1}

--for different game versions
--1: Ruby/Sapphire U
--2: Emerald U
--3: FireRed/LeafGreen U
--4: Ruby/Sapphire J
--5: Emerald J (TODO)
--6: FireRed/LeafGreen J (1360)

local gamename={"Ruby/Sapphire U", "Emerald U", "FireRed/LeafGreen U", "Ruby/Sapphire J", "Emerald J", "FireRed/LeafGreen J (1360)"}

--game dependent

local pstats={0x3004360, 0x20244EC, 0x2024284, 0x3004290, 0x2024190, 0x20241E4}
local estats={0x30045C0, 0x2024744, 0x202402C, 0x30044F0, 0x0000000, 0x2023F8C}
local rng   ={0x3004818, 0x3005D80, 0x3005000, 0x3004748, 0x0000000, 0x3005040} --0X3004FA0
local rng2  ={0x0000000, 0x0000000, 0x20386D0, 0x0000000, 0x0000000, 0x203861C}


--HP, Atk, Def, Spd, SpAtk, SpDef
local statcolor = {"yellow", "red", "blue", "green", "magenta", "cyan"}

dofile "auto_layout_gen3_tables.lua"

local flag=0
local last=0
local counter=0

local bnd,br,bxr=bit.band,bit.bor,bit.bxor
local rshift, lshift=bit.rshift, bit.lshift
local mdword=memory.readdwordunsigned
local mword=memory.readwordunsigned
local mbyte=memory.readbyteunsigned

local natureorder={"Atk","Def","Spd","SpAtk","SpDef"}
local naturename={
 "Hardy","Lonely","Brave","Adamant","Naughty",
 "Bold","Docile","Relaxed","Impish","Lax",
 "Timid","Hasty","Serious","Jolly","Naive",
 "Modest","Mild","Quiet","Bashful","Rash",
 "Calm","Gentle","Sassy","Careful","Quirky"}
local typeorder={
 "Fighting","Flying","Poison","Ground",
 "Rock","Bug","Ghost","Steel",
 "Fire","Water","Grass","Electric",
 "Psychic","Ice","Dragon","Dark"}

--a 32-bit, b bit position bottom, d size
function getbits(a,b,d)
 return rshift(a,b)%lshift(1,d)
end

--for RNG purposes
function gettop(a)
 return(rshift(a,16))
end


--does 32-bit multiplication
--necessary because Lua does not allow 32-bit integer definitions
--so one cannot do 32-bit arithmetic
--furthermore, precision loss occurs at around 10^10
--so numbers must be broken into parts
--may be improved using bitop library exclusively
function mult32(a,b)
 local c=rshift(a,16)
 local d=a%0x10000
 local e=rshift(b,16)
 local f=b%0x10000
 local g=(c*f+d*e)%0x10000
 local h=d*f
 local i=g*0x10000+h
 return i
end

--checksum stuff; add halves
function ah(a)
 b=getbits(a,0,16)
 c=getbits(a,16,16)
 return b+c
end

function getPokemonId(id)
	--Pokémon with different ids
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
	if id == 312 then return 284 end
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

--Compare the party and last party of array to see if some change happened
function comparePokemon()
	changed = false
	for slot = 1, 6 do
		if party[slot].species and last_party[slot].species and party[slot].species == last_party[slot].species then
		else
			changed = true
		end
	end
	return changed
end

party = {}
function fn()
--*********
current_time = os.time()
	if current_time - last_check > 0 then

	-- now for display
		if status==1 or status==2 then --status 1 or 2

		   party = {}

		    for slot = 1, 6 do
				if status==1 then
					start=pstats[game]+100*(slot-1)
				else
					start=estats[game]+100*(substatus[2]-1)
				end

				personality=mdword(start)
				trainerid=mdword(start+4)
				magicword=bxr(personality, trainerid)
				
				i=personality%24
				
				growthoffset=(growthtbl[i+1]-1)*12
				attackoffset=(attacktbl[i+1]-1)*12
				effortoffset=(efforttbl[i+1]-1)*12
				miscoffset=(misctbl[i+1]-1)*12
				
				
				growth1=bxr(mdword(start+32+growthoffset),magicword)
				growth2=bxr(mdword(start+32+growthoffset+4),magicword)
				growth3=bxr(mdword(start+32+growthoffset+8),magicword)
				
				attack1=bxr(mdword(start+32+attackoffset),magicword)
				attack2=bxr(mdword(start+32+attackoffset+4),magicword)
				attack3=bxr(mdword(start+32+attackoffset+8),magicword)
				
				effort1=bxr(mdword(start+32+effortoffset),magicword)
				effort2=bxr(mdword(start+32+effortoffset+4),magicword)
				effort3=bxr(mdword(start+32+effortoffset+8),magicword)
				
				misc1=bxr(mdword(start+32+miscoffset),magicword)
				misc2=bxr(mdword(start+32+miscoffset+4),magicword)
				misc3=bxr(mdword(start+32+miscoffset+8),magicword)
				
				cs=ah(growth1)+ah(growth2)+ah(growth3)+ah(attack1)+ah(attack2)+ah(attack3)
				  +ah(effort1)+ah(effort2)+ah(effort3)+ah(misc1)+ah(misc2)+ah(misc3)
				
				cs=cs%65536

				species=getbits(growth1,0,16)

				holditem=getbits(growth1,16,16)

				pokerus=getbits(misc1,0,8)

				ivs=misc2

				evs1=effort1
				evs2=effort2

				hpiv=getbits(ivs,0,5)
				atkiv=getbits(ivs,5,5)
				defiv=getbits(ivs,10,5)
				spdiv=getbits(ivs,15,5)
				spatkiv=getbits(ivs,20,5)
				spdefiv=getbits(ivs,25,5)

				hpev=getbits(evs1, 0, 8)
				atkev=getbits(evs1, 8, 8)
				defev=getbits(evs1, 16, 8)
				spdev=getbits(evs1, 24, 8)
				spatkev=getbits(evs2, 0, 8)
				spdefev=getbits(evs2, 8, 8)

				nature=personality%25
				natinc=math.floor(nature/5)
				natdec=nature%5

				hidpowtype=math.floor(((hpiv%2 + 2*(atkiv%2) + 4*(defiv%2) + 8*(spdiv%2) + 16*(spatkiv%2) + 32*(spdefiv%2))*15)/63)
				hidpowbase=math.floor((( getbits(hpiv,1,1) + 2*getbits(atkiv,1,1) + 4*getbits(defiv,1,1) + 8*getbits(spdiv,1,1) + 16*getbits(spatkiv,1,1) + 32*getbits(spdefiv,1,1))*40)/63 + 30)

				move1=getbits(attack1,0,16)
				move2=getbits(attack1,16,16)
				move3=getbits(attack2,0,16)
				move4=getbits(attack2,16,16)
				pp1=getbits(attack3,0,8)
				pp2=getbits(attack3,8,8)
				pp3=getbits(attack3,16,8)
				pp4=getbits(attack3,24,8)

				movename1=movetbl[move1]
				if movename1==nil then movename1="none" end
				movename2=movetbl[move2]
				if movename2==nil then movename2="none" end
				movename3=movetbl[move3]
				if movename3==nil then movename3="none" end
				movename4=movetbl[move4]
				if movename4==nil then movename4="none" end

				speciesname=pokemontbl[species]
				if speciesname==nil then speciesname="none" end
				level=mbyte(start+84)

				if "none" ~= speciesname then
					party_member = {}
					party_member["id"] = speciesname
					party_member["species"] = species
					--party_member["item"] = holditem
					--party_member["item"] = "none"
					--party_member["ability"] = abilities[ability + 1] 
					--party_member["ability"] = "--"
					--party_member["nature"] = naturename[nature+1]
					--party_member["level"] = level
					--party_member["hiddenpower"] = typeorder[hidpowtype+1]
					--party_member["ivs"] = hpiv .. "/" .. atkiv .. "/" .. defiv .. "/" .. spatkiv .. "/" .. spdefiv .. "/" .. spdiv
					--party_member["evs"] = hpev .. "/" .. atkev .. "/" .. defev .. "/" .. spatkev .. "/" .. spdefev .. "/" .. spdev
					--party_member["evsum"] = hpev + atkev + defev + spatkev + spdefev + spdev
					--party_member["move1"] = movename1
					--party_member["move2"] = movename2
					--party_member["move3"] = movename3
					--party_member["move4"] = movename4

					party[slot] = party_member
					
				--If you dont have pokemon in this slot
				else
					party_member = {}
					party_member["id"] = ""
					party_member["species"] = 0
					--party_member["item"] = holditem
					--party_member["item"] = ""
					--party_member["ability"] = abilities[ability + 1] 
					--party_member["ability"] = ""
					--party_member["nature"] = ""
					--party_member["level"] = ""
					--party_member["hiddenpower"] = ""
					--party_member["ivs"] = ""
					--party_member["evs"] = ""
					--party_member["evsum"] ""
					--party_member["move1"] ""
					--party_member["move2"] ""
					--party_member["move3"] ""
					--party_member["move4"] ""

					party[slot] = party_member
				
				end

				current_hp=mword(start+86)

				--print("slot " .. slot .. " " .. speciesname)
		    end -- for loop slots

		    last_check = current_time
			
			--Check if something has changed and save to JS file to display pokemons in HTML
			if comparePokemon() then
				local file = io.open("pokemonatual.js", "w+")
				for slot = 1, 6 do
					if party[slot] then
						file:write("pokemon".. slot .. " = " .. getPokemonId(party[slot].species) .. ";\n")
					else
						file:write("pokemon".. slot .. " = " .. 0 .. ";\n")
					end
				end
				file:close()
			end
			last_party = party
		end --status 1 or 2
	 
	end
end
    
--*********
gui.register(fn)
