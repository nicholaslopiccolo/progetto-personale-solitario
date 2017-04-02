/**
 * Created by nicholas on 02/04/17.
 */
//variabili prova canvas
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var img=get
var x = 100 ;
var y = 100 ;
var timerId;

//funzioni prova
function drawImg(x, y) {
    context.beginPath();
    context.drawImage(img,x,y);
}
function animate() {
    x = x + 2;
    if (x > myCanvas.width) x = 20;

    context.clearRect(0, 0, myCanvas.width, myCanvas.height);
    drawImg(x, y);
}
function startAnimation() {
    if( timerId == null) {
        timerId = setInterval(animate, 20);
    }
}

startAnimation();
window.onload = animate();

// il nostro canvas
// il "context" del canvas - il contenuto su cui andremo effettivamente a lavorare
// i dati di ogni singolo pixel nel canvas (quindi nell'immagine)
var canvasData = context.getImageData(0, 0, canvas.width, canvas.height);
// canvasData è adesso un array dove per ogni pixel vengono specificati 4 valori :
// componente di ROSSO, VERDE, BLU e la componente ALPHA, ovvero la trasparenza
for (var x = 0; x < canvasData.width; x++)
{
      for (var y = 0; y < canvasData.height; y++)
      {
//Indice del pixel nell'array di tutti i pixel
      var idx = (x + y * canvas.width) * 4;
// I valori RGB
      var r = canvasData.data[idx + 0];
      var g = canvasData.data[idx + 1];
      var b = canvasData.data[idx + 2];
// qui possiamo modificare questo pixel come vogliamo, ad esempio eliminando il rosso
// e lasciando inalterati gli altri valori
canvasData.data[idx + 0] = r;
canvasData.data[idx + 1] = g;
canvasData.data[idx + 2] = b;
}
}
// manipolati tutti i pixel ridisegniamo l'immagine con l'array di pixel modificati
context.putImageData(canvasData, 0, 0);