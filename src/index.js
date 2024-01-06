import fecthPopulares from "./fetchPopulares";
import cargarTitulos from "./cargarTitulos";
const cargar = async ()=>{
    
    const resultado = await fecthPopulares();
    cargarTitulos(resultado);
}
cargar();