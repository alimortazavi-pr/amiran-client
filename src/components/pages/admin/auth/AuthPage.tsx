//Components
import { AuthForm } from ".";

export const AuthPage = () => {
  return (
    <div className="w-screen h-dvh flex items-center justify-center">
      <div className="p-5 bg-primary-100 rounded-xl">
        <p className="mb-5 font-medium">
          Enter your username and password to login.
        </p>
        <AuthForm />
      </div>
    </div>
  );
};
