// Menu Responsive
const btnResponsive = document.getElementById('btn--hamburguesa');

const svgCerrar = `
<svg class="cerrar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
`;

const svgAbrir = `
<svg class="abrir" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>
`;

const navegacion = document.getElementById('menu--responsive')

btnResponsive.addEventListener('click', () => {
    btnResponsive.removeChild(btnResponsive.childNodes[0]);
    if (btnResponsive.querySelector('#btn--hamburguesa svg').getAttribute('class') == 'abrir') {
        btnResponsive.innerHTML = svgCerrar;
        navegacion.style.display = 'flex';
    } else {
        btnResponsive.innerHTML = svgAbrir;
        navegacion.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded',()=>{
    if(window.innerWidth>992){
        navegacion.style.display = 'flex';
    }
});