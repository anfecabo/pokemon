const containercard =  document.querySelector(".container-card");
async function fetchPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    createcard(data);
}

async function fetchPokemons(number){
    for (let i = 1; i <= number; i++){
        await fetchPokemon(i);
    }
}

function numberOfCards(){
    const numCards = document.querySelectorAll('.pokemon-block').length
    const cantidad = document.querySelector('.morec');
    cantidad.textContent = `${numCards} cards`;
    //const bttMore = document.getElementById('showMore').addEventListener('click',fetchpokemons());
}

function moreCards(){
    fetchPokemons+numCards
}

function createcard(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-div');

    const title = document.createElement('div');
    title.classList.add('ttldiv');

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    const heart = document.createElement('icon');
    heart.classList.add('heart')

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
  
    //const number = document.createElement('p');
    //number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const expcontainer = document.createElement('div');
    expcontainer.classList.add('exp');

    card.appendChild(title);
    title.appendChild(name);
    title.appendChild(heart);
    card.appendChild(spriteContainer);
    //card.appendChild(number);bvgh
    card.appendChild(cardftt);
    cardftt.appendChild(experience);
    cardftt.appendChild(btnbuy);
    containercard.appendChild(card);

}

(async () => {
    await fetchPokemons(20);
    numberOfCards();
})();


