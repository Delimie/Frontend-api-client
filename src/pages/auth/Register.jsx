import React from "react";
import FormInput from "../../components/form/FormInput";

function Register() {
  return (
    <div className="flex w-full h-full justify-end">
      <div className="border w-64 h-[300px] p-4 m-4 rounded-md">
        <h1 className="font-bold text-center">Register</h1>

        {/* {from} */}
        <form>
          <div className="flex gap-4 flex-col">
            <FormInput name="email" />
            <FormInput name="name" />
            <FormInput name="password" />
            <FormInput name="confirmpassword" />
          </div>

          <div className="flex justify-center mt-4">

            <button className="bg-pink-500 text-white p-1 px-2 rounded-md">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
