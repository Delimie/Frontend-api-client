import React from "react";
import { useForm } from "react-hook-form";

function FormInput({ name, register, errors ,type ="text"}) {
  console.log(errors)
  return (
    <div>
      <input
        className="border w-full rounded-md border-gray-400 p-1 px-4"
        placeholder={name}
        {...register(name)}
        type={type}
      />

    <p>
      {
        errors[name] && <p className="text-red-500 text-sm">{errors[name].message}</p>
      }
    </p>
    </div>
  );
}

export default FormInput;
