"use client";

import Image from "next/image";
import { Button, useDisclosure } from "@heroui/react";
import { Edit } from "iconsax-react";
import { FC } from "react";

//Interfaces
import { IDuty } from "@/common/interfaces";

//Redux
import { useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";

//Components
import { EditWorkProcessModal } from ".";

//Assets
import chartImg from "@/assets/svgs/duty/chart.svg";
import { BASE_API_URL } from "@/common/constants";

interface IProps {
  duty: IDuty;
}
export const WorkProcessImage: FC<IProps> = ({ duty }) => {
  //Redux
  const isAuth = useAppSelector(isAuthSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <div className="flex justify-center">
      <div className="relative w-full h-52 md:h-60 lg:h-64 xl:h-72 2xl:h-80 mb-16">
        {duty.workProcessImage ? (
          <Image
            src={`${BASE_API_URL}${duty.workProcessImage}`}
            alt={`${duty.workProcessTitle.en} - ${duty.workProcessTitle.fa}`}
            fill
            className="object-contain"
          />
        ) : (
          <Image src={chartImg} alt="amiran-logo" fill />
        )}
        {isAuth && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className="absolute start-8 bottom-0 z-10"
            onPress={onOpen}
          >
            <Edit className="w-5 h-5" color="#1E353C" />
          </Button>
        )}
      </div>
      <EditWorkProcessModal
        duty={duty}
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};
