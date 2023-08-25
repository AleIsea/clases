function saludar(nombre){
    return `hola, ${nombre}`;
} 

// Funcion Hola Mundo

function hiWorld(){
    return 'hola World!';
}

// module.exports.saludar = saludar;
// module.exports.hiWorld = hiWorld;



// Segunda Forma De exportar Elementos

module.exports ={
    saludar: saludar,
    hiWorld: hiWorld
};
