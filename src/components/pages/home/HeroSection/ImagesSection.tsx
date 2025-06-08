"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { heroImagesSelector } from "@/stores/home/selectors";
import { isAuthSelector } from "@/stores/auth/selectors";
import {
  fetchHeroImagesAction,
  upsertHeroImageAction,
} from "@/stores/home/actions";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

//Constants
import { SERVER_BASE_API_URL } from "@/common/constants";

export const ImagesSection = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);
  const heroImages = useAppSelector(heroImagesSelector);

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedWeight, setSelectedWeight] = useState<string>("");
  const [isExist, setIsExist] = useState<boolean>(false);

  //Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

  //Life cycle
  useEffect(() => {
    if (!heroImages?.length) {
      fetchHeroImages();
    }
  }, [heroImages]);

  const image1 = useMemo(
    () => heroImages.find((hi) => hi.weight.toString() === "1"),
    [heroImages]
  );
  const image2 = useMemo(
    () => heroImages.find((hi) => hi.weight.toString() === "2"),
    [heroImages]
  );
  const image3 = useMemo(
    () => heroImages.find((hi) => hi.weight.toString() === "3"),
    [heroImages]
  );
  const image4 = useMemo(
    () => heroImages.find((hi) => hi.weight.toString() === "4"),
    [heroImages]
  );
  const image5 = useMemo(
    () => heroImages.find((hi) => hi.weight.toString() === "5"),
    [heroImages]
  );
  const image6 = useMemo(
    () => heroImages.find((hi) => hi.weight.toString() === "6"),
    [heroImages]
  );

  //Functions
  function fetchHeroImages() {
    try {
      dispatch(fetchHeroImagesAction());
    } catch (error) {
      console.log(error);
    }
  }

  function selectImage(weight: string, isExistCheck: boolean = false) {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
    setSelectedWeight(weight);
    setIsExist(isExistCheck);
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e?.target?.files) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("image", e?.target?.files[0]);
        await dispatch(
          upsertHeroImageAction(formData, selectedWeight, isExist)
        );
        setIsLoading(false);
        toast.success("Image has been updated", {
          position: "top-center",
        });
      } catch (error: any) {
        toast.error(error.message, {
          position: "top-center",
        });
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="md:md:col-span-5 mb-12 md:mb-0 w-full max-w-[326px] md:max-w-full">
      <div className="flex-1 grid grid-cols-3 grid-rows-10 gap-2 xl:gap-3 w-full h-60 px-8 md:px-0 lg:h-96 xl:h-[500px]">
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
              src={`${SERVER_BASE_API_URL}${image1.url}`}
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
              onPress={() => selectImage("1", !!image1)}
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
              src={`${SERVER_BASE_API_URL}${image2.url}`}
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
              onPress={() => selectImage("2", !!image2)}
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
              src={`${SERVER_BASE_API_URL}${image3.url}`}
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
              onPress={() => selectImage("3", !!image3)}
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
              src={`${SERVER_BASE_API_URL}${image4.url}`}
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
              onPress={() => selectImage("4", !!image4)}
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
              src={`${SERVER_BASE_API_URL}${image5.url}`}
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
              onPress={() => selectImage("5", !!image5)}
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
              src={`${SERVER_BASE_API_URL}${image6.url}`}
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
              onPress={() => selectImage("6", !!image6)}
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
