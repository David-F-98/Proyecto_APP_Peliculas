import fetchGeneros from './fetchGeneros';
const contenedorGeneros = document.getElementById('filtro-generos');
const cargarGeneros = async (filtro)=>{
    const generos =  await fetchGeneros(filtro);

    contenedorGeneros.innerHTML = '';

    generos.forEach((genero)=>{
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = genero.name;
        btn.setAttribute('data-id',genero.id);
        contenedorGeneros.appendChild(btn);
    })
};
export default cargarGeneros;