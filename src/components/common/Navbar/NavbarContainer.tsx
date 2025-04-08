import { LogoSection, StartSide, EndSide, SearchSection } from ".";

export const NavbarContainer = () => {
  return (
    <div className="flex justify-between gap-1 lg:gap-2 items-center relative">
      <StartSide />
      <LogoSection />
      <EndSide />
      <SearchSection />
    </div>
  );
};
