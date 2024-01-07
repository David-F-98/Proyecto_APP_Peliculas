const fetchGeneros = async(filtro = 'movie')=>{
    const tipo = filtro === 'movie' ? 'movie' : 'tv' ;
    const url = `https://api.themoviedb.org/3/genre/${tipo}/list?language=en&api_key=e2e5d55ea40cc57ceb88131651075e67`
    
    
    try{
        const respuesta = await fetch(url);
        //Extraemos lo datos que nos devuelve "respuesta" con .json
        const datos = await respuesta.json();
        return datos.genres;
    
    }catch(e){
        console.log(e);
    }

};

export default fetchGeneros;