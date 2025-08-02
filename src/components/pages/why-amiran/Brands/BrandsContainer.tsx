"use client";

import { Button, useDisclosure } from "@heroui/react";
import { Add } from "iconsax-react";
import {  useEffect } from "react";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import { brandsSelector } from "@/stores/why-amiran/selectors";
import { fetchBrandsAction } from "@/stores/why-amiran/actions";

//Components
import { BrandsSwiper, CreateBrandModal } from ".";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const BrandsContainer = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);
  const brands = useAppSelector(brandsSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  //Lifecycle
  useEffect(() => {
    if (!brands) {
      dispatch(fetchBrandsAction());
    }
  }, [brands]);

  return (
    <section className="">
      <h4 className="font-medium text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl">
        {t("WHY_AMIRAN.BrandsSectionTitle_Label")}
      </h4>
      {isAuth && (
        <div className="flex justify-center">
          <Button isIconOnly className="" color="primary" onPress={onOpen}>
            <Add className="w-5 h-5" color="white" />
          </Button>
        </div>
      )}
      <BrandsSwiper />
      <CreateBrandModal
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    </section>
  );
};
