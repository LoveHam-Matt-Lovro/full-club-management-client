


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


// function to check color of the background, if the contrast is low then change the color of the text
export const textColorDyn = (color) => {
    let textColor = "#fafafa"; // default color
    let r, g, b, hsp;
    if (color.match(/^rgb/)) {
        color = color.match(/rgba?\(([^)]+)\)/)[1];
        color = color.split(/ *, */).map(Number);
        r = color[0];
        g = color[1];
        b = color[2];
    } else {
        color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'
        ));
        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );
    if (hsp > 127.5) {
        textColor = "#222";
    }

    console.log(textColor, "textColor")
    return textColor;
}

