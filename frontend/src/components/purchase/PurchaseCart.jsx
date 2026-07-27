function PurchaseCart({
  cart,
  updateQuantity,
  updateCostPrice,
  removeItem,
}) {

  if (cart.length === 0) {

    return (
      <div className="bg-white rounded-xl shadow p-5">

        No Products Added

      </div>
    );

  }

  return (

    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-bold mb-5">

        Purchase Cart

      </h2>

      {cart.map(item => (

        <div
          key={item.id}
          className="border-b py-4"
        >

          <h3 className="font-semibold">

            {item.productName}

          </h3>

          <div className="grid grid-cols-2 gap-3 mt-3">

            <input
              type="number"
              value={item.quantity}
              onChange={(e)=>
                updateQuantity(
                  item.id,
                  e.target.value
                )
              }
              className="border rounded p-2"
            />

            <input
              type="number"
              value={item.costPrice}
              onChange={(e)=>
                updateCostPrice(
                  item.id,
                  e.target.value
                )
              }
              className="border rounded p-2"
            />

          </div>

          <div className="flex justify-between mt-3">

            <strong>

              Total

            </strong>

            <strong>

              ₹
              {(item.quantity*item.costPrice).toFixed(2)}

            </strong>

          </div>

          <button
            onClick={()=>
              removeItem(item.id)
            }
            className="mt-3 bg-red-600 text-white px-4 py-2 rounded"
          >

            Remove

          </button>

        </div>

      ))}

    </div>

  );

}

export default PurchaseCart;