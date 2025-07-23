"use client";

import { ChangeEvent, FC, useMemo, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";
import { toast } from "react-toastify";
import { useRouter } from "@bprogress/next/app";
import Image from "next/image";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import { upsertEmployerImageAction } from "@/stores/duty/actions";
import { employersImagesSelector } from "@/stores/duty/selectors";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

//Constants
import { BASE_API_URL } from "@/common/constants";

interface IProps {
  index: number;
}
export const ExperiencedItem: FC<IProps> = ({ index }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);
  const employersImages = useAppSelector(employersImagesSelector);

  //Next
  const router = useRouter();

  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

  //LifeCycle
  const image = useMemo(
    () =>
      employersImages?.find(
        (ei) => ei.weight.toString() === (index + 1).toString()
      ),
    [employersImages]
  );

  const isMdCheck = useMemo(() => {
    if (isMd && index < 5) {
      return "rounded-t-full aspect-square";
    } else if (isMd && index > 7) {
      return "rounded-b-full aspect-square";
    } else if (!isMd && index < 3) {
      return "rounded-t-full aspect-square";
    } else if (!isMd && index > 9) {
      return "rounded-b-full aspect-square";
    } else {
      return "aspect-square md:aspect-auto md:h-full";
    }
  }, [isMd, index]);

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
        formData.append("image", e?.target?.files[0]);
        await dispatch(
          upsertEmployerImageAction(formData, (index + 1).toString(), !!image)
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
    <div className="col-span-1 relative">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      <div className={`w-full ${isMdCheck} relative`}>
        {image ? (
          <Image
            fill
            src={`${BASE_API_URL}${image.url}`}
            alt={`Image ${index}`}
            className={`w-full ${isMdCheck} object-cover`}
          />
        ) : (
          <Image
            fill
            src={fakeImg}
            alt={`Image ${index}`}
            className={`w-full ${isMdCheck} object-cover`}
          />
        )}
      </div>
      {isAuth && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          className="absolute top-2 right-2"
          onPress={selectImage}
          isLoading={isLoading}
        >
          <Edit className="w-5 h-5" color="#1E353C" />
        </Button>
      )}
    </div>
  );
};
