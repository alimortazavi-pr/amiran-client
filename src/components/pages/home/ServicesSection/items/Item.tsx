import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import Image from "next/image";
import { FC } from "react";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  image: string;
  content: string;
}
export const Item: FC<IProps> = ({ content, image }) => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="col-span-12 md:col-span-6">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-20 h-20 lg:w-40 lg:h-40 xl:w-52 xl:h-52 2xl:w-64 2xl:h-64">
          <Image src={image} alt="service one" fill />
        </div>
        <Popover>
          <PopoverTrigger>
            <span className="text-primary/20 text-[10px] lg:text-lg xl:text-xl 2xl:text-2xl border p-1 lg:p-2 xl:px-3 2xl:px-4 border-primary/20 rounded-full text-center truncate w-[150px] md:w-[200px] lg:w-[280px] xl:w-[350px] 2xl:w-[370px] cursor-pointer">
              {t(content)}
            </span>
          </PopoverTrigger>
          <PopoverContent>
            <p>{t(content)}</p>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
