import { LogoSection, StartSide, EndSide } from ".";

export const NavbarContainer = () => {
  return (
    <div className="flex justify-between gap-1 lg:gap-2 items-center">
      <StartSide />
      <LogoSection />
      <EndSide />
    </div>
  );
};
