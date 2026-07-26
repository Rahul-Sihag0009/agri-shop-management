function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;