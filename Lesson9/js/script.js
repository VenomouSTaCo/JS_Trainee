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
        this.volume = this.player.querySelector('[name="volume"]');
        this.playbackRate = this.player.querySelector('[name="playbackRate"]');
    }

    init() {
        this.events();
        const {volume, playbackRate, currentTime} = JSON.parse(localStorage.getItem('status'));
        this.status.volume = volume || 0;
        this.status.playbackRate = playbackRate || 0;
        this.status.currentTime = currentTime || 0;

        this.video['volume'] = volume;
        this.volume.value = volume;
        this.video['playbackRate'] = playbackRate;
        this.playbackRate.value = playbackRate;
        this.video.currentTime = currentTime;
    }

    status = {
        volume: 0,
        playbackRate: 0,
        currentTime: 0,
    }

    events() {
        // all events
        this.video.addEventListener('click', e => this.togglePlay(e));
        this.video.addEventListener('timeupdate', e => this.handleProgress(e));
        this.toggle.addEventListener('click', e => this.togglePlay(e));
        this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
        this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
        this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)));
        this.progress.addEventListener('click', e => this.scrub(e));

        this.progress.addEventListener('mousemove', e => this.mouseDown && this.scrub(e));
        this.progress.addEventListener('mousedown', () => this.mouseDown = true);
        this.progress.addEventListener('mouseup', () => this.mouseDown = false);
    }

    togglePlay() {
        const method = this.video.paused ? 'play' : 'pause';
        this.toggle.textContent = this.video.paused ? '❚❚' : '▶';
        this.video[method]();

    }

    handleProgress(e) {
        const percent = (this.video.currentTime / this.video.duration) * 100;
        this.status.currentTime = this.video.currentTime;
        localStorage.setItem('status', JSON.stringify(this.status));
        this.progressBar.style.flexBasis = percent + '%';
    }

    skip(e) {
        // time skip
        this.video.currentTime += parseFloat(e.target.dataset.skip);
    }

    scrub(e) {
        this.video.currentTime = (e.offsetX / this.progress.offsetWidth) * this.video.duration;
    }

    handleRangeUpdate(e) {
        this.status[e.target.name] = e.target.value;
        localStorage.setItem('status', JSON.stringify(this.status));
        this.video[e.target.name] = e.target.value;
    }
}

const video = new VideoPlayer();
video.init();