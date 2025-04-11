import { type FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import type { FormData } from "../models";
import { FormDataKeys } from "../models";
import { Fieldset } from "../components";
import { schema } from "../utils";
import { loginInterceptor } from "../utils";
import { loginService } from "../services";
import { usePrivatePage } from "../hooks";

loginInterceptor();

export const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const updateCookie = usePrivatePage();
  const onSubmit = async (data: FormData) => {
    console.log(data); // just to preserve the function contract
    try {
      const response = await loginService();
      updateCookie(response.data.token);
    } catch (e) {
      // TODO: send error to the monitoring app
      console.error(e);
    }
  };
  const [email, password] = FormDataKeys;
  return (
    <div className="w-screen h-screen flex items-center justify-center hero">
      <section className="card w-80 h-72 bg-base-100 shadow-sm hero-content">
        <h1 className="text-xl font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <Fieldset
            label="Email"
            errors={errors}
            keyInput={email}
            register={register}
          />
          <Fieldset
            label="Password"
            errors={errors}
            keyInput={password}
            register={register}
          />
          <input type="submit" className="btn btn-primary mx-3 my-2" />
        </form>
      </section>
    </div>
  );
};
