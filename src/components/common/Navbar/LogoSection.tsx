import Image from "next/image";

export const LogoSection = () => {
  return (
    <div className="relative w-10 h-14">
      <Image
        src="https://fakeimg.pl/200x300"
        className="rounded-full"
        alt="logo"
        fill
      />
    </div>
  );
};
