
function toggleTheme(){
    document.body.classList.toggle('dark');
    document.getElementById("light").classList.toggle("p1");
    document.getElementById("light").classList.toggle("light");
    localStorage.setItem("dark", "dark");
}
