export default function rgbShift(imageData) {
    const data = imageData.data;
    const offset = 10;

    for (let i = 0; i < data.length - 4 * offset; i += 4) {
        data[i] = data[i + 4 * offset];     // Red
        data[i + 1] = data[i + 1];          // Green unchanged
        data[i + 2] = data[i - 4 * offset]; // Blue
    }

    return imageData;
}
