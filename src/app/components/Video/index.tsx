"use client"
const VideoLanding = () => {
    return(
        <video  className="z-10 relative custom-animation" muted autoPlay loop width="800" height="800">
        <source src="/hand-video.mp4" type="video/mp4" />
      </video>
    )
}
export default VideoLanding