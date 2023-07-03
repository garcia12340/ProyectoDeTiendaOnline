window.addEventListener("load", function () {
    const loader = document.getElementById("load");
    const delayTime = 3000; // 3 segundos

    // Mostrar la ProgressBar
    loader.classList.add("show");

    // Retraso para ocultar la ProgressBar y mostrar la página web normal
    setTimeout(function () {
      loader.style.display = "none";
    }, delayTime);
});
  
window.addEventListener("load", function () {
    const loader = document.getElementById("load");
    const progressBar = document.getElementById("progress");
    const delayTime = 3000; // 3 segundos

    // Mostrar la ProgressBar
    loader.classList.add("show");

    // Retraso para ocultar la ProgressBar y mostrar la página web normal
    setTimeout(function () {
      loader.style.display = "none";
    }, delayTime);

});