function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) {
  const styles = {
    primary:
      "bg-green-600 hover:bg-green-700 text-white",

    secondary:
      "bg-gray-100 hover:bg-gray-200 text-gray-800",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        px-5
        py-2.5
        rounded-xl
        font-medium
        transition
        disabled:opacity-50
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;