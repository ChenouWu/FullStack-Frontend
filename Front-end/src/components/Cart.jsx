import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { data, Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const getCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first.");
        return;
      }

      const response = await axios.get("https://fullstack-backend-1-gnx5.onrender.com/api/cart/getcart", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setCartItems(response.data.cart || []);

    } catch (error) {
      console.error("❌ Error fetching cart:", error);
      alert("Failed to load cart. Please try again.");
    }
  };

  useEffect(() => {
    getCart();
},[]);  

const subtotal = cartItems?.reduce((sum, item) => {
  const price = item.productId?.price || 0;  
  const quantity = item.quantity || 0;      
  return sum + price * quantity;
}, 0) || 0;  
  


const updateQuantity = async (productId, change) => {
  setCartItems(prevCart =>
      prevCart.map(item =>
          item.productId._id === productId
              ? { ...item, quantity: Math.max(item.quantity + change, 0) }
              : item
      ).filter(item => item.quantity > 0)  // 过滤掉数量为 0 的商品
  );

  try {
      const token = localStorage.getItem("token");
      if (!token) {
          alert("Please login first.");
          return;
      }

      await axios.post(
          "https://fullstack-backend-1-gnx5.onrender.com/api/cart/updateQuantity",
          { productId, change },
          {
              headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
              },
          }
      );

      console.log("✅ Updated quantity on backend");

  } catch (error) {
      console.error("❌ Error updating quantity:", error);
      alert("Failed to update cart item.");
  }
};

  
  const removeItem = async (productId) => {
    try {

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first.");
        return;
      }

      const response = await axios.delete(
        "https://fullstack-backend-1-gnx5.onrender.com/api/cart/deleteItem",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: {productId}
        },
      );

      console.log("✅ Item removed from cart:", response.data);
      setCartItems(response.data.cart || []); 
    } catch (error) {
      console.error("❌ Error removing item:", error);
      alert("Failed to remove item from cart.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
        </div>
        <div className="border-t border-gray-200">
          {cartItems.length === 0 ? (
            <p className="text-center py-8 text-gray-500">Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.productId._id} className="flex py-6 px-4 sm:px-6">
                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                    <img src={item.productId.image}/>
                  </div>
                  <div className="ml-4 flex-1 flex flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.productId.name}</h3>
                        <p className="ml-4">${(item.productId.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">${(item.productId.price).toFixed(2  )} each</p>
                    </div>
                    <div className="flex-1 flex items-end justify-between text-sm">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.productId._id, -1)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <FaMinus className="h-4 w-4" />
                        </button>
                        <span className="mx-2 text-gray-700">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId._id, 1)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <FaPlus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId._id)}
                          className="font-medium text-black hover:text-gray-700"
                        >
                          <FaTrash className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>Subtotal: ${subtotal ? subtotal.toFixed(2) : "0.00"}</p>
            </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <Link to="/checkout">
              <button className="w-full bg-black border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                Checkout
              </button>
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
            <p>
              or{" "}
              <Link to="/products" className="text-black font-medium hover:text-gray-700">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
