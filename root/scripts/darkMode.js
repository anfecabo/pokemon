//Almacena en localstorage el valor dark y reemplaza las clases de los párrafos p1
function darkMode() {
  if (localStorage.getItem("dark") === "dark") {
    document.body.classList.add("dark");
    document.getElementById("light").classList.replace("p1", "light");
    document.querySelector(".btndm").innerText = "Light Mode";
  } else {
    document.getElementById("light").classList.replace("light", "p1");
    localStorage.removeItem("dark");
    document.querySelector(".btndm").innerText = "Dark Mode";
  }
}
//Botón Dark Mode, cambia nombre ar dar click y reemplaza las clases de los párrafos p1
function toggleTheme() {
  document.body.classList.toggle("dark");
  const colorf = document.querySelector("body");
  if (colorf.classList == "dark") {
    localStorage.setItem("dark", "dark");
    document.getElementById("light").classList.replace("p1", "light");
    document.querySelector(".btndm").innerText = "Light Mode";
  } else {
    localStorage.removeItem("dark");
    document.getElementById("light").classList.replace("light", "p1");
    document.querySelector(".btndm").innerText = "Dark Mode";
  }
}
