import React from "react";

const Input = React.forwardRef(
  ({ label, type = "text", ...props }, ref) => {
    return (
      <div>
        <label className="block mb-1 font-medium">
          {label}
        </label>

        <input
          ref={ref}
          type={type}
          step={type === "number" ? "0.01" : undefined}
          {...props}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;