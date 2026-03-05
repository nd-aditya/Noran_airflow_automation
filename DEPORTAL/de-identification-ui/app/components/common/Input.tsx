import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  className?: string;
  placeholder?: string;
  registerField: UseFormRegisterReturn;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  className = "",
  placeholder = "",
  registerField,
  error = false,
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`h-10 w-full rounded-md border px-4 ${
        error ? "border-red-500" : "border-grayText"
      } ${className}`}
      {...registerField}
      {...rest}
    />
  );
};

export default Input;
