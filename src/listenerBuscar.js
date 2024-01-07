import cargarTitulos from "./cargarTitulos";
import fecthBusqueda from "./fetchBusqueda";
const btnBuscar = document.getElementById('btn-buscar');

btnBuscar.addEventListener('click',async (e)=>{
    e.preventDefault();
    const resultados = await fecthBusqueda();
    cargarTitulos(resultados);
});
