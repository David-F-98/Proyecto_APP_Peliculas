import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";
const fecthBusqueda = async(pagina = 1)=>{
    const tipo =  document.querySelector('.main__filtros .btn--active')?.id;
    const idGenero =  document.querySelector('#filtro-generos .btn--active')?.dataset.id;
    const anoInicial = document.querySelector('#años-min').value || 1950;
    const anoFinal = document.querySelector('#años-max').value || 2024;

    let url;
    if(tipo === 'movie'){
        url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-MX&page=${pagina}&release_date.gte=${anoInicial}&release_date.lte=${anoFinal}&sort_by=popularity.desc&with_genres=${idGenero}&api_key=e2e5d55ea40cc57ceb88131651075e67`;
    } else if(tipo==='tv'){
        url = `https://api.themoviedb.org/3/discover/tv?first_air_date.gte=${anoInicial}&first_air_date.lte=${anoFinal}&include_adult=false&include_null_first_air_dates=false&language=es-MX&page=${pagina}&sort_by=popularity.desc&with_genres=${idGenero}&api_key=e2e5d55ea40cc57ceb88131651075e67`;
    };

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const resultados = datos.results;

        const generos = await fetchGeneros();
        resultados.forEach((resultado)=>{
            resultado.generos = obtenerGenero(resultado.genre_ids[0],generos);
        });

        return resultados;
    } catch (e) {
        console.log(e);
    }

};

export default fecthBusqueda;