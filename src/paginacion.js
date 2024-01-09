import cargarTitulos from "./cargarTitulos";
import fecthBusqueda from "./fetchBusqueda";

const btnPaginaAnterior = document.getElementById('pagina-anterior');
const btnPaginaSiguiente = document.getElementById('pagina-siguiente');

btnPaginaSiguiente.addEventListener('click',async(e)=>{
    e.preventDefault();
    const paginaActual = document.getElementById('populares').dataset.pagina; 
    try {
        const resultados = await fecthBusqueda(paginaActual+1);
        //Modificamos el atributo del elemento 
        document.getElementById('populares').setAttribute('data-pagina', parseInt(paginaActual) + 1);
        cargarTitulos(resultados);
        window.scrollTo(0,0);
    } catch (error) {
        console.log(error);
    }
});

btnPaginaAnterior.addEventListener('click',async(e)=>{
    e.preventDefault();
    const paginaActual = document.getElementById('populares').dataset.pagina; 
    if(parseInt(paginaActual)>1){
        try {
            const resultados = await fecthBusqueda(paginaActual-1);
            //Modificamos el atributo del elemento 
            document.getElementById('populares').setAttribute('data-pagina', parseInt(paginaActual) - 1);
            cargarTitulos(resultados);
            window.scrollTo(0,0);
        } catch (error) {
            console.log(error);
        };  
    };
        
});