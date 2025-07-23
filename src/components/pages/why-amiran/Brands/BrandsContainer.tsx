"use client";

import { Button } from "@heroui/react";
import { Add } from "iconsax-react";
import { toast } from "react-toastify";
import { useRouter } from "@bprogress/next/app";
import { ChangeEvent, useEffect, useRef, useState } from "react";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import { uploadBrandAction } from "@/stores/layouts/actions";
import { brandsSelector } from "@/stores/why-amiran/selectors";
import { fetchBrandsAction } from "@/stores/why-amiran/actions";

//Components
import { BrandsSwiper } from ".";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const BrandsContainer = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);
  const brands = useAppSelector(brandsSelector);

  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  //Next
  const router = useRouter();

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

  //Lifecycle
  useEffect(() => {
    if (!brands) {
      dispatch(fetchBrandsAction());
    }
  }, [brands]);

  //Functions
  function createBrand() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e?.target?.files) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("brand", e?.target?.files[0]);
        await dispatch(uploadBrandAction(formData));
        setIsLoading(false);
        toast.success("Brand has been uploaded", {
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
    <section className="">
      <h4 className="font-medium text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl">
        {t("WHY_AMIRAN.BrandsSectionTitle_Label")}
      </h4>
      {isAuth && (
        <div className="flex justify-center">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
          <Button
            isIconOnly
            className=""
            color="primary"
            isLoading={isLoading}
            onPress={createBrand}
          >
            <Add className="w-5 h-5" color="white" />
          </Button>
        </div>
      )}
      <BrandsSwiper />
    </section>
  );
};
