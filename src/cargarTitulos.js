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
}
export default cargarTitulos;