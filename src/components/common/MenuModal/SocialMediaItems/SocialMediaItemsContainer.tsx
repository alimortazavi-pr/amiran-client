//Enums
import { menuSocialMediasEnum } from "@/common/enums";

//Components
import { SocialMediaItem } from ".";

export const SocialMediaItemsContainer = () => {
  return (
    <div className="flex items-center justify-between gap-x-1">
      <SocialMediaItem type={menuSocialMediasEnum.INSTAGRAM} />
      <SocialMediaItem type={menuSocialMediasEnum.BALE} />
      <SocialMediaItem type={menuSocialMediasEnum.EITAA} />
      <SocialMediaItem type={menuSocialMediasEnum.TELEGRAM} />
      <SocialMediaItem type={menuSocialMediasEnum.YOUTUBE} />
      <SocialMediaItem type={menuSocialMediasEnum.TWITTER} />
    </div>
  );
};
