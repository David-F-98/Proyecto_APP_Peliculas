const cargarTitulos = (resultados)=>{
    const contenedor = document.querySelector('#populares .main__grid');

    contenedor.innerHTML=('');

    resultados.forEach((resultado) => {
        // console.log(resultado.generos);
        const plantilla = `
        <div class="main__media" data-id=${resultado.id}>
            <a href="#" class="main__media-thumb">
                <img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
            </a>
            <p class="main__media-titulo">${resultado.title || resultado.name}</p>
            <p class="main__media-fecha">${resultado.generos}</p>
        </div>
        `;
        //Insertamos en el DOM mediante .insertAdjacentHTML la plantilla 
        //Indicando donde la posicionamos con beforeend
        contenedor.insertAdjacentHTML('beforeend', plantilla);
    });
}
export default cargarTitulos;