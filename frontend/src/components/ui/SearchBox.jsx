import { FaSearch } from "react-icons/fa";

function SearchBox({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className="relative">

      <FaSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          pl-11
          pr-4
          py-3
          border
          rounded-xl
          focus:ring-2
          focus:ring-green-500
          outline-none
        "
      />

    </div>
  );
}

export default SearchBox;