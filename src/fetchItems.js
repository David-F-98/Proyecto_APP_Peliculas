const fetchItem = async(id)=>{
    const tipo = document.querySelector('.main__filtros .btn--active').id;
    try {
        const url = `https://api.themoviedb.org/3/${tipo}/${id}?language=es-MX&api_key=e2e5d55ea40cc57ceb88131651075e67`;
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
};
export default fetchItem;