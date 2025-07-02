"use client";

import { ChangeEvent, FC, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "@bprogress/next/app";
import { Button, PressEvent } from "@heroui/react";
import { Edit } from "iconsax-react";
import { toast } from "react-toastify";

//Interfaces
import { IProject } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";

//Assets
import projectItemTestImage from "@/assets/svgs/projects/project-item-test.svg";

//Constants
import { SERVER_BASE_API_URL, PATHS } from "@/common/constants";
import { upsertThumbnailProject } from "@/stores/projects/actions";
import Link from "next/link";

interface IProps {
  project: IProject;
}
export const SingleItem: FC<IProps> = ({ project }) => {
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
  function selectImage(e: PressEvent) {
    e.continuePropagation();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e?.target?.files) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("thumbnail", e?.target?.files[0]);
        await dispatch(upsertThumbnailProject(formData, project.slug));
        setIsLoading(false);
        toast.success("Thumbnail has been updated", {
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
    <div className="col-span-6 md:col-span-4 relative">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      <Link href={PATHS.PROJECT(project.slug)} className="w-full h-full">
        <div className="w-full h-48 md:h-72 lg:h-96 xl:h-[460px] relative cursor-pointer">
          {project.thumbnail ? (
            <Image
              src={`${SERVER_BASE_API_URL}${project.thumbnail}`}
              alt={project.slug}
              fill
            />
          ) : (
            <Image src={projectItemTestImage} alt={project.slug} fill />
          )}
        </div>
      </Link>
      {isAuth && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          className="absolute bottom-5 right-5"
          onPress={selectImage}
          isLoading={isLoading}
        >
          <Edit className="w-5 h-5" color="#1E353C" />
        </Button>
      )}
    </div>
  );
};
