import React, { useEffect, useState } from "react";

export default function VideoBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload video for better performance
    const video = new HTMLMediaElement();
    video.src = `${import.meta.env.BASE_URL}videos/background.mp4`;
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onCanPlay={() => setIsLoaded(true)}
        title="Background video"
        aria-label="Animated background"
      >
        <source
          src={`${import.meta.env.BASE_URL}videos/background.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
      )}
    </div>
  );
}