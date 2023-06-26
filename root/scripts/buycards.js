const containercard =  document.querySelector(".container-card");


function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        createcard(data);
        console.log(data);
    });
    
    
}
function fetchPokemons(number){
    for (let i = 1; i <= number; i++){
        fetchPokemon(i);
    }
}

function createcard(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-div');

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    const sprite =document.createElement('img');
    sprite.classList.add('imagen')
    sprite.src = pokemon.sprites.other.dream_world.front_default
    spriteContainer.appendChild(sprite);

    const experience = document.createElement('p');
    experience.classList.add('exp');
    experience.textContent = pokemon.base_experience

    /*const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;*/

    const expcontainer = document.createElement('div');
    expcontainer.classList.add('exp');

    card.appendChild(name);
    card.appendChild(spriteContainer);
    /*card.appendChild(number);*/
    card.appendChild(experience);

    containercard.appendChild(card);
}
fetchPokemons(16);
