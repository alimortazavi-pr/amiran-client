"use client";

import { Button, Input } from "@heroui/react";
import { Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

//Types
import { ILoginForm } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/stores/hooks";

//Validators
import { loginValidator } from "@/common/validators";
import { loginAction } from "@/stores/auth/actions";

export const AuthForm = () => {
  //Redux
  const dispatch = useAppDispatch();

  //Next
  const router = useRouter();

  //Formik
  const initialLoginFrom: ILoginForm = {
    username: "",
    password: "",
  };

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Functions
  async function formSubmitHandler(values: ILoginForm) {
    setIsLoading(true);
    try {
      await dispatch(loginAction(values));
      setIsLoading(false);
      toast.success("Login has been successfully", {
        position: "top-center",
      });
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
      });
      setIsLoading(false);
    }
  }

  return (
    <Formik
      onSubmit={formSubmitHandler}
      initialValues={initialLoginFrom}
      validationSchema={loginValidator}
    >
      {({
        handleSubmit,
        touched,
        errors,
        handleBlur,
        handleChange,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Username"
            className="mb-2"
            name="username"
            isInvalid={touched.username && errors.username ? true : false}
            color={touched.username && errors.username ? "danger" : undefined}
            errorMessage={
              touched.username && errors.username ? errors.username : undefined
            }
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.username}
          />
          <Input
            type="password"
            label="Password"
            className="mb-2"
            name="password"
            isInvalid={touched.password && errors.password ? true : false}
            color={touched.password && errors.password ? "danger" : undefined}
            errorMessage={
              touched.password && errors.password ? errors.password : undefined
            }
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
          />
          <div className="mt-4">
            <Button
              type="submit"
              className="w-full"
              isDisabled={isLoading}
              isLoading={isLoading}
              color="primary"
              size="lg"
            >
              Login
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};
