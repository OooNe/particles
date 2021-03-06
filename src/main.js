import Particle from './particle';

const app = {
    fps: 30,
    gravity: 2,
    _storage: [],
    init () {
        this.prepareCanvas();
        this.bindEvents();
        this.startAnimating(this.fps);
    },

    prepareCanvas() {
        this.canvas = document.getElementById('app');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
    },

    bindEvents () {
        this.mouseMoveEvent();
        this.clickEvent();    
    },
    
    mouseMoveEvent() {
        this.canvas.addEventListener('mousemove', (e) => {
            this.addParticles(e.clientX, e.clientY, 10);
        }, false);
    },

    clickEvent() {
        this.canvas.addEventListener('click', (e) => {
            this.addParticles(e.clientX, e.clientY, 1000);
        }, false);
    },

    addParticles(x, y, amount) {
        for (var i = 0; i < amount; i++) {
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