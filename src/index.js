import fecthPopulares from "./fetchPopulares";
import cargarTitulos from "./cargarTitulos";
import cargarGeneros from "./cargarGeneros";
const cargar = async ()=>{
    
    const resultado = await fecthPopulares();
    cargarTitulos(resultado);
    cargarGeneros();
}
cargar();