import { Label } from "components/label";
import React from "react";

const Input = ({ placeholder, label, type = "text", register, ...props }) => {
	return (
		<>
      <Label>{label}</Label>
      <input
        {...props}
        type={type}
        id={label}
        {...register(label)}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full p-3 mb-4 transition-all border border-gray-300 rounded-md outline-none focus:border-pink-500"
      />
    </>
	);
};

export default Input;
