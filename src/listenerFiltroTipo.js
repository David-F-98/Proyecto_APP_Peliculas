import cargarGeneros from "./cargarGeneros";
import cargarTitulos from "./cargarTitulos";
import fecthPopulares from "./fetchPopulares";

const filtroPelicula = document.getElementById('movie');
const filtroSerie = document.getElementById('tv');

filtroPelicula.addEventListener('click', async (e)=>{
    e.preventDefault();
    cargarGeneros('movie');
    const resultados = await fecthPopulares('movie');
    cargarTitulos(resultados);

    filtroSerie.classList.remove('btn--active');
    filtroPelicula.classList.add('btn--active');
    document.querySelector('#populares .main__titulo').innerText = 'Películas Populares';
});

filtroSerie.addEventListener('click', async (e)=>{
    e.preventDefault();

    cargarGeneros('tv');
    const resultados = await fecthPopulares('tv');
    cargarTitulos(resultados);

    filtroPelicula.classList.remove('btn--active');
    filtroSerie.classList.add('btn--active');
    
    document.querySelector('#populares .main__titulo').innerText = 'Series Populares';
});