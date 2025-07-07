"use client";

import { Edit, Pause, Play, VideoSquare } from "iconsax-react";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "@bprogress/next/app";

//Interfaces
import { IProject } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import { videosSelector } from "@/stores/layouts/selectors";
import { upsertVideoProject } from "@/stores/projects/actions";

//Components
import { RailSpacerHorizontal } from "@/components/common/RailSpacer";

//Constants
import { BASE_API_URL } from "@/common/constants";

interface IProps {
  project: IProject;
}
export const VideoSectionContainer: FC<IProps> = ({ project }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Next
  const router = useRouter();

  //States
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
  function selectVideo() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

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

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e?.target?.files) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("video", e?.target?.files[0]);
        await dispatch(upsertVideoProject(formData, project.slug));
        setIsLoading(false);
        toast.success("Video has been updated", {
          position: "top-center",
        });
        router.refresh();
      } catch (error: any) {
        toast.error(error.message, {
          position: "top-center",
        });
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center px-4 my-14 lg:my-36 xl:my-48 2xl:my-60 gap-8">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="video/*"
      />
      <div className="flex-auto h-10 items-center hidden lg:flex">
        <RailSpacerHorizontal />
        <RailSpacerHorizontal />
        <RailSpacerHorizontal />
      </div>
      <div className="w-full max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] h-36 md:h-52 lg:h-60 xl:h-72 2xl:h-80 bg-primary/30 flex items-center justify-center rounded-full relative group">
        {isAuth && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className="absolute -right-8 bottom-1 z-10"
            onPress={selectVideo}
            isLoading={isLoading}
          >
            <Edit className="w-5 h-5" color="#1E353C" />
          </Button>
        )}
        <video
          ref={videoRef}
          src={
            project.video
              ? `${BASE_API_URL}${project.video}`
              : "https://berimcafe-icons.s3.ir-thr-at1.arvanstorage.ir/Final%20-%20es2.mp4"
          }
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
