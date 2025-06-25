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
  function getContentAndImage(index: number): { image: string; content: string } {
  switch (index) {
      case 0:
        return {
          image: serviceOneSVG,
          content: "Construction Management",
        };
      case 1:
        return {
          image: serviceTwoSVG,
          content: "Joint Venture Development (Construction Partnership)",
        };
      case 2:
        return {
          image: serviceThreeSVG,
          content: "Renovation and Urban Regeneration",
        };
      case 3:
        return {
          image: serviceFourSVG,
          content: "Comprehensive Building Design (BIM, Interior Architecture)",
        };
      case 4:
        return {
          image: serviceFiveSVG,
          content: "Modern Services (Smart Building Systems, Industrialized Construction)",
        };
      case 5:
        return {
          image: serviceSixSVG,
          content: "Pre-Sales (Off-Plan Sales)",
        };
      default:
        return {
          image: serviceOneSVG,
          content: "Participation in construction",
        };
    }
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-y-14 md:gap-x-6 lg:gap-x-20">
        {Array.from({ length: 6 }).map((_, index) => {
          const { content, image } = getContentAndImage(index);
          return <Item content={content} image={image} key={index} />;
        })}
      </div>
    </div>
  );
};
