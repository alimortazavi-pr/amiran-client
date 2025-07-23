"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "@bprogress/next/app";
import { Trash } from "iconsax-react";
import { Button } from "@heroui/react";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { brandsSelector } from "@/stores/why-amiran/selectors";
import { hardDeleteBrandAction } from "@/stores/layouts/actions";
import { isAuthSelector } from "@/stores/auth/selectors";

//Constants
import { SERVER_BASE_API_URL } from "@/common/constants";

export const BrandsSwiper = () => {
  //Redux
  const dispatch = useAppDispatch();
  const brands = useAppSelector(brandsSelector);
  const isAuth = useAppSelector(isAuthSelector);

  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isXl = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  //Next
  const router = useRouter();

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Functions
  async function deleteBrandHandler(brandId: string) {
    setIsLoading(true);
    try {
      await dispatch(hardDeleteBrandAction(brandId));
      setIsLoading(false);
      toast.success(`Plan has been uploaded`, {
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

  return (
    <Swiper
      slidesPerView={isXl ? 8 : isLg ? 6 : isMd ? 5 : 3}
      grabCursor={true}
      freeMode={true}
      modules={[FreeMode, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mt-10"
    >
      {brands?.map((brand) => (
        <SwiperSlide key={brand._id}>
          <div className="w-[90px] h-[94px] lg:w-[117px] lg:h-[122px] rounded-[35px] lg:rounded-[45px] flex justify-center items-center">
            <div className="relative w-11/12 h-full">
              <Image
                src={`${SERVER_BASE_API_URL}${brand.image}`}
                fill
                alt=""
                className="object-contain"
              />
              {isAuth && (
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  className="absolute top-2 start-2 z-10"
                  color="danger"
                  isLoading={isLoading}
                  onPress={() => deleteBrandHandler(brand._id)}
                >
                  <Trash className="w-5 h-5" color="red" />
                </Button>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
