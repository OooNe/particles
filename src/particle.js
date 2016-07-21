import { getRandomDirection, getRandom, getRandomColor } from './utils';

export default class Particle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.size = getRandom(3);
        this.color = getRandomColor();
        this.speed = getRandom(1.5);
        this.directionX = getRandomDirection();
        this.directionY = getRandomDirection();
    }

    draw (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}