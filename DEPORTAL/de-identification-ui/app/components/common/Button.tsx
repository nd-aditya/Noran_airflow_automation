import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: string;
  loading?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  loading = false,
  ...rest
}: ButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return loading
          ? "cursor-not-allowed bg-gray-400 text-white"
          : "border-primary bg-primary text-white hover:bg-transparent hover:text-primary active:shadow-sm";
      case "secondary":
        return loading
          ? "cursor-not-allowed bg-gray-400 text-white"
          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:shadow-sm";
      case "danger":
        return loading
          ? "cursor-not-allowed bg-gray-400 text-white"
          : "border-red-600 bg-red-600 text-white hover:bg-transparent hover:text-red-600 active:shadow-sm";
      default:
        return loading
          ? "cursor-not-allowed bg-gray-400 text-white"
          : "border-primary bg-primary text-white hover:bg-transparent hover:text-primary active:shadow-sm";
    }
  };

  return (
    <button
      className={`border px-8 py-2 transition-all duration-200 disabled:pointer-events-none disabled:border-gray-300 disabled:bg-gray-300 rounded-full ${getVariantClasses()} ${className}`}
      disabled={loading || rest.disabled}
      {...rest}
    >
      {loading ? <div className="loader"></div> : children}
    </button>
  );
}
