// effects/datamosh.js
export default function datamosh(imageData) {
    const { data, width, height } = imageData;
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.putImageData(imageData, 0, 0);

    const blockSize = 16; // size of the block in pixels
    const numBlocks = 50; // how many blocks to shift

    for (let i = 0; i < numBlocks; i++) {
        const x = Math.floor(Math.random() * (width - blockSize));
        const y = Math.floor(Math.random() * (height - blockSize));
        const offsetX = Math.floor((Math.random() - 0.5) * 40); // -20 to +20 px
        const offsetY = Math.floor((Math.random() - 0.5) * 40);

        // Get block of pixels
        const block = ctx.getImageData(x, y, blockSize, blockSize);

        // Paste it in a new place (offset)
        const newX = Math.min(width - blockSize, Math.max(0, x + offsetX));
        const newY = Math.min(height - blockSize, Math.max(0, y + offsetY));
        ctx.putImageData(block, newX, newY);
    }

    return ctx.getImageData(0, 0, width, height);
}
