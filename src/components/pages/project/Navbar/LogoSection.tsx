"use client";

import Image from "next/image";
import { ChangeEvent, FC, useRef, useState } from "react";
import { useRouter } from "@bprogress/next/app";
import { toast } from "react-toastify";
import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Redux
import { upsertLogoProject } from "@/stores/projects/actions";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";

//Assets
import logo from "@/assets/svgs/projects/project/project-nav-test.svg";

//Constants
import { BASE_API_URL } from "@/common/constants";

interface IProps {
  project: IProject;
}
export const LogoSection: FC<IProps> = ({ project }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Next
  const router = useRouter();

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

  //Functions
  function selectImage() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e?.target?.files) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("logo", e?.target?.files[0]);
        await dispatch(upsertLogoProject(formData, project.slug));
        setIsLoading(false);
        toast.success("Logo has been updated", {
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
    <div className="w-44 md:w-[420px] xl:w-[610px] h-20 md:h-36 lg:h-48 xl:h-64 relative mx-2 md:mx-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      {project?.logo ? (
        <Image src={`${BASE_API_URL}${project.logo}`} alt={project.slug} fill />
      ) : (
        <Image src={logo} className="" alt="logo" fill />
      )}
      {isAuth && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          className="absolute bottom-2 right-2"
          onPress={selectImage}
          isLoading={isLoading}
        >
          <Edit className="w-5 h-5" color="#1E353C" />
        </Button>
      )}
    </div>
  );
};
