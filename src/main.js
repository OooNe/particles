import Particle from './particle';
import { getRandom } from './utils';

const app = {
    fps: 30,
    init () {
        this.canvas = document.getElementById('app');
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.ctx = this.canvas.getContext('2d');
        this._storage = [];

        this.canvas.addEventListener('click', () => {
            this.addParticles();
        }, false);

        this.startAnimating(this.fps);
    },
    addParticles() {
        for (var i = 0; i < 20; i++) {
            this._storage.push(
                new Particle(getRandom(this.canvas.width), getRandom(this.canvas.height))
            );
        }
    },
    startAnimating (fps) {
        this.fpsInterval = 1000 / fps;
        this.then = Date.now();
        this.startTime = this.then;
        this.animate();
    },
    animate() {
        requestAnimationFrame(this.animate.bind(this));

        this.now = Date.now();
        this.elapsed = this.now - this.then;

        if (this.elapsed > this.fpsInterval) {
            this.then = this.now - (this.elapsed % this.fpsInterval);

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.draw();
        }
    },
    draw () {
        this._storage.forEach((particle) => {
            particle.x = particle.x + particle.directionX * particle.speed
            particle.y = particle.y + particle.directionY * particle.speed

            if (particle.x >= this.canvas.width || particle.x <= 0) {
                particle.directionX = particle.directionX * -1;
            }

            if (particle.y >= this.canvas.height || particle.y <= 0) {
                particle.directionY = particle.directionY * -1;
            }

            particle.draw(this.ctx);
        });
    }
}

app.init();