import React, { useState,useEffect } from "react"
import { FaShoppingCart } from "react-icons/fa"
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";
function Products() {
  
    const { token } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://fullstack-backend-1-gnx5.onrender.com/api/cart/getallItems");
                console.log("✅ Products Data:", response.data); 
                setProducts(response.data.products);
            } catch (error) {
                console.error("❌ Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

  const addToCart = async (item) => {
    if (!token) {
      toast.warning("Please Log in first")
        return;
    }
    try {
        const response = await axios.post(
            "https://fullstack-backend-1-gnx5.onrender.com/api/cart/add",
            { item },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("✅ Cart updated:", response.data);
        toast.success("✅ Item added to cart!");
    } catch (error) {
        console.error("❌ Error adding to cart:", error);
        toast.warning("Failed to add item to cart.");
    }
};


  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image || "items.png"} alt={item.name} className="object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button onClick={()=> addToCart(item)}  className="bg-black text-white px-4 py-2 rounded-md flex items-center hover:bg-gray-800 transition-colors duration-300">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products

