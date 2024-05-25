document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeControl = document.getElementById('volumeControl');

    // Play/Pause button functionality
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Volume control functionality
    volumeControl.addEventListener('input', function() {
        video.volume = volumeControl.value;
    });
});
