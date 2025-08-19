import { AuthPage } from "@/components/pages/admin/auth";
import { MotionProvider } from "@/components/providers/MotionProvider";

const page = () => {
  return (
    <MotionProvider>
      <AuthPage />
    </MotionProvider>
  );
};

export default page;
