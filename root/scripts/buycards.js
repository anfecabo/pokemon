//Variable para aumentar el número de cartas
let offset = 0;
//Define el lugar donde se pintaran las cartas en el HTML
const containercard =  document.querySelector(".container-card");

//Consulta la API, crea Json y proporciona los datos para crear la carta
async function fetchPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    createcard(data);
}
//Recorre los ID de pokemon para pintarlos uno por uno con un límite de 20
async function fetchPokemons(){
    const from = 1 + offset;
    const to = 20 + offset;
    for (let i = from; i <= to; i++){
        await fetchPokemon(i);
    }
}
//Cuenta cuantas cartas hay en pantalla
function numberOfCards(){
    const numCards = document.querySelectorAll('.pokemon-block').length
    const cantidad = document.querySelector('.morec');
    cantidad.textContent = `${numCards} cards`;
}
//crea plantilla para las cartas y al final muestra la cantidad
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

    numberOfCards();
}
// Agrega 20 cartas a la función fetchpokemos
function addMoreCards(){
    offset += 20;
    fetchPokemons();
}
//Configura el botón ver mas y al final llama a la función fetchpokemos para agregar las cartas.
(async () => {
    const btnMore = document.querySelector('#showMore');
    btnMore.addEventListener('click', addMoreCards);

    await fetchPokemons();
})();

//modo oscuro

function toggleTheme(){
    document.body.classList.toggle('dark');
    document.getElementById("titulo").classList.toggle('color');
}