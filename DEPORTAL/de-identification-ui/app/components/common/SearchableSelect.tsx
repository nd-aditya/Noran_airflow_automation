import React from "react";
import Select from "react-select";

export interface SearchableSelectOption {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  options: SearchableSelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isDisabled?: boolean;
  className?: string;
  error?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  menuPlacement?: "auto" | "bottom" | "top"; // "top" by default to prevent layout breaking
}

export default function SearchableSelect({
  options,
  value,
  onChange,
  placeholder = "Select...",
  isDisabled = false,
  className = "",
  error = false,
  isClearable = true,
  isMulti = false,
  menuPlacement = "top", // Changed default from "auto" to "top"
}: SearchableSelectProps) {
  const selectedOption = options.find(option => option.value === value);

  const handleChange = (selected: any) => {
    if (isMulti) {
      onChange(selected ? selected.map((s: any) => s.value) : []);
    } else {
      onChange(selected ? selected.value : "");
    }
  };

  return (
    <div className={`${className} relative`}>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isClearable={isClearable}
        isMulti={isMulti}
        menuPlacement={menuPlacement}
        menuPosition="fixed"
        menuShouldScrollIntoView={false}
        className="text-sm"
        classNamePrefix="select"
        styles={{
          control: (provided, state) => ({
            ...provided,
            minHeight: "40px",
            borderColor: error ? "#ef4444" : state.isFocused ? "#3b82f6" : "#d1d5db",
            boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
            "&:hover": {
              borderColor: error ? "#ef4444" : "#9ca3af",
            },
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected 
              ? "#3b82f6" 
              : state.isFocused 
              ? "#f3f4f6" 
              : "white",
            color: state.isSelected ? "white" : "#374151",
            "&:active": {
              backgroundColor: "#3b82f6",
            },
          }),
          menu: (provided) => ({
            ...provided,
            zIndex: 9999,
            position: "absolute",
            width: "100%",
            minWidth: "200px",
            marginTop: 0,
            marginBottom: 0,
          }),
          menuList: (provided) => ({
            ...provided,
            maxHeight: "200px",
            overflow: "auto",
          }),
        }}
      />
    </div>
  );
}
