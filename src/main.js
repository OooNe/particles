import Particle from './particle';
import { getRandom } from './utils';

const app = {
    fps: 30,
    gravity: 4,
    init () {
        this.canvas = document.getElementById('app');
        this.canvas.width = 800;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext('2d');
        this._storage = [];

        this.canvas.addEventListener('mousemove', (e) => {
            this.addParticles(e.clientX, e.clientY);
        }, false);

        this.startAnimating(this.fps);
    },

    addParticles(x, y) {
        for (var i = 0; i < 5; i++) {
            this._storage.push(
                new Particle(x, y)
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

            this.clearCanvas();
            this.draw();
        }
    },

    draw () {
        this.drawParticlesAndRemoveOld();
    },

    drawParticlesAndRemoveOld() {
        this._storage.forEach((particle, index) => {
            particle.move();

            particle.y += this.gravity;

            if (particle.speed <= 0.1) {
                this.removeParticle(particle);
                this.removeParticleFormStorage(index);
                return;
            }

            particle.draw(this.ctx);
        });
    },

    removeParticleFormStorage (index) {
        this._storage.splice(index, 1);
    },

    removeParticle (particle) {
        particle = null;
    },

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

app.init();