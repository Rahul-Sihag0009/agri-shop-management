import Layout from "../../components/layout/Layout";

const cards = [
  {
    title: "Today's Sales",
    value: "₹0",
  },
  {
    title: "Products",
    value: "0",
  },
  {
    title: "Low Stock",
    value: "0",
  },
  {
    title: "Revenue",
    value: "₹0",
  },
];

function Dashboard() {
  return (
    <Layout>

      <h2 className="text-3xl font-bold mb-8">

        Dashboard

      </h2>

      <div className="grid grid-cols-4 gap-6">

        {cards.map((card) => (

          <div
            key={card.title}
            className="bg-white rounded-xl shadow p-6"
          >

            <p className="text-gray-500">

              {card.title}

            </p>

            <h2 className="text-3xl font-bold text-green-700 mt-3">

              {card.value}

            </h2>

          </div>

        ))}

      </div>

    </Layout>
  );
}

export default Dashboard;