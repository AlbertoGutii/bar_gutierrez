
// CAMBIAR RUTA DE LOS BOTONES
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnLogo").onclick = function() {
        window.location.href = "../index.html";
    };

    document.getElementById("btnInicio").onclick = function() {
        window.location.href = "../index.html";
    };
    
    document.getElementById("btnCarta").onclick = function() {
        window.location.href = "../paginas_carta/carta.html";
    };
    document.getElementById("btnMenu").onclick = function() {
        window.location.href = "../paginas_carta/menu.html";
    };
    
    document.getElementById("btnVinos").onclick = function() {
        window.location.href = "../paginas_carta/vinos.html";
    };

    document.getElementById("btnContacto").onclick = function() {
        window.location.href = "../contacto.html";
    };

    document.getElementById("btnReserva").onclick = function() {
        window.location.href = "./reserva.html";
    };
});