import fecthPopulares from "./fetchPopulares";
import cargarTitulos from "./cargarTitulos";
import cargarGeneros from "./cargarGeneros";
import "./listenerFiltroTipo";
import './listenerFiltrosGenerosBtn';
import './listenerBuscar';
const cargar = async ()=>{
    
    const resultado = await fecthPopulares();
    cargarTitulos(resultado);
    cargarGeneros('movie');
}
cargar();