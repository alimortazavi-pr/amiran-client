import { Dispatch, FC, SetStateAction } from "react";
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
              onEnded={handleOnEndedSplashScreen}
              src={"/videos/splash-desktop.mp4"}
              className="w-full h-full"
              autoPlay
              muted
            />
          ) : (
            <video
              onEnded={handleOnEndedSplashScreen}
              src={"/videos/splash-mobile.mp4"}
              className="w-full h-full"
              autoPlay
              muted
            />
          )}
        </div>
      </div>
    )
  );
};
