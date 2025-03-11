import { Button } from "@heroui/react";
import { FC, useMemo } from "react";
import Image from "next/image";

//Enums
import { menuSocialMediasEnum } from "@/common/enums";

//Assets
import twitterIcon from "@/assets/svgs/menu/twitter-icon.svg";
import instagramIcon from "@/assets/svgs/menu/instagram-icon.svg";
import linkedinIcon from "@/assets/svgs/menu/linkedin-icon.svg";
import whatsappIcon from "@/assets/svgs/menu/whatsapp-icon.svg";
import dribbbleIcon from "@/assets/svgs/menu/dribbble-icon.svg";
import youtubeIcon from "@/assets/svgs/menu/youtube-icon.svg";

interface IProps {
  type: menuSocialMediasEnum;
}
export const SocialMediaItem: FC<IProps> = ({ type }) => {
  //Life cycle
  const { title, icon } = useMemo(() => {
    switch (type) {
      case menuSocialMediasEnum.TWITTER:
        return {
          title: "twitter",
          icon: twitterIcon,
        };
      case menuSocialMediasEnum.INSTAGRAM:
        return {
          title: "instagram",
          icon: instagramIcon,
        };
      case menuSocialMediasEnum.LINKEDIN:
        return {
          title: "linkedin",
          icon: linkedinIcon,
        };
      case menuSocialMediasEnum.WHATSAPP:
        return {
          title: "whatsapp",
          icon: whatsappIcon,
        };
      case menuSocialMediasEnum.DRIBBBLE:
        return {
          title: "dribbble",
          icon: dribbbleIcon,
        };
      case menuSocialMediasEnum.YOUTUBE:
        return {
          title: "youtube",
          icon: youtubeIcon,
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
    >
      <div className="w-9 h-9 relative opacity-20">
        <Image src={icon} alt={title} fill />
      </div>
    </Button>
  );
};
