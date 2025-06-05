export default function scanLines(imageData) {
    const { data, width, height } = imageData;
    for (let y = 0; y < height; y++) {
        if (y % 4 === 0) {
            for (let x = 0; x < width; x++) {
                const i = (y * width + x) * 4;
                data[i] *= 0.5;     // R
                data[i + 1] *= 0.5; // G
                data[i + 2] *= 0.5; // B
            }
        }
    }
    return imageData;
}
