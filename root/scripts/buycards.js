const containercard =  document.querySelector(".container-card");


// function fetchPokemon(id){
//     console.log(id);
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(res => res.json())
//     .then(data => {
//         createcard(data);
//         console.log(data);
//     });
// }
async function fetchPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
    createcard(data);
}

async function fetchPokemons(number){
    for (let i = 1; i <= number; i++){
        await fetchPokemon(i);
    }
}

// function fetchPokemons(number) {
//   for (let i = 1; i <= number; i++) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//     .then(res => res.json())
//     .then(res => createcard(res));
//   }
// }

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

    const cardftt = document.createElement('div');
    cardftt.classList.add('cardftt');
    
    const experience = document.createElement('p');
    experience.classList.add('exp');
    experience.textContent = pokemon.base_experience

    const btnbuy = document.createElement('button');
    btnbuy.classList.add('buy');
    btnbuy.innerText ='Buy'
  
    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const expcontainer = document.createElement('div');
    expcontainer.classList.add('exp');

    card.appendChild(name);
    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(cardftt);
    cardftt.appendChild(experience);
    cardftt.appendChild(btnbuy);
    containercard.appendChild(card);
}
fetchPokemons(8);
