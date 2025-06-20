import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import axios from "axios";
import Button from "../../components/form/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validator";
import { actionRegister } from "../../api/auth";

function Register() {
  //JS
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { isSubmitting, errors } = formState;

  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const res = await actionRegister(value);
      createAlert("success", res.data.message);
      // console.log(res);
      reset()
    } catch (error) {
      console.log(error);
      createAlert("info", error.response?.data?.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      <div className="border w-64 h-3/5 p-4 m-4 rounded-md">
        <h1 className="font-bold text-center pb-3 text-2xl text-rose-400">
          Register
        </h1>

        {/* {from} */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex gap-4 flex-col">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput register={register} name="name" errors={errors} />
            <FormInput
              register={register}
              name="password"
              errors={errors}
              type="password"
            />
            <FormInput
              register={register}
              name="confirmassword"
              errors={errors}
              type="password"
            />
          </div>

          <Button isSubmitting={isSubmitting} Label={"Register"} />
        </form>
      </div>
    </div>
  );
}

export default Register;
