let currentPokemon;

async function loadPokemon(){
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded Pokemon',currentPokemon);

    renderPokemonInfo();
}

function renderPokemonInfo(){
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('imgPokemon').src = currentPokemon['sprites']['other']['home']['front_default'];
    document.getElementById('pokemonNumber').innerHTML = `<b>Id:</b> #${currentPokemon['id']}`;
    document.getElementById('type-1').innerHTML = `<b>Type:</b> ${currentPokemon['types'][0]['type']['name']}`;
    document.getElementById('height').innerHTML = `<b>Height:</b> ${currentPokemon['height']}ft`;
    document.getElementById('weight').innerHTML = `<b>Weight:</b> ${currentPokemon['weight']}lb`;
    document.getElementById('hp').style = `width:${currentPokemon['stats'][0]['base_stat']}%;background-color: #f44336; border-radius: 10px;`;
    document.getElementById('attack').style = `width:${currentPokemon['stats'][1]['base_stat']}%;background-color: #f44336; border-radius: 10px;`;
    document.getElementById('defense').style = `width:${currentPokemon['stats'][2]['base_stat']}%;background-color: #f44336; border-radius: 10px;`;
    document.getElementById('special-attack').style = `width:${currentPokemon['stats'][3]['base_stat']}%;background-color: #f44336; border-radius: 10px;`;
    document.getElementById('special-defense').style = `width:${currentPokemon['stats'][4]['base_stat']}%;background-color: #f44336; border-radius: 10px;`;
    document.getElementById('speed').style = `width:${currentPokemon['stats'][5]['base_stat']}%;background-color: #f44336; border-radius: 10px;`;
    document.getElementById('hp').innerHTML = `${currentPokemon['stats'][0]['base_stat']}`;
    document.getElementById('attack').innerHTML = `${currentPokemon['stats'][1]['base_stat']}`;
    document.getElementById('defense').innerHTML = `${currentPokemon['stats'][2]['base_stat']}`;
    document.getElementById('special-attack').innerHTML = `${currentPokemon['stats'][3]['base_stat']}`;
    document.getElementById('special-defense').innerHTML = `${currentPokemon['stats'][4]['base_stat']}`;
    document.getElementById('speed').innerHTML = `${currentPokemon['stats'][5]['base_stat']}`;
    
}