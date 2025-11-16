import { APP_LOGO } from "@/const";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      
      // Start fading out 0.5 seconds before the end
      if (duration - currentTime < 0.5) {
        const fadeProgress = (duration - currentTime) / 0.5;
        setVideoOpacity(fadeProgress);
      } else if (currentTime < 0.5) {
        // Fade in at the start
        const fadeProgress = currentTime / 0.5;
        setVideoOpacity(fadeProgress);
      } else {
        setVideoOpacity(1);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a2540]">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: videoOpacity }}
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay to darken video slightly */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Logo */}
      <header className="relative z-10 p-6 md:p-8">
        <img
          src={APP_LOGO}
          alt="Mercury Holdings"
          className="h-12 md:h-16 w-auto"
        />
      </header>
    </div>
  );
}
