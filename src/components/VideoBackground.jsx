import React, { useRef, useEffect } from "react";

export default function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on load
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented, which is fine
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        title="Background video"
        aria-label="Animated background"
      >
        <source
          src={`${import.meta.env.BASE_URL}videos/background.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}