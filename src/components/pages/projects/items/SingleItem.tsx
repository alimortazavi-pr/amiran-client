import Image from "next/image";

//Assets
import projectItemTestImage from "@/assets/svgs/projects/project-item-test.svg";

export const SingleItem = () => {
  return (
    <div className="col-span-6">
      <div className="w-full h-48 relative">
        <Image src={projectItemTestImage} alt="single project" fill />
      </div>
    </div>
  );
};
