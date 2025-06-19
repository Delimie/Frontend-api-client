import React from "react";

function FormInput({name}) {
  return (
    <input
      className="border w-full rounded-md border-gray-400 p-1 px-4"
      placeholder={name}
      type="text"
    />
  );
}

export default FormInput;
