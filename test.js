class videoPlayer {

    constructor(divID, width, height){
        let playbackState=""
        let html=`<video 
        id="embed"
        controls  
        width=${width} 
        height=${height} 
        > 
        Sorry, your browser doesn't support embedded videos !! 
        </video>`
        document.getElementById(divID).insertAdjacentHTML('afterbegin', html);
    }

    load(url){
        let videoElement=document.getElementById("embed");
        videoElement.setAttribute("src",url)
    }

    play(){
        let videoElement=document.getElementById("embed");
        videoElement.play()
    }

    Pause(){
        let videoElement=document.getElementById("embed");
        videoElement.pause()
    }

    resize(width, height){
        let videoElement=document.getElementById("embed");
        videoElement.setAttribute("height",height)
        videoElement.setAttribute("width", width)
    }

    getHeight(){
        let videoElement=document.getElementById("embed");
        var height = videoElement.getAttribute("height")
        return height
    }

    getWidth(){
        let videoElement=document.getElementById("embed");
        var width = videoElement.getAttribute("width")
        return width
    }

    setAutoplay(flag){
        let videoElement=document.getElementById("embed");
        videoElement.autoplay=flag
    }

    setVolume(vol){
        let videoElement=document.getElementById("embed");
        videoElement.volume=vol;
    }

    getVolume(){
        let videoElement=document.getElementById("embed");
        return videoElement.volume;
    }

    setMute(flag){
        let videoElement=document.getElementById("embed");
        videoElement.muted=flag
    }

    getMute(){
        let videoElement=document.getElementById("embed");
        return videoElement.muted
    }

    getDuration(){
        let videoElement=document.getElementById("embed");
        videoElement.onloadedmetadata = function() {
           console.log(this.duration);
        };
    }

      setFullScreen(flag){
        if (flag){
            vidplayer1.resize("100%","100%")
        }

    }

    getPlaybackState(){
        let videoElement=document.getElementById("embed");
        videoElement.addEventListener("playing", function() {
             this.playbackState= "playing"
             console.log(this.playbackState)
        });
 
        videoElement.addEventListener("pause", function() { 
             this.playbackState= "paused"
             console.log(this.playbackState)
            
        });

        videoElement.addEventListener("ended", function(e) { 
             this.playbackState= "ended"
             console.log(this.playbackState)
        });

        return this.playbackState
    }
}

let vidplayer1=new videoPlayer("video","650","500");
vidplayer1.load("https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4");

