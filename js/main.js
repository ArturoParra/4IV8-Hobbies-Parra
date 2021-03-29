const fila = document.querySelector('.contenedor-carousel');
const hobbies = document.querySelectorAll('.hobbie');
const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');

/* ---- ----- ----- Event listener para la flecha derecha ----- ----- ----- */
flechaderecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

/* ---- ----- ----- Event listener para la flecha izquierda ----- ----- ----- */
flechaizquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

/* ---- ----- ----- Paginacion ----- ----- ----- */

const numeropaginas = Math.ceil(hobbies.length / 5);
for(let i=0; i < numeropaginas; i++){
    const indicador = document.createElement('button');

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
    });
}

/* ---- ----- ----- Hover ----- ----- ----- */

hobbies.forEach((hobbie) => {
    hobbie.addEventListener('mouseenter', (e) =>{
        const elemento = e.currentTarget;
        setTimeout(() =>{
            hobbies.forEach(hobbie => hobbie.classList.remove('.hover'));
        }, 300);
    });
});