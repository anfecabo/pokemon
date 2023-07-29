//Variable para aumentar el número de cartas
let offset = 0;
let data = [];
let fav = [];

//Consulta la API, crea Json y proporciona los datos para crear la carta
async function fetchPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  data = await res.json();
  //  console.log(data);
  createcard(data);
}

//Recorre los ID de pokemon para pintarlos uno por uno con un límite de 20
async function fetchPokemons() {
  const from = 1 + offset;
  const to = 20 + offset;
  for (let i = from; i <= to; i++) {
    await fetchPokemon(i);
  }
}
//Identifica los Pokémons po tipo y permite que el botón "Agregar mas" agregue del mismo tipo consultado.
async function fetchPokemonByType(type) {
  data = [];
  const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  data = await res.json();
  fetchPokemonsType(data.pokemon);
}
async function fetchPokemonsType(data) {
  const max = data.length;
  console.log(data);
  const from = 1 + offset;
  let to = 20 + offset;
  if (to > max) {
    to = max;
  }
  for (let i = from; i <= to; i++) {
    data[i - 1].pokemon.name;
    await fetchPokemon(data[i - 1].pokemon.name);
  }
}
//Muestra cuantas cartas hay en pantalla
function numberOfCards() {
  const numCards = document.querySelectorAll(".pokemon-block").length;
  const cantidad = document.querySelector(".morec");
  cantidad.textContent = `${numCards} cards`;
}
//crea plantilla para las cartas y al final muestra la cantidad
function createcard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-div");

  const title = document.createElement("div");
  title.classList.add("ttldiv");

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  const heart = document.createElement("div");
  heart.classList.add("root");
  if (pokemon.id == fav.filter((fav) => fav == pokemon.id)) {
    heart.innerHTML = `
    <label id="cbx${pokemon.id.toString()}" onclick="hiden(${pokemon.id.toString()})">
      <span class="heart" >
        <svg class="unchecked hiden" id="unchecked${pokemon.id.toString()}" viewBox="0 0 24 24">
          <path 
            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
          ></path>
        </svg>
        <svg class="checked" id="checked${pokemon.id.toString()}"  viewBox="0 0 24 24">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          ></path>
        </svg>
      </span>
    </label>`;
  } else {
    heart.innerHTML = `
    <label id="cbx${pokemon.id.toString()}" onclick="hiden(${pokemon.id.toString()})">
      <span class="heart" >
        <svg class="unchecked" id="unchecked${pokemon.id.toString()}" viewBox="0 0 24 24">
          <path 
            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
          ></path>
        </svg>
        <svg class="checked hiden" id="checked${pokemon.id.toString()}"  viewBox="0 0 24 24">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          ></path>
        </svg>
      </span>
    </label>`;
  }

  const sprite = document.createElement("img");
  sprite.classList.add("imagen");
  sprite.src = pokemon.sprites.other["official-artwork"].front_default;
  spriteContainer.appendChild(sprite);

  const cardftt = document.createElement("div");
  cardftt.classList.add("cardftt");

  const experience = document.createElement("p");
  experience.classList.add("exp");
  experience.textContent = "Exp:" + pokemon.base_experience;

  const btnbuy = document.createElement("button");
  btnbuy.classList.add("buy");
  btnbuy.innerText = "Buy";

  //const number = document.createElement('p');
  //number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const expcontainer = document.createElement("div");
  expcontainer.classList.add("exp");

  card.appendChild(title);
  title.appendChild(name);
  title.appendChild(heart);
  card.appendChild(spriteContainer);
  //card.appendChild(number);
  card.appendChild(cardftt);
  cardftt.appendChild(experience);
  cardftt.appendChild(btnbuy);
  const containercard = document.querySelector(".container-card");

  containercard.appendChild(card);

  numberOfCards();
}

// Agrega 20 cartas a la función fetchpokemos y discrimina por tipos
function addMoreCards() {
  offset += 20;
  if (document.getElementById("l1").classList == "active") {
    fetchPokemons();
  } else {
    if (document.getElementById("l2").classList == "active") {
      fetchPokemonByType(3);
    }
    if (document.getElementById("l3").classList == "active") {
      fetchPokemonByType(10);
    }
    if (document.getElementById("l4").classList == "active") {
      fetchPokemonByType(11);
    }
  }
}
//Configura el botón ver mas y al final llama a la función fetchpokemos para agregar las cartas.
(async () => {
  const btnMore = document.querySelector("#showMore");
  btnMore.addEventListener("click", addMoreCards);

  await fetchPokemons();
})();

//Cambia la clase de los botones que se usan para el  filtro por tipos, lipia la plantilla y llama los pokémon del tipo seleccionado
document.getElementById("all").addEventListener(
  "click",
  function (ev) {
    document.getElementById("l1").classList.add("active");
    document.getElementById("l2").classList.remove("active");
    document.getElementById("l3").classList.remove("active");
    document.getElementById("l4").classList.remove("active");
    document.getElementById("l5").classList.remove("active");
    offset = 0;
    let containercard = document.getElementById("container-card");
    containercard.remove();
    containercard = document.createElement("article");
    containercard.classList.add("container-card");
    containercard.setAttribute("id", "container-card");
    document.getElementById("main").appendChild(containercard);
    fetchPokemons();
  },
  false
);

document.getElementById("air").addEventListener(
  "click",
  function (ev) {
    document.getElementById("l1").classList.remove("active");
    document.getElementById("l2").classList.add("active");
    document.getElementById("l3").classList.remove("active");
    document.getElementById("l4").classList.remove("active");
    document.getElementById("l5").classList.remove("active");
    offset = 0;
    let containercard = document.getElementById("container-card");
    containercard.remove();
    containercard = document.createElement("article");
    containercard.classList.add("container-card");
    containercard.setAttribute("id", "container-card");
    document.getElementById("main").appendChild(containercard);
    fetchPokemonByType(3);
  },
  false
);

document.getElementById("fire").addEventListener(
  "click",
  function (ev) {
    document.getElementById("l1").classList.remove("active");
    document.getElementById("l2").classList.remove("active");
    document.getElementById("l3").classList.add("active");
    document.getElementById("l4").classList.remove("active");
    document.getElementById("l5").classList.remove("active");
    offset = 0;
    let containercard = document.getElementById("container-card");
    containercard.remove();
    containercard = document.createElement("article");
    containercard.classList.add("container-card");
    containercard.setAttribute("id", "container-card");
    document.getElementById("main").appendChild(containercard);
    fetchPokemonByType(10);
  },
  false
);

document.getElementById("water").addEventListener(
  "click",
  function (ev) {
    document.getElementById("l1").classList.remove("active");
    document.getElementById("l2").classList.remove("active");
    document.getElementById("l3").classList.remove("active");
    document.getElementById("l4").classList.add("active");
    document.getElementById("l5").classList.remove("active");
    offset = 0;
    let containercard = document.getElementById("container-card");
    containercard.remove();
    containercard = document.createElement("article");
    containercard.classList.add("container-card");
    containercard.setAttribute("id", "container-card");
    document.getElementById("main").appendChild(containercard);
    fetchPokemonByType(11);
  },
  false
);

document.getElementById("favoritos").addEventListener(
  "click",
  function (ev) {
    document.getElementById("l1").classList.remove("active");
    document.getElementById("l2").classList.remove("active");
    document.getElementById("l3").classList.remove("active");
    document.getElementById("l4").classList.remove("active");
    document.getElementById("l5").classList.add("active");
    offset = 0;
    let containercard = document.getElementById("container-card");
    containercard.remove();
    containercard = document.createElement("article");
    containercard.classList.add("container-card");
    containercard.setAttribute("id", "container-card");
    document.getElementById("main").appendChild(containercard);
    fetchFav(fav);
  },
  false
);

//
async function fetchFav(favoritos) {
  await favoritos.forEach((element) => {
    fetchPokemon(element);
  });
}

//Al dar clic en el boton favoritos, cambia la clase del SVG para ocultar o mostrar el color. además crea una lista de los pokemon seleccionados.
function hiden(id) {
  document.getElementById("unchecked" + id).classList.toggle("hiden");
  document.getElementById("checked" + id).classList.toggle("hiden");
  if (
    document.getElementById("unchecked" + id).classList == "unchecked hiden"
  ) {
    fav.push(id);
    fav = fav.sort(function (a, b) {
      return a - b;
    });
  } else {
    fav = fav.filter((fav) => fav != id);
    fav = fav.sort(function (a, b) {
      return a - b;
    });
  }
  console.log(fav);
}

//Ir arriba
buttonUp = document.getElementById("goUp");

buttonUp.addEventListener("click", scrollUp);

function scrollUp(bu) {
  const courrentScroll = document.documentElement.scrollTop;
  if (courrentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, courrentScroll - courrentScroll / 10);
  }
}
let scroll = 0;
let scrollold = 0;

window.onscroll = function (ec) {
  scroll = document.documentElement.scrollTop;
  if (scrollold > scroll) {
    scrollold = scroll;
    if (scroll > 252) {
      buttonUp.style.display = "block";
    } else {
      buttonUp.style.display = "none";
    }
  } else {
    scrollold = scroll;
  }
};
