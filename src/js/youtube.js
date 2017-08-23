var player,
    youtube = 'Youtube', //iframe id
    btnPlay = '.playYoutube', // btn id or class
    btnPause = '.pauseYoutube', // pause btn id or class
    modalId = '#video', // Modal id
    lastButton = '';

function onYouTubePlayerAPIReady() {
    player = new YT.Player(youtube, {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    $(btnPlay).on("click", function () {
        var videoId = $(this).attr("data-src");
        if (lastButton == videoId) {
            player.playVideo(videoId);
        } else {
            player.loadVideoById(videoId);
            lastButton = videoId;
        }
    });
    $(btnPause).on("click", function () {
        player.pauseVideo();
    });
    $(modalId).on("click", function () {
        player.pauseVideo();
    });
}