import Card from "./Card";

function StatCard({ title, value, icon, color }) {
  return (
    <Card>

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-gray-500 text-sm">
            {title}
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            {value}
          </h1>

        </div>

        <div
          className={`text-4xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </Card>
  );
}

export default StatCard;