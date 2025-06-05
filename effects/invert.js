export default function invert(imageData) {
    const data = imageData.data;
    const offset = 10;

    for (let i = 0; i < data.length - 4 * offset; i += 4) {
        data[i] = 255 - data[i];     // R
        data[i + 1] = 255 - data[i + 1]; // G
        data[i + 2] = 255 - data[i + 2]; // B

    }

    return imageData;
}
