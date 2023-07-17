//Variable para aumentar el número de cartas
let offset = 0;
let data = [];
//Define el lugar donde se pintaran las cartas en el HTML

//Consulta la API, crea Json y proporciona los datos para crear la carta
async function fetchPokemon(id) {
    data = [];
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
     data = await res.json();
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

async function fetchPokemonByType(type){
    data = [];
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    data = await res.json();
    fetchPokemonsType(data.pokemon);
}
async function fetchPokemonsType(data){
const max = data.length;
const from = 1 + offset;
let to = 20 + offset;
if (to > max){
    to = max;
}
for (let i = from; i <= to; i++){
data[i-1].pokemon.name
    await fetchPokemon(data[i-1].pokemon.name);
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
    if (pokemon.sprites.other.dream_world.front_default == null){
        sprite.src = pokemon.sprites.front_default
    }
    else{
        sprite.src = pokemon.sprites.other.dream_world.front_default
    }
    
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
    const containercard =  document.querySelector(".container-card");

    containercard.appendChild(card);

    numberOfCards();
}
// Agrega 20 cartas a la función fetchpokemos y discrimina por tipos
function addMoreCards(){
    offset += 20;
    if (document.getElementById("l1").classList == 'active'){
        fetchPokemons();
    }
    else{
        if (document.getElementById("l2").classList == 'active'){
        fetchPokemonByType(3);
        }
        if (document.getElementById("l3").classList == 'active'){
            fetchPokemonByType(10);
        }
        if (document.getElementById("l4").classList == 'active'){
            fetchPokemonByType(11);
            }
    }
}
//Configura el botón ver mas y al final llama a la función fetchpokemos para agregar las cartas.
(async () => {
    const btnMore = document.querySelector('#showMore');
    btnMore.addEventListener('click', addMoreCards);

    await fetchPokemons();
})();


//modo oscuro

function toggleTheme(){
    //console.log(localStorage.setItem('dark', 'dark'))
    document.body.classList.toggle('dark');
    document.getElementById("titulo").classList.toggle('color');
    if ()
}   

//Cambia la clase de los botones que se usan para el  filtro por tipos, lipia la plantilla y llama los pokémon del tipo seleccionado
document.getElementById("all").addEventListener('click', function(ev) {
    document.getElementById("l1").classList.add('active');
    document.getElementById("l2").classList.remove('active');
    document.getElementById("l3").classList.remove('active');
    document.getElementById("l4").classList.remove('active');
    offset = 0;
    let containercard = document.getElementById('container-card');
    containercard.remove();
    containercard = document.createElement('article');
    containercard.classList.add('container-card');
    containercard.setAttribute("id", "container-card");
    document.getElementById('main').appendChild(containercard);
    fetchPokemons();
}, false);

document.getElementById("air").addEventListener('click', function(ev) {
    document.getElementById("l1").classList.remove('active');
    document.getElementById("l2").classList.add('active');
    document.getElementById("l3").classList.remove('active');
    document.getElementById("l4").classList.remove('active');
    offset = 0;
    let containercard = document.getElementById('container-card');
    containercard.remove();
    containercard = document.createElement('article');
    containercard.classList.add('container-card');
    containercard.setAttribute("id", "container-card");
    document.getElementById('main').appendChild(containercard);
    fetchPokemonByType(3);
}, false);

document.getElementById("fire").addEventListener('click', function(ev) {
    document.getElementById("l1").classList.remove('active');
    document.getElementById("l2").classList.remove('active');
    document.getElementById("l3").classList.add('active');
    document.getElementById("l4").classList.remove('active');
    offset = 0;
    let containercard = document.getElementById('container-card');
    containercard.remove();
    containercard = document.createElement('article');
    containercard.classList.add('container-card');
    containercard.setAttribute("id", "container-card");
    document.getElementById('main').appendChild(containercard);
    fetchPokemonByType(10);
}, false);

document.getElementById("water").addEventListener('click', function(ev) {
    document.getElementById("l1").classList.remove('active');
    document.getElementById("l2").classList.remove('active');
    document.getElementById("l3").classList.remove('active');
    document.getElementById("l4").classList.add('active');
    offset = 0;
    let containercard = document.getElementById('container-card');
    containercard.remove();
    containercard = document.createElement('article');
    containercard.classList.add('container-card');
    containercard.setAttribute("id", "container-card");
    document.getElementById('main').appendChild(containercard);
    fetchPokemonByType(11);
}, false);

