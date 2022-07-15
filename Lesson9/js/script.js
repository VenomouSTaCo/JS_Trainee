class VideoPlayer {
    constructor() {
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progressBar = this.progress.querySelector('.progress__filled');
        this.toggle = this.player.querySelector('.toggle');
        this.skipButtons = this.player.querySelectorAll('[data-skip]');
        this.ranges = this.player.querySelectorAll('.player__slider');
        this.mouseDown = false;
    }

    init() {
        this.video.currentTime = JSON.parse(localStorage.getItem('currTime'));
        this.video.volume = JSON.parse(localStorage.getItem('volume'));
        this.video.playbackRate = JSON.parse(localStorage.getItem('playback'));
        this.events();
    }

    // volume = 0;
    // playback = 0;
    // currTime = 0;


    events() {
        this.video.addEventListener('click', e => this.togglePlay(e));
        this.video.addEventListener('timeupdate', e => this.handleProgress(e));
        this.toggle.addEventListener('click', e => this.togglePlay(e));
        this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
        this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
        this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)));
        this.progress.addEventListener('click', e => this.scrub(e));
        this.progress.addEventListener('mousemove', e => this.mouseDown && this.scrub(e));
        this.progress.addEventListener('mousedown', e => this.mouseDown = true);
        this.progress.addEventListener('mouseup', e => this.mouseDown = false);
    }

    togglePlay() {
        const method = this.video.paused ? 'play' : 'pause';
        this.toggle.textContent = this.video.paused ? '❚❚' : '▶';
        this.video[method]();
    }

    handleRangeUpdate(e) {
        if (e.target.name === 'playbackRate') {
            localStorage.setItem('playback', JSON.stringify(e.target.value));
            // this.playback = e.target.value;
        } else {
            localStorage.setItem('volume', JSON.stringify(e.target.value));
            // this.volume = e.target.value;
        }
        this.video[e.target.name] = e.target.value;
    }

    skip(e) {
        this.video.currentTime += parseFloat(e.target.dataset.skip)
    }

    handleProgress(e) {
        const percent = (this.video.currentTime / this.video.duration) * 100;
        localStorage.setItem('currTime', JSON.stringify(this.video.currentTime));
        this.progressBar.style.flexBasis = `${percent}%`;
    }

    scrub(e) {
        this.video.currentTime = (e.offsetX / this.progress.offsetWidth) * this.video.duration;
    }
}


const video = new VideoPlayer();
video.init();