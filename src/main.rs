use std::env;
use std::fs::create_dir_all;
use std::io::Read;
use std::path::Path;

use photon_rs::PhotonImage;
use photon_rs::transform;
use photon_rs::native::save_image;
use rayon::prelude::*;
use ureq::Agent;

const PRIMEIRO_POKEMON: u16 = 1;
const ULTIMO_POKEMON: u16 = 893;

const PASTA_POKEMON: &str = "pokemon_images";
const URL: &str = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

const ALTURA: u32 = 500;
const COMPRIMENTO: u32 = 500;

fn main() {
    let programa = env::current_exe().unwrap();
    let caminho_programa = programa.parent().unwrap().to_str().unwrap();
    
    let pokemons = PRIMEIRO_POKEMON ..= ULTIMO_POKEMON;

    let caminho_imagens = format!("{}/{}", caminho_programa, PASTA_POKEMON);

    let cliente = Agent::new().build();

    match create_dir_all(&caminho_imagens) {
        Ok(_) => {
            pokemons.into_par_iter().for_each(|id| {
                let caminho_salvar = format!("{}/{}.png", caminho_imagens, id);
                let full_path = Path::new(&caminho_salvar);
                if full_path.exists() {
                    if full_path.metadata().unwrap().len() > 0 {
                        println!("{} já existe. Ignorando download.", id);
                    }
                    else {
                        baixar_imagem(id, &caminho_salvar, &cliente);
                    }
                    
                } else {
                    baixar_imagem(id, &caminho_salvar, &cliente);
                }

            });
            println!("Fim.");
        }
        Err(_) => {
            println!("Não foi possível criar a pasta.");
        }
    }
}

fn baixar_imagem (id: u16, caminho: &String, cliente: &Agent) {
    let pokemon_id = format!("{:03}", id);
    let url_pokemon = format!("{}{}.png", URL, pokemon_id);
                    
    let resp = cliente.get(&url_pokemon).call();

    let mut reader = resp.into_reader();
    let mut bytes = vec![];
    let _ = reader.read_to_end(&mut bytes);
    let mut imagem = PhotonImage::new_from_byteslice(bytes);

    imagem = transform::resize(&imagem, COMPRIMENTO, ALTURA, transform::SamplingFilter::Lanczos3);

    save_image(imagem, &caminho);

    println!("{} baixado.", id);
}
