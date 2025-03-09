import Image from "next/image";

//Assets
import curveText from "@/assets/svgs/projects/project/curve-text-project-test.svg";

export const DescriptionSection = () => {
  return (
    <div className="flex flex-col gap-5 mb-12 px-5">
      <h4 className="font-semibold text-lg text-center">PROJECT INFORMATION</h4>
      <div className="relative w-full h-64">
        <Image src={curveText} alt="curve text" fill />
      </div>
    </div>
  );
};
