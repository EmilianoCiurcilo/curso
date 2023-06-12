const comprar = document.getElementById("comprar");
const ventana_emergente = document.getElementById('ventana_emergente');
const cancelar = document.getElementById('cancelar');
const continuar = document.getElementById('continuar');
const ventana_emergente2 = document.getElementById('ventana_emergente2');

comprar.addEventListener("click", () => {
    ventana_emergente.classList.add("ver");
})
cancelar.addEventListener("click", () => {
    ventana_emergente.classList.remove("ver");
})
ventana_emergente.addEventListener("click", () => {
    ventana_emergente.classList.remove("ver");
})
// continuar.addEventListener("click", () => {
//     ventana_emergente2.classList.add("ver2");
// })
// cancelar.addEventListener("click", () => {
// ventana_emergente2.classList.remove("ver2");
// }) 
