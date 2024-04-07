
// CAMBIAR RUTA DE LOS BOTONES
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnInicio").onclick = function() {
        window.location.href = "../pagina_principal.html";
    };
    
    document.getElementById("btnCarta").onclick = function() {
        window.location.href = "../bar_gutierrez/paginas_carta/carta.html";
    };
    document.getElementById("btnMenu").onclick = function() {
        window.location.href = "../bar_gutierrez/paginas_carta/menu.html";
    };
    
    document.getElementById("btnVinos").onclick = function() {
        window.location.href = "../bar_gutierrez/paginas_carta/vinos.html";
    };

    document.getElementById("btnContacto").onclick = function() {
        window.location.href = "../bar_gutierrez/contacto.html";
    };

    document.getElementById("btnReserva").onclick = function() {
        window.location.href = "../admin/admin_gestionar_productos.html";
    };
});
