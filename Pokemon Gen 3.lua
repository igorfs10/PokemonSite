require("include")

local bnd,br,bxr=bit.band,bit.bor,bit.bxor
local rshift, lshift=bit.rshift, bit.lshift
local mdword=memory.readdwordunsigned
local mword=memory.readwordunsigned
local mbyte=memory.readbyteunsigned

--Get the las two letters of game id to choose the right game
function getGame()
	letter3 = string.char(mbyte(0x80000ae))
	letter4 = string.char(mbyte(0x80000af))
	--check for Ruby/Sapphire
	if letter3 == "V" or letter3 == "P" then
		if letter4 == "J" then
			--JP Version
			return 4
		else
			return 1
		end
	--check for Emerald
	elseif letter3 == "E" then
		if letter4 == "J" then
			--JP Version
			return 5
		else
			return 2
		end
	else
		if letter4 == "J" then
			--JP Version
			return 6
		else
			return 3
		end
	end
end

-- Based on the gen 3 Lua script by FractalFusion
-- Modified by EverOddish for automatic image updates
local game=getGame() --see below

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
	party_member["name"] = ""
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

--Compare the party and last party of array to see if some change happened
function comparePokemon()
	changed = false
	for slot = 1, 6 do
		if party[slot].species and last_party[slot].species and party[slot].species == last_party[slot].species and party[slot].name and last_party[slot].name and party[slot].name == last_party[slot].name then
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
					if isEgg(start) then
						party_member["species"] = 412
					else
						party_member["species"] = species
					end
					if game > 3 then
						party_member["name"] = ""
					elseif isEgg(start) then
						party_member["name"] = "EGG"
					else
						party_member["name"] = getName(start)
					end
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
					party_member["name"] = ""
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

		    end

		    last_check = current_time
			
			--Check if something has changed and save to JS file to display pokemons in HTML
			if comparePokemon() then
				local file = io.open("pokemonatual.js", "w+")
				for slot = 1, 6 do
					if party[slot] then
						file:write("pokemon[".. slot .. "] = " .. getPokemonId(party[slot].species) .. ";\n")
						file:write("name[".. slot .. "] = '" .. party[slot].name .. "';\n")
					else
						file:write("pokemon[".. slot .. "] = " .. getPokemonId(party[slot].species) .. ";\n")
						file:write("name[".. slot .. "] = '" .. party[slot].name .. "';\n")
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
