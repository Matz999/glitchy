export default function pixelate(imageData) {
    const w = imageData.width;
    const h = imageData.height;
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = w;
    ctx.canvas.height = h;
    ctx.putImageData(imageData, 0, 0);

    const size = 10;
    for (let y = 0; y < h; y += size) {
        for (let x = 0; x < w; x += size) {
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            ctx.fillStyle = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
            ctx.fillRect(x, y, size, size);
        }
    }

    return ctx.getImageData(0, 0, w, h);
}
