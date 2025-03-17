// ... (rest of the JavaScript remains mostly the same) ...

const volume = document.getElementById('volume');
const modeToggle = document.getElementById('mode-toggle');

volume.addEventListener('input', () => {
    audio.volume = volume.value;
});

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    playerContainer.classList.toggle('light-mode');
    playlistContainer.classList.toggle('light-mode');
    modeToggle.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')){
        modeToggle.innerHTML = "<i class=\"fa-solid fa-moon\"></i>"
    } else {
        modeToggle.innerHTML = "<i class=\"fa-solid fa-sun\"></i>"
    }
});
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const albumCover = document.getElementById('album-cover');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');
const playlistItems = document.getElementById('playlist-items');

const songs = [
    {
        title: 'Theme of Kalki',
        artist: 'Prabhas',
        src: 'assests/songs/Theme of Kalki.mp3',
        cover: 'assests/images/‘Kalki 2898 – AD’ Images and glimpse.jpg',
    },
    {
        title: 'OG- Hungry Cheetah',
        artist: 'Pawan Kalayan',
        src: 'assests/songs/[iSongs.info] 01 - Hungry Cheetah OG Glimpse.mp3',
        cover: 'assests/images/OG.jpg',
    },
    {
        title: 'Devara',
        artist: 'Jr.NTR',
        src: 'assests/songs/[iSongs.info] 02 - Fear Song.mp3',
        cover: 'assests/images/Devara Movie poster.jpg',
    },
    {
        title: 'Billa Theme',
        artist: 'Prabhas',
        src: 'assests/songs/[iSongs.info] 03 - Billa Theme Song.mp3',
        cover: 'assests/images/billa prabhas rebelstar.jpg',
    },
    {
        title: 'ISmart Shanker',
        artist: 'Ram',
        src: 'assests/songs/[iSongs.info] 02 - Steppa Maar.mp3',
        cover: 'assests/images/Ram Pothineni Movie New Look.jpg',
    },
    {
        title: 'Kalki',
        artist: 'Prabhas',
        src: 'assests/songs/Ta Takkara.mp3',
        cover: 'assests/images/Prabhas Kalki2898AD.jpg',
    },
    {
        title: 'Daavudi- Devara',
        artist: 'Jr. NTR',
        src: 'assests/songs/[iSongs.info] 04 - Daavudi.mp3',
        cover: 'assests/images/devara img2.jpg',
    },
    {
        title: 'Petta ',
        artist: 'Rajinikanth',
        src: 'assests/songs/_Petta Theme - SenSongsMp3.Co.mp3',
        cover: 'assests/images/petta.jpg',
    },
    {
        title: 'Devara - Red Sea',
        artist: 'Jr.NTR',
        src: 'assests/songs/Red Sea.mp3',
        cover: 'assests/images/devara3.jpg',
    },
    {
        title: 'Gutur Karam',
        artist: 'Mahesh Babu',
        src: 'assests/songs/Dum Masala.mp3',
        cover: 'assests/images/gutur karam.jpg',
    },
    // Add more songs here
];

let songIndex = 0;

function loadSong(song) {
    audio.src = song.src;
    albumCover.src = song.cover;
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
}

loadSong(songs[songIndex]);

function playSong() {
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseSong() {
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
});

nextBtn.addEventListener('click', () => {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
});

audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.target;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

audio.addEventListener('ended', () => {
    nextBtn.click();
});

// Playlist creation
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.addEventListener('click', () => {
        songIndex = index;
        loadSong(songs[songIndex]);
        playSong();
    });
    playlistItems.appendChild(li);
});