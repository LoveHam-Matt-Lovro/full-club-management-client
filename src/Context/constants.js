


export const COLOR = {
    primary: '#2e7d32',
    secondary: '#1f6ff6',
    danger: '#c62828',
    success: '#2e7d32',
    warning: '#ff6f00',
    info: '#1565c0',
    light: '#f5f5f5',
    dark: '#212121',
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
    body: '#f8f9fa',
    text: '#212529',
    background: '#f8f9fa',
    background1: '#f8f9fa',
    border: '#e9ecef',
};



export function textContrast(color) {
    // Get the R, G, and B values of the color
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // Calculate the brightness of the color
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Return black if the color is bright, white if it's not
    if (brightness > 125) {
        return "#222";
    } else {
        return "#fff";
    }
}