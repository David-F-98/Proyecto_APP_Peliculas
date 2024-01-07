'use strict';

const fetchGeneros = async()=>{
const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=e2e5d55ea40cc57ceb88131651075e67';
    
    
    try{
        const respuesta = await fetch(url);
        //Extraemos lo datos que nos devuelve "respuesta" con .json
        const datos = await respuesta.json();
        return datos.genres;
    
    }catch(e){
        console.log(e);
    }

};

const obtenerGenero = (id, generos)=>{
    let nombreGenero;
    generos.forEach((elemento)=>{
        if(id === elemento.id){
            
            nombreGenero = elemento.name;
       }    });
    return nombreGenero;
};

const fecthPopulares = async()=>{
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-MX&page=1&sort_by=popularity.desc&api_key=e2e5d55ea40cc57ceb88131651075e67';
    try{
        const respuesta = await fetch(url);
        //Extraemos lo datos que nos devuelve "respuesta" con .json
        const datos = await respuesta.json();
        
        //Nos devuelve un arreglo
        const resultados = datos.results;
        //Extraemos el nombre del genero mediante su id
        const generos = await fetchGeneros();
        console.log(generos);


        resultados.forEach((resultado)=>{
            resultado.generos = obtenerGenero(resultado.genre_ids[0],generos);
        });


        return resultados;

    }catch(e){
        console.log(e);
    }
};

const cargarTitulos = (resultados)=>{
    const contenedor = document.querySelector('#populares .main__grid');
    resultados.forEach((resultado) => {
        // console.log(resultado.generos);
        const plantilla = `
        <div class="main__media">
            <a href="#" class="main__media-thumb">
                <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
            </a>
            <p class="main__media-titulo">${resultado.title}</p>
            <p class="main__media-fecha">${resultado.generos}</p>
        </div>
        `;
        //Insertamos en el DOM mediante .insertAdjacentHTML la plantilla 
        //Indicando donde la posicionamos con beforeend
        contenedor.insertAdjacentHTML('beforeend', plantilla);
    });
};

const cargar = async ()=>{
    
    const resultado = await fecthPopulares();
    cargarTitulos(resultado);
};
cargar();
//# sourceMappingURL=bundle.js.map
