export default function noiseOverlay(imageData) {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 100;
        data[i] += noise;
        data[i + 1] += noise;
        data[i + 2] += noise;
    }
    return imageData;
}
