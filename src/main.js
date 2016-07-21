const app = {
    fps: 30,
    init () {
        this.canvas = document.getElementById('app');
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.ctx = this.canvas.getContext('2d');

        this.startAnimating(this.fps);
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

    }
}

app.init();