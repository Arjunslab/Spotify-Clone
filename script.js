console.log('welcome to nallaspotify');

// Initialise the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('Masterplay');
let Myprogressbar = document.getElementById('Myprogressbar');
let Gif = document.getElementById('Gif');
let songItems = Array.from(document.getElementsByClassName('songItem')); // Convert to array
let songs = [
    { songName: 'Alone', filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: 'Alone', filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: 'Alone', filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: 'Alone', filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: 'Alone', filePath: "1.mp3", coverPath: "1.jpg" }
];

songItems.forEach((element, i) => {
    const imgElement = element.getElementsByTagName("img")[0];
    const songNameElement = element.getElementsByClassName("songName")[0];

    // Check if elements exist before setting properties
    if (imgElement) {
        imgElement.src = songs[i].coverPath;
    }
    if (songNameElement) {
        songNameElement.innerText = songs[i].songName;
    }
});

// Handle play/pause
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        Gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        Gif.style.opacity = 0;
    }
});

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    Myprogressbar.value = progress;
});

Myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = Myprogressbar.value * audioElement.duration / 100;
});
