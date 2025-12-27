const video = document.getElementById("camara");

navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        video.srcObject = stream;
    })
    .catch(function(error) {
        alert("No se pudo acceder a la cámara");
        console.log(error);
    });
