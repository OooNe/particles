import RandomColor from 'randomcolor';

export function getRandom (size) {
    return Math.floor((Math.random() * size) + 1);
}

export function getRandomDirection () {
    return Math.random() * 2 * Math.PI;
}

export function getRandomColor() {
    return RandomColor({
        luminosity: 'bright',
        format: 'rgba'        
    });
}