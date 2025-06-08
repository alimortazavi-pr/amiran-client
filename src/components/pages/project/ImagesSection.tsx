"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";
import { ChangeEvent, FC, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "@bprogress/next/app";

//Interfaces
import { IProject } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import { upsertProjectImagesAction } from "@/stores/projects/actions";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

//Constants
import { BASE_API_URL } from "@/common/constants";

interface IProps {
  project: IProject;
}
export const ImagesSection: FC<IProps> = ({ project }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Next
  const router = useRouter();

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedWeight, setSelectedWeight] = useState<string>("");

  //Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

  //Life cycle
  const image1 = useMemo(
    () => project.images.find((hi) => hi.weight.toString() === "1"),
    [project.images]
  );
  const image2 = useMemo(
    () => project.images.find((hi) => hi.weight.toString() === "2"),
    [project.images]
  );
  const image3 = useMemo(
    () => project.images.find((hi) => hi.weight.toString() === "3"),
    [project.images]
  );
  const image4 = useMemo(
    () => project.images.find((hi) => hi.weight.toString() === "4"),
    [project.images]
  );
  const image5 = useMemo(
    () => project.images.find((hi) => hi.weight.toString() === "5"),
    [project.images]
  );
  const image6 = useMemo(
    () => project.images.find((hi) => hi.weight.toString() === "6"),
    [project.images]
  );

  //Functions
  function selectImage(weight: string) {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
    setSelectedWeight(weight);
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e?.target?.files) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("image", e?.target?.files[0]);
        await dispatch(
          upsertProjectImagesAction(project, formData, selectedWeight)
        );
        setIsLoading(false);
        toast.success("Image has been updated", {
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
    <div className="w-full md:w-auto flex-1 mb-16 md:mb-0">
      <div className="flex-1 grid grid-cols-3 grid-rows-10 gap-2 xl:gap-3 w-full h-64 px-5 md:h-96 xl:h-[500px]">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
        <div className="col-span-1 row-span-4 rounded-full relative">
          {image1 ? (
            <Image
              fill
              src={`${BASE_API_URL}${image1.url}`}
              alt="Image 1"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <Image
              fill
              src={fakeImg}
              alt="Image 1"
              className="w-full h-full object-cover rounded-full"
            />
          )}
          {isAuth && (
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="absolute top-2 right-2"
              onPress={() => selectImage("1")}
              isLoading={isLoading}
            >
              <Edit className="w-5 h-5" color="#1E353C" />
            </Button>
          )}
        </div>
        <div className="col-span-1 row-span-5 rounded-full relative">
          {image2 ? (
            <Image
              fill
              src={`${BASE_API_URL}${image2.url}`}
              alt="Image 2"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <Image
              fill
              src={fakeImg}
              alt="Image 2"
              className="w-full h-full object-cover rounded-full"
            />
          )}

          {isAuth && (
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="absolute top-2 right-2"
              onPress={() => selectImage("2")}
              isLoading={isLoading}
            >
              <Edit className="w-5 h-5" color="#1E353C" />
            </Button>
          )}
        </div>
        <div className="col-span-1 row-span-10 rounded-full relative">
          {image3 ? (
            <Image
              fill
              src={`${BASE_API_URL}${image3.url}`}
              alt="Image 3"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <Image
              fill
              src={fakeImg}
              alt="Image 3"
              className="w-full h-full object-cover rounded-full"
            />
          )}

          {isAuth && (
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="absolute top-2 right-2"
              onPress={() => selectImage("3")}
              isLoading={isLoading}
            >
              <Edit className="w-5 h-5" color="#1E353C" />
            </Button>
          )}
        </div>
        <div className="col-span-1 row-span-6 rounded-full relative">
          {image4 ? (
            <Image
              fill
              src={`${BASE_API_URL}${image4.url}`}
              alt="Image 4"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <Image
              fill
              src={fakeImg}
              alt="Image 4"
              className="w-full h-full object-cover rounded-full"
            />
          )}

          {isAuth && (
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="absolute top-2 right-2"
              onPress={() => selectImage("4")}
              isLoading={isLoading}
            >
              <Edit className="w-5 h-5" color="#1E353C" />
            </Button>
          )}
        </div>
        <div className="col-span-1 row-span-2 rounded-full relative">
          {image5 ? (
            <Image
              fill
              src={`${BASE_API_URL}${image5.url}`}
              alt="Image 5"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <Image
              fill
              src={fakeImg}
              alt="Image 5"
              className="w-full h-full object-cover rounded-full"
            />
          )}

          {isAuth && (
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="absolute top-2 right-2"
              onPress={() => selectImage("5")}
              isLoading={isLoading}
            >
              <Edit className="w-5 h-5" color="#1E353C" />
            </Button>
          )}
        </div>
        <div className="col-span-1 row-span-3 rounded-full relative">
          {image6 ? (
            <Image
              fill
              src={`${BASE_API_URL}${image6.url}`}
              alt="Image 6"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <Image
              fill
              src={fakeImg}
              alt="Image 6"
              className="w-full h-full object-cover rounded-full"
            />
          )}

          {isAuth && (
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="absolute top-2 right-2"
              onPress={() => selectImage("6")}
              isLoading={isLoading}
            >
              <Edit className="w-5 h-5" color="#1E353C" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
