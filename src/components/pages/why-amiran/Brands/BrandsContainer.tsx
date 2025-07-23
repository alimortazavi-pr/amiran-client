"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

//Logos of brands
import chitozLogo from "@/assets/brands-logo/chitoz.png";
import dominoLogo from "@/assets/brands-logo/domino.png";
import golestanLogo from "@/assets/brands-logo/golestan.png";
import golrangLogo from "@/assets/brands-logo/golrang.png";
import kalehLogo from "@/assets/brands-logo/kaleh.png";
import karizanLogo from "@/assets/brands-logo/karizan.png";
import linaLogo from "@/assets/brands-logo/lina.png";
import myLogo from "@/assets/brands-logo/my.png";
import okalaLogo from "@/assets/brands-logo/okala.png";
import pakshumaLogo from "@/assets/brands-logo/pakshuma.png";
import parsianPartLogo from "@/assets/brands-logo/parsian-part.png";
import pasargadLogo from "@/assets/brands-logo/pasargad.png";
import ronixLogo from "@/assets/brands-logo/ronix.png";
import sabahLogo from "@/assets/brands-logo/sabah.png";
import shirinLogo from "@/assets/brands-logo/shirin.png";
import takhfifanLogo from "@/assets/brands-logo/takhfifan.png";
import tohfeLogo from "@/assets/brands-logo/tohfe.png";

export const BrandsContainer = () => {
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

  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <section className="">
      <h4 className="font-medium text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl mb-10">
        {t("WHY_AMIRAN.BrandsSectionTitle_Label")}
      </h4>
      <Swiper
        slidesPerView={isXl ? 8 : isLg ? 6 : isMd ? 5 : 3}
        grabCursor={true}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-[90px] h-[94px] lg:w-[117px] lg:h-[122px] bg-red-400 rounded-[35px] lg:rounded-[45px] flex justify-center items-center">
            <div className="relative w-11/12 h-full">
              <Image
                src={pakshumaLogo}
                fill
                alt=""
                className="object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
