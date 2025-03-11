//Enums
import { menuSocialMediasEnum } from "@/common/enums";

//Components
import { SocialMediaItem } from ".";

export const SocialMediaItemsContainer = () => {
  return (
    <div className="flex items-center justify-between gap-x-1">
      <SocialMediaItem type={menuSocialMediasEnum.TWITTER} />
      <SocialMediaItem type={menuSocialMediasEnum.INSTAGRAM} />
      <SocialMediaItem type={menuSocialMediasEnum.LINKEDIN} />
      <SocialMediaItem type={menuSocialMediasEnum.WHATSAPP} />
      <SocialMediaItem type={menuSocialMediasEnum.DRIBBBLE} />
      <SocialMediaItem type={menuSocialMediasEnum.YOUTUBE} />
    </div>
  );
};
