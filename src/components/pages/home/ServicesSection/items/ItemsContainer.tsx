//Assets
import serviceOneSVG from "@/assets/svgs/services/service_1.svg";
import serviceTwoSVG from "@/assets/svgs/services/service_2.svg";
import serviceThreeSVG from "@/assets/svgs/services/service_3.svg";
import serviceFourSVG from "@/assets/svgs/services/service_4.svg";
import serviceFiveSVG from "@/assets/svgs/services/service_5.svg";
import serviceSixSVG from "@/assets/svgs/services/service_6.svg";

//Components
import { Item } from ".";

export const ItemsContainer = () => {
  //Function
  function getContentAndImage(index: number): {
    image: string;
    content: string;
  } {
    switch (index) {
      case 0:
        return {
          image: serviceOneSVG,
          content: "HOME.SERVICES.ServiceItem1_Label",
        };
      case 1:
        return {
          image: serviceTwoSVG,
          content: "HOME.SERVICES.ServiceItem2_Label",
        };
      case 2:
        return {
          image: serviceThreeSVG,
          content: "HOME.SERVICES.ServiceItem3_Label",
        };
      case 3:
        return {
          image: serviceFourSVG,
          content: "HOME.SERVICES.ServiceItem4_Label",
        };
      case 4:
        return {
          image: serviceFiveSVG,
          content: "HOME.SERVICES.ServiceItem5_Label",
        };
      case 5:
        return {
          image: serviceSixSVG,
          content: "HOME.SERVICES.ServiceItem6_Label",
        };
      default:
        return {
          image: serviceOneSVG,
          content: "HOME.SERVICES.ServiceItem1_Label",
        };
    }
  }

  return (
    <div className="col-span-7 md:col-span-8">
      <div className="grid grid-cols-12 gap-y-14">
        {Array.from({ length: 6 }).map((_, index) => {
          const { content, image } = getContentAndImage(index);
          return <Item content={content} image={image} key={index} />;
        })}
      </div>
    </div>
  );
};
