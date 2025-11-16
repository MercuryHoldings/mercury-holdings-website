import { APP_LOGO } from "@/const";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Handle audio end event to loop with 2-second pause
    const handleAudioEnd = () => {
      setTimeout(() => {
        if (audio && !audio.paused) {
          audio.currentTime = 0;
          audio.play().catch(console.error);
        }
      }, 2000);
    };

    audio.addEventListener('ended', handleAudioEnd);

    // Try to autoplay immediately
    const tryAutoplay = () => {
      audio.play()
        .catch(() => {
          // Autoplay blocked, set up listener for first user interaction
          const startAudio = () => {
            audio.play().catch(console.error);
            // Remove listeners after first interaction
            document.removeEventListener('click', startAudio);
            document.removeEventListener('touchstart', startAudio);
            document.removeEventListener('keydown', startAudio);
            document.removeEventListener('mousemove', startAudio);
          };

          // Listen for any user interaction
          document.addEventListener('click', startAudio, { once: true });
          document.addEventListener('touchstart', startAudio, { once: true });
          document.addEventListener('keydown', startAudio, { once: true });
          document.addEventListener('mousemove', startAudio, { once: true });
        });
    };

    tryAutoplay();

    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      // Currently muted, unmute and play
      audio.play().catch(console.error);
      setIsMuted(false);
    } else {
      // Currently playing, mute and pause
      audio.pause();
      setIsMuted(true);
    }
  };

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

      {/* Background Audio */}
      <audio ref={audioRef}>
        <source src="/background-music.mp3" type="audio/mpeg" />
      </audio>

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

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300 border border-white/20"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}
