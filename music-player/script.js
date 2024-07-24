let nowPlaying = document.querySelector('.now-playing')
let trackArt = document.querySelector('.track-art')
let trackName = document.querySelector('.track-name')
let trackArtist = document.querySelector('.track-artist')


let playPauseBtn = document.querySelector('.playpause-track')
let nextBtn = document.querySelector('.next-track')
let prevBtn = document.querySelector('.prev-track')

let seekSlider = document.querySelector('.seek-slider')
let volumeSlider = document.querySelector('.colume-slider')
let currentTime = document.querySelector('.current-time')
let totalDuration = document.querySelector('.total-duration')

let wave = document.getElementById('wave')
let randomIcon = document.querySelector('.fa-random')
let currentTrack = document.querySelector('audio')

let trackIndex = 0
let isPlaying = false
let isRandom = false
let updateTimer


const musicLists = [
    {
        img: 'img/image.jpg',
        name: 'loseyourself',
        artist: 'eminem',
        src: 'img/lose.mp3',
    },
    {
        img: 'img/image.jpg',
        name: 'forget',
        artist: 'eminem',
        src: 'img/forget.mp3',
    },
    {
        img: 'img/image.jpg',
        name: 'love',
        artist: 'eminem',
        src: 'img/love.mp3',
    },
    {
        img: 'img/image.jpg',
        name: 'notAfraid',
        artist: 'eminem',
        src: 'img/NotAfraid.mp3',
    },
]


function loadTrack(trackIndex) {
    clearInterval(updateTimer)
    reset()
    currentTrack.src = musicLists[trackIndex].music
    currentTime.load()
    trackArtist.style.backgroundImage = "url(" +musicLists[trackIndex].img + ")"

    trackName.textContent = musicLists[trackIndex].name

    trackArtist.textContent = musicLists[trackIndex].artist

    nowPlaying.textContent = "Playing now" + (trackIndex + 1) + "from " + musicLists.length

    updateTimer = setInterval(setUpdate, 1000)

    currentTrack.addEventListener('ended', nextTrack)

    randomByColor()
}

function randomByColor() {
    let hex = ['0','1','2','3','4','5','6','7','8','9','0','a','b','c','d']

    let a

    function populate (a){
        for(let i = 0; i<6; i++){
            let x = Math.round(Math.random()*14)
            let y = hex[x]

            a+=y
        }
        return a
    }

    let color1 = populate("#")
    let color2 = populate("#")
    var angle = 'to right'

    let gradient = 'linear-gradient(' + angle + ',' +color1+','
    +color2 +')'

    document.body.style.background= gradient
}