import useShop from "../../hooks/useShop";

function Navbar() {
  const { data: shop } = useShop();

  return (
    <div className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-green-700">
        {shop?.shopName || "Agri Shop"}
      </h1>

      <div className="font-semibold">
        Welcome {shop?.ownerName || "Owner"} 👋
      </div>

    </div>
  );
}

export default Navbar;