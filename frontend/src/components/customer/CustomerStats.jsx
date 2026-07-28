import Card from "../ui/Card";
import { FaUsers, FaUserPlus, FaPhone } from "react-icons/fa";

function CustomerStats({ customers }) {
  const total = customers.length;

  const withPhone = customers.filter(c => c.phone).length;

  const newCustomers = customers.filter(c => {
    const created = new Date(c.createdAt);
    const now = new Date();

    return (
      created.getMonth() === now.getMonth() &&
      created.getFullYear() === now.getFullYear()
    );
  }).length;

  const stats = [
    {
      title: "Total Customers",
      value: total,
      icon: <FaUsers className="text-2xl text-green-600" />,
    },
    {
      title: "New This Month",
      value: newCustomers,
      icon: <FaUserPlus className="text-2xl text-blue-600" />,
    },
    {
      title: "Phone Numbers",
      value: withPhone,
      icon: <FaPhone className="text-2xl text-orange-600" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
      {stats.map((item) => (
        <Card key={item.title}>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">{item.title}</p>
              <h2 className="text-3xl font-bold mt-2">
                {item.value}
              </h2>
            </div>

            {item.icon}
          </div>
        </Card>
      ))}
    </div>
  );
}

export default CustomerStats;