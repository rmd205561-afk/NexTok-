const videos = document.querySelectorAll('.video-player');

for (const video of videos) {
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

// স্ক্রল করার সময় ভিডিও কন্ট্রোল করার জন্য Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
}, { threshold: 0.5 });

videos.forEach(video => observer.observe(video));

