var myVideo = document.getElementById("video1");

function playPause(){
    if(myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function makeBig(){
    myVideo.width = 580;
}

function makeSmall(){
    myVideo.width = 350;
}

function makeNormal(){
    myVideo.width = 450;
}
