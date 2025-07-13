//Interfaces
import { IContactUs } from "@/common/interfaces";

//Components
import { ContactUsPage } from "@/components/pages/contact-us";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

async function getContactUs() {
  let contactUs: IContactUs = {
    title: { en: "", fa: "" },
    description: { en: "", fa: "" },
  };
  try {
    const contactUsRes = await axiosInstance.get(
      `/layouts/description-contact-us`
    );
    contactUs = await contactUsRes.data;
  } catch (error: any) {
    console.log(error, "error");
  }

  return { contactUs };
}
export const dynamic = "force-dynamic";

const page = async () => {
  const { contactUs } = await getContactUs();

  return <ContactUsPage contactUs={contactUs} />;
};

export default page;
