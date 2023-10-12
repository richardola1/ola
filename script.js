var number_of_star = 150;

var random_number = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var createStars = function(){
  var star_rotation = 'move_right;';
  for(var i=0; i<number_of_star; i++){
    rot= (star_rotation=='move_right;'?'move_left;':'move_right;');
    var star_top = random_number(0,document.documentElement.clientHeight);
    var star_left = random_number(0,document.documentElement.clientWidth);
    var star_radius = random_number(0,4);
    var  star_duration= random_number(6,16);

    document.body.innerHTML += "<div class='star' style='top: "+star_top+"px; left: "+star_left+"px; width: "+star_radius+"px; height: "+star_radius+"px; "+
    "animation-name:"+star_rotation+"; animation-duration: "+star_duration+"s;'></div>";
  }
};

createStars();

// script.js
// Replace 'YOUR_VIDEO_ID' with the actual YouTube video ID you want to play.
const videoId = snH91WGT1UE;
const playlistContainer = document.querySelector('.playlist');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
let player;

// Load the YouTube IFrame Player API
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Function to create the YouTube player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            autoplay: 0, // Set to 1 for autoplay
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}

// Function called when the player is ready
function onPlayerReady(event) {
    // Initialize event listeners for play and pause buttons
    playButton.addEventListener('click', playVideo);
    pauseButton.addEventListener('click', pauseVideo);
}

// Function to start playing the video
function playVideo() {
    player.playVideo();
}

// Function to pause the video
function pauseVideo() {
    player.pauseVideo();
}

// Function to handle changes in player state (e.g., video ended)
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        // You can add logic here for what to do when the video ends.
    }
}


// script.js
document.addEventListener("DOMContentLoaded", function () {
  const welcomePopup = document.getElementById("welcome-popup");
  const closePopup = document.getElementById("close-popup");

  // Show the welcome popup when the page loads
  welcomePopup.style.display = "flex";

  // Close the popup when the "Close" button is clicked
  closePopup.addEventListener("click", function () {
      welcomePopup.style.display = "none";
  });
});

