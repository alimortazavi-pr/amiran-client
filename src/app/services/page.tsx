//Components
import { ServicesPage } from "@/components/pages/services";
import { MotionProvider } from "@/components/providers/MotionProvider";

const page = () => {
  return (
    <MotionProvider>
      <ServicesPage />
    </MotionProvider>
  );
};

export default page;
