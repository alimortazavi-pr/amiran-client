import { Spinner } from "@heroui/react";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMediaQuery } from "react-responsive";

interface IProps {
  isVisible: boolean;
  setIsVisibleSplashScreen: Dispatch<SetStateAction<boolean>>;
}

export const SplashScreen: FC<IProps> = ({
  isVisible,
  setIsVisibleSplashScreen,
}) => {
  // State
  const [canPlay, setCanPlay] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lifecycle
  useEffect(() => {
    if (!isVisible) return;

    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        // Wait for video to be ready
        await new Promise((resolve) => {
          if (video.readyState >= 3) {
            resolve(void 0);
          } else {
            video.addEventListener("canplay", resolve, { once: true });
          }
        });

        await video.play();
        setCanPlay(true);
      } catch (err) {
        console.log("Autoplay blocked or video failed:", err);
        setHasError(true);

        // Fallback: show for 3 seconds then hide
        setTimeout(() => {
          setIsVisibleSplashScreen(false);
        }, 3000);
      }
    };

    playVideo();

    // Cleanup
    return () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, [isVisible, setIsVisibleSplashScreen, isMd]);

  // Functions
  function handleOnEndedSplashScreen() {
    setIsVisibleSplashScreen(false);
  }

  function handleVideoError() {
    console.log("Video loading error");
    setHasError(true);
    // Fallback: hide splash after 2 seconds
    setTimeout(() => {
      setIsVisibleSplashScreen(false);
    }, 2000);
  }

  function handleCanPlay() {
    setCanPlay(true);
  }

  // Click to play fallback
  function handleClickToPlay() {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
  }

  if (!isVisible) return null;

  return (
    <div className="w-screen h-dvh fixed left-0 top-0 bg-white z-[9999]">
      <div className="relative w-full h-full">
        {/* Loading indicator */}
        {!canPlay && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10"></div>
        )}

        {/* Error fallback */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center">
              <Spinner />
            </div>
          </div>
        )}

        {/* Video */}
        <video
          ref={videoRef}
          onEnded={handleOnEndedSplashScreen}
          onError={handleVideoError}
          onCanPlay={handleCanPlay}
          onClick={handleClickToPlay}
          src={
            isMd
              ? "https://berimcafe-icons.s3.ir-thr-at1.arvanstorage.ir/splash-desktop.mp4"
              : "https://berimcafe-icons.s3.ir-thr-at1.arvanstorage.ir/splash-mobile.mp4"
          }
          className={`w-full h-full object-cover cursor-pointer ${
            canPlay ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          autoPlay
          muted
          playsInline
          preload="auto"
        />

        {/* Click to play hint (if autoplay fails) */}
        {canPlay && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-70 animate-pulse">
            Click to continue if needed
          </div>
        )}
      </div>
    </div>
  );
};
