import { Button } from "@heroui/react";
import { FC, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

//Enums
import { menuSocialMediasEnum } from "@/common/enums";

//Assets
import twitterIcon from "@/assets/svgs/menu/twitter-icon.svg";
import instagramIcon from "@/assets/svgs/menu/instagram-icon.svg";
import baleIcon from "@/assets/svgs/menu/bale-icon.svg";
import eitaaIcon from "@/assets/svgs/menu/eitaa-icon.svg";
import telegramIcon from "@/assets/svgs/menu/telegram-icon.svg";
import youtubeIcon from "@/assets/svgs/menu/youtube-icon.svg";

interface IProps {
  type: menuSocialMediasEnum;
}
export const SocialMediaItem: FC<IProps> = ({ type }) => {
  //Life cycle
  const { title, icon, link } = useMemo(() => {
    switch (type) {
      case menuSocialMediasEnum.TWITTER:
        return {
          title: "twitter",
          icon: twitterIcon,
          link: "https://x.com/amiirangroup",
        };
      case menuSocialMediasEnum.INSTAGRAM:
        return {
          title: "instagram",
          icon: instagramIcon,
          link: "https://www.instagram.com/amirangroup.co?igsh=OTd1MGJkamxkdTBo",
        };
      case menuSocialMediasEnum.TELEGRAM:
        return {
          title: "telegram",
          icon: telegramIcon,
          link: "https://t.me/amiirangroup",
        };
      case menuSocialMediasEnum.EITAA:
        return {
          title: "eitaa",
          icon: eitaaIcon,
          link: "https://eitaa.com/amiirangroup",
        };
      case menuSocialMediasEnum.BALE:
        return {
          title: "bale",
          icon: baleIcon,
          link: "https://ble.ir/amirangroup",
        };
      case menuSocialMediasEnum.YOUTUBE:
        return {
          title: "youtube",
          icon: youtubeIcon,
          link: "https://www.youtube.com/channel/UCqQh4Bx1vnVooRrf9G62rYA",
        };
      default:
        return {
          title: "",
          icon: "",
        };
    }
  }, [type]);

  return (
    <Button
      className="flex flex-col items-center p-0 min-w-0 min-h-0 w-auto h-auto rounded-full"
      variant="light"
      as={Link}
      href={link}
      target="_blank"
    >
      <div className="w-9 h-9 relative opacity-20">
        <Image src={icon} alt={title} fill />
      </div>
    </Button>
  );
};
