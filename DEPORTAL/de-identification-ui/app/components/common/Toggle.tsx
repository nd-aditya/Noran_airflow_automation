import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  registerField?: UseFormRegisterReturn;
  onClick?: () => void;
}

const Toggle: React.FC<InputProps> = ({
  checked = false,
  className = "",
  registerField,
  onClick,
}) => {
  return (
    <label className={`inline-flex cursor-pointer items-center ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        className="peer sr-only"
        {...registerField}
        onChange={onClick}
      />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] focus:outline-none peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 rtl:peer-checked:after:-translate-x-full"></div>
    </label>
  );
};

export default Toggle;
