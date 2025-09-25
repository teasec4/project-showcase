import React from "react";


export default function VideoBackground() {
    return (
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src={`${import.meta.env.BASE_URL}videos/background.mp4`}
            type="video/mp4"
            />
        </video>
      </div>
    );
  }