var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var painting = false;
var colorPicker = document.getElementById('colorPicker');
var clearButton = document.querySelector('button');

canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', stopPainting);
canvas.addEventListener('mousemove', draw);

function startPainting(event) {
    painting = true;
    draw(event);
}

function stopPainting() {
    painting = false;
    ctx.beginPath();
}

function draw(event) {
    if (!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorPicker.value; // Obtenemos el color del color picker
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
