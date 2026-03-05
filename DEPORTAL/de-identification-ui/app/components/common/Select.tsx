import React, { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { BiChevronDown } from "react-icons/bi";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[]; // Array of options for the select dropdown
  placeholder?: string;
  registerField?: UseFormRegisterReturn; // react-hook-form's register field
  error?: boolean; // Whether the input has an error
  className?: string;
  selectClassName?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
  registerField,
  error = false,
  className = "",
  selectClassName = "",
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <select
        className={`border-grayText h-10 w-full appearance-none rounded-[4px] border px-4 pr-8 text-sm text-secText ${
          error ? "border-red-500" : "border-grayText"
        } ${selectClassName}`}
        {...registerField}
        {...props} // Include any standard select attributes
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <BiChevronDown className="text-grayText pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
    </div>
  );
};

export default Select;
