export default function sliceDisplace(imageData) {
    const { data, width, height } = imageData;
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.putImageData(imageData, 0, 0);

    for (let i = 0; i < 10; i++) {
        const y = Math.floor(Math.random() * height);
        const sliceHeight = 5 + Math.floor(Math.random() * 10);
        const offset = Math.random() * 30 - 15;
        const slice = ctx.getImageData(0, y, width, sliceHeight);
        ctx.putImageData(slice, offset, y);
    }

    return ctx.getImageData(0, 0, width, height);
}
