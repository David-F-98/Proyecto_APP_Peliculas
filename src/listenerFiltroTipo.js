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
});

filtroSerie.addEventListener('click', async (e)=>{
    e.preventDefault();

    cargarGeneros('tv');
    const resultados = await fecthPopulares('tv');
    cargarTitulos(resultados);
});