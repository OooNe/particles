import { getRandomDirection, getRandom, getRandomColor } from './utils';

export default class Particle {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.size = getRandom(5);
        this.color = getRandomColor();
        this.speed = getRandom(4);
        this.directionX = getRandomDirection();
        this.directionY = getRandomDirection();
    }

    draw (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    move () {
        this.x = this.x + Math.cos(this.directionX) * this.speed;
        this.y = this.y + Math.sin(this.directionY) * this.speed;
        this.slowDown();
    }

    slowDown () {
        this.speed = this.speed - this.speed * 0.1;        
    }
}