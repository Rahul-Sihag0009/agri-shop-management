import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = React.forwardRef(
  ({ label, type = "text", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

const inputType =
  type === "password"
    ? (showPassword ? "text" : "password")
    : type;
    return (
      <div>
        <label className="block mb-1 font-medium">
          {label}
        </label>

        <div className="relative">
  <input
    ref={ref}
    type={inputType}
    {...props}
    className="w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
  />

  {type === "password" && (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  )}
</div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;