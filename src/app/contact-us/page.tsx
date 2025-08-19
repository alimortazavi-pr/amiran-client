//Interfaces
import { IContactUs } from "@/common/interfaces";

//Components
import { ContactUsPage } from "@/components/pages/contact-us";
import { MotionProvider } from "@/components/providers/MotionProvider";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

async function getContactUs() {
  let contactUs: IContactUs = {
    title: { en: "", fa: "" },
    description: { en: "", fa: "" },
    instagram: { en: "", fa: "" },
    address: { en: "", fa: "" },
    phones: { en: "", fa: "" },
  };
  try {
    const descriptionContactUsRes = await axiosInstance.get(
      `/layouts/description-contact-us`
    );
    const contactUsRes = await axiosInstance.get(`/layouts/contact-us`);
    contactUs = {
      ...(await descriptionContactUsRes.data),
      ...(await contactUsRes.data),
    };
  } catch (error: any) {
    console.log(error, "error");
  }

  return { contactUs };
}
export const dynamic = "force-dynamic";

const page = async () => {
  const { contactUs } = await getContactUs();

  return (
    <MotionProvider>
      <ContactUsPage contactUs={contactUs} />
    </MotionProvider>
  );
};

export default page;
