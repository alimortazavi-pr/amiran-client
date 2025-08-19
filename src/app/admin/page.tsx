import { AdminPage } from "@/components/pages/admin";
import { MotionProvider } from "@/components/providers/MotionProvider";

const page = () => {
  return (
    <MotionProvider>
      <AdminPage />
    </MotionProvider>
  );
};

export default page;
