import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { VideoContainer, VideoEbook, VideoForeground } from "./styles";

function VideoComponent() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <VideoContainer data-aos="fade-up">
      <VideoForeground>
        <VideoEbook
          url="https://www.youtube.com/embed/_X_N1epuKWs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoForeground>
    </VideoContainer>
  );
}
export default VideoComponent;
