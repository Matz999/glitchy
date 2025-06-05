// script.js
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let originalImage = new Image();

document.getElementById("upload").addEventListener("change", (e) => {
    let file = e.target.files[0];
    if (!file) return;
    let reader = new FileReader();
    reader.onload = (event) => {
        originalImage.onload = () => {
            canvas.width = originalImage.width;
            canvas.height = originalImage.height;
            ctx.drawImage(originalImage, 0, 0);
        };
        originalImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

async function applyEffect(effectName) {
    const { default: effect } = await import(`./effects/${effectName}.js`);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const newImageData = effect(imageData);
    ctx.putImageData(newImageData, 0, 0);
}

function downloadImage() {
    const link = document.createElement("a");
    link.download = "glitched.png";
    link.href = canvas.toDataURL();
    link.click();
}
