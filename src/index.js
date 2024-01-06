import fecthPopulares from "./fetchPopulares";
const cargar = async ()=>{
    
    const peliculas = await fecthPopulares();
    console.log(peliculas);
}
cargar();