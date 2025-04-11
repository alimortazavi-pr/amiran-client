"use client";

import { Pause, Play, VideoSquare } from "iconsax-react";
import { useEffect, useRef, useState } from "react";

//Components
import { RailSpacerHorizontal } from "@/components/common/RailSpacer";
import { Button } from "@heroui/react";

export const VideoSectionContainer = () => {
  //States
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  //Refs
  const videoRef = useRef<HTMLVideoElement>(null);

  //Lifecycle
  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  //Functions
  function handlePlayPause() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  function handleFullscreen() {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center px-4 my-14 lg:my-36 xl:my-48 2xl:my-60 gap-8">
      <div className="flex-auto h-10 items-center hidden lg:flex">
        <RailSpacerHorizontal />
        <RailSpacerHorizontal />
        <RailSpacerHorizontal />
      </div>
      <div className="w-full max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] h-36 lg:h-52 xl:h-72 2xl:h-80 bg-primary/30 flex items-center justify-center rounded-full relative group">
        <video
          ref={videoRef}
          src="https://berimcafe-icons.s3.ir-thr-at1.arvanstorage.ir/Final%20-%20es2.mp4"
          className={`w-full h-full ${
            !isFullscreen && "rounded-full"
          } object-cover`}
        ></video>
        <div
          className={`absolute w-full h-full rounded-full bg-primary/30 ${
            isPlaying ? "opacity-0" : "opacity-100"
          } duration-300`}
        />
        <Button
          isIconOnly
          className={`absolute rounded-full duration-300 ${
            isPlaying && "opacity-0 group-hover:opacity-100"
          }`}
          onPress={handlePlayPause}
          variant="light"
        >
          {!isPlaying ? (
            <Play className="w-10 h-10 absolute" variant="Bold" color="white" />
          ) : (
            <Pause className="w-8 h-8 absolute" variant="Bold" color="white" />
          )}
        </Button>
        <Button
          isIconOnly
          className={`absolute rounded-full duration-300 opacity-0 group-hover:opacity-100 bottom-2`}
          onPress={handleFullscreen}
          variant="light"
        >
          <VideoSquare
            className="w-7 h-7 absolute"
            variant="Bold"
            color="white"
          />
        </Button>
      </div>
      <div className="flex-auto h-10 items-center hidden lg:flex">
        <RailSpacerHorizontal />
        <RailSpacerHorizontal />
        <RailSpacerHorizontal />
      </div>
    </div>
  );
};
