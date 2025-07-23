import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

interface IProps {
  isVisible: boolean;
  setIsVisibleSplashScreen: Dispatch<SetStateAction<boolean>>;
}
export const SplashScreen: FC<IProps> = ({
  isVisible,
  setIsVisibleSplashScreen,
}) => {
  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  //Refs
  const videoRef = useRef<HTMLVideoElement>(null);

  //Lifecycle
  useEffect(() => {
    const play = async () => {
      try {
        await videoRef.current?.play();
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    };
    play();
  }, []);

  //Functions
  function handleOnEndedSplashScreen() {
    setIsVisibleSplashScreen(false);
  }

  return (
    isVisible && (
      <div className="w-screen h-dvh fixed left-0 top-0 bg-white z-[9999]">
        <div className="relative w-full h-full">
          {isMd ? (
            <video
              ref={videoRef}
              onEnded={handleOnEndedSplashScreen}
              src={"/videos/splash-desktop.mp4"}
              className="w-full h-full"
              autoPlay
              muted
              playsInline
            />
          ) : (
            <video
              ref={videoRef}
              onEnded={handleOnEndedSplashScreen}
              src={"/videos/splash-mobile.mp4"}
              className="w-full h-full"
              autoPlay
              muted
              playsInline
            />
          )}
        </div>
      </div>
    )
  );
};
