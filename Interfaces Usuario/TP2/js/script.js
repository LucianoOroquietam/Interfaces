window.addEventListener("load", function () {
    // Simular una carga de 5 segundos
    setTimeout(function () {
        // Ocultar el contenedor de carga
        const loadingContainer = document.querySelector(".loading-container");
        loadingContainer.style.display = "none";

        // Redirigir a la página de inicio 
        window.location.href = "index.html";
       
    }, 5000);
});
