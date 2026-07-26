import CartItem from "./CartItem";

function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
}) {
  return (
    <div className="bg-white rounded shadow p-4">

      <h2 className="text-xl font-bold mb-4">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p>No products added.</p>
      ) : (
        <table className="w-full">

          <thead>

            <tr className="bg-green-600 text-white">

              <th className="p-3">Product</th>

              <th>Price</th>

              <th>Qty</th>

              <th>Total</th>

              <th></th>

            </tr>

          </thead>

          <tbody>

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeItem={removeItem}
              />
            ))}

          </tbody>

        </table>
      )}

    </div>
  );
}

export default Cart;