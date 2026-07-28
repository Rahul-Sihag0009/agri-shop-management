import { FaBoxOpen } from "react-icons/fa";

function EmptyState({
  title = "No Data Found",
  description = "There is nothing to display.",
}) {
  return (
    <div className="text-center py-16">

      <FaBoxOpen
        className="
          text-6xl
          text-gray-300
          mx-auto
          mb-5
        "
      />

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="text-gray-500 mt-2">
        {description}
      </p>

    </div>
  );
}

export default EmptyState;