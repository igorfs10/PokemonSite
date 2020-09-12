use std::env;
use std::fs::create_dir_all;

use photon_rs::PhotonImage;
use photon_rs::transform;
use photon_rs::native::save_image;

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

    let cliente = reqwest::blocking::Client::new();

    match create_dir_all(&caminho_imagens) {
        Ok(_) => {
            pokemons.into_iter().for_each(|id| {
                let pokemon_id = format!("{:03}", id);
                let url_pokemon = format!("{}{}.png", URL, pokemon_id);

                let resp = cliente.get(&url_pokemon).send().expect("Erro ao baixar o arquivo.");

                let bytes = resp.bytes().unwrap().to_vec();
                let mut imagem = PhotonImage::new_from_byteslice(bytes);

                imagem = transform::resize(&imagem, COMPRIMENTO, ALTURA, transform::SamplingFilter::Lanczos3);

                let caminho_salvar = format!("{}/{}.png", caminho_imagens, id);

                save_image(imagem, &caminho_salvar);

                println!("{} baixado.", id);
            });
            println!("Fim.");
        }
        Err(_) => {
            println!("Não foi possível criar a pasta.");
        }
    }
}
