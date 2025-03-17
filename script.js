let menuVisible = false;
//Función Ocultar - Mostrar Menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Ocultar el menú una vez que se selecciona el apartado del portafolio
    document.getElementById("nav").classList = "";
    menuVisible = false;
}