var canvas = document.getElementById("glslCanvas");
var sandbox = new GlslCanvas(canvas);
canvas.style.width = '100%';
canvas.style.height = '100%';

let img = document.getElementById("img");
img.addEventListener('click',imgClick);

function imgClick(){
    img.classList.toggle("project-image-clicked");
}
