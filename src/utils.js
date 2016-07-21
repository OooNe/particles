export function getRandom (size) {
    return Math.floor((Math.random() * size) + 1);
}

export function getRandomDirection () {
    return Math.random() * 2 * Math.PI;
}

export function getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';

    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}