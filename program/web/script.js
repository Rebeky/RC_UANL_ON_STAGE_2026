const videoLocal = document.getElementById("camara");


navigator.mediaDevices.getUserMedia({ videoLocal: true })
    .then(function(stream) {
        video.srcObject = stream;
    })
    .catch(function(error) {
        alert("No se pudo acceder a la cámara");
        console.log(error);
    });



// const streamed = document.getElementById("webcam");

// navigator.mediaDevices.getUserMedia({ streamed: true })
//     .then(function(stream) {
//         streamed.srcObject = stream;
//     })
//     .catch(function(error) {
//         alert("No se pudo acceder a la cámara");
//         console.log(error);
//     });
