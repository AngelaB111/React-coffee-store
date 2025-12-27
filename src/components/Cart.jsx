import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty 🛒</h2>
        <p className="text-gray-600 mb-4">
          Looks like you haven’t added anything yet.
        </p>
        <Link
          to="/"
          className="bg-[#774b31] text-white px-6 py-2 rounded-lg hover:bg-[#633628]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.item_id}
                className="flex gap-4 bg-white rounded-xl shadow p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">
                    {item.description}
                  </p>
                  <p className="font-semibold text-[#774b31]">${item.price}</p>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <button
                    onClick={() => removeFromCart(item.item_id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>

                  <span className="text-sm text-gray-600">
                    Qty: {item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2 text-gray-700">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-4 text-gray-900 font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-[#774b31] text-white py-3 rounded-lg hover:bg-[#633628] mb-3">
              Proceed to Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-50"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
