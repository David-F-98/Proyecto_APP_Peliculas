const obtenerGenero = (id, generos)=>{
    let nombreGenero;
    generos.forEach((elemento)=>{
        if(id === elemento.id){
            
            nombreGenero = elemento.name;
       };
    });
    return nombreGenero;
};
 export default obtenerGenero;