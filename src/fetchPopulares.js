const fecthPopulares = async()=>{
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-MX&page=1&sort_by=popularity.desc&api_key=e2e5d55ea40cc57ceb88131651075e67'
    try{
        const respuesta = await fetch(url);
        //Extraemos lo datos que nos devuelve "respuesta" con .json
        const datos = await respuesta.json();
        return datos.results;

    }catch(e){
        console.log(e);
    }
};
 export default fecthPopulares;