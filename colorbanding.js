export default function colorBanding(imageData, bands = 6) {
    const data = imageData.data;
    const step = 255 / (bands - 1);

    for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.round(data[i] / step) * step; // R
        data[i + 1] = Math.round(data[i + 1] / step) * step; // G
        data[i + 2] = Math.round(data[i + 2] / step) * step; // B
        // Alpha channel unchanged
    }

    return imageData;
}