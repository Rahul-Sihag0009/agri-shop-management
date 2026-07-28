function StatCard({
  title,
  value,
  icon,
  color = "bg-white",
}) {
  return (
    <div
      className={`${color} rounded-xl shadow-md p-6 transition hover:shadow-lg`}
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>
    </div>
  );
}

export default StatCard;