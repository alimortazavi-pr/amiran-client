//Components
import { WhyAmiranPage } from "@/components/pages/why-amiran";
import { MotionProvider } from "@/components/providers/MotionProvider";

const page = () => {
  return (
    <MotionProvider>
      <WhyAmiranPage />
    </MotionProvider>
  );
};

export default page;
