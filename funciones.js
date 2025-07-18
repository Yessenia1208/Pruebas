
    function suma(a,b){
        return a + b;      
    }

    //Prueba fallida
    // function esPar (numero){
    //     return numero %2 === 1;
    // }

    //Función coregida
    function esPar(numero) {
    return numero % 2 === 0; 
    }


    function dividir(a,b){
        if (b === 0) return "Error";
        return a/b;
    }

    function obtenerIniciales(nombreCompleto){
        const partes = nombreCompleto.split(" ");
        return partes[0][0] + partes [1][0];
    }

    function formatearFecha(fechaStr){
        //Se espera un formato 'YYYY-MM-DD'
        const partes = fechaStr.split("-");
        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }

    module.exports = {
        suma,
        esPar,
        dividir
    }

