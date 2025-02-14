import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUser, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify"; // Add react-toastify for modern logout feedback

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    toast.info("👋 Logged out successfully!");
  };

  return (
    <header>
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2.5 text-center text-sm font-medium">
        Free shipping on orders over $50 | Shop Now
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                STORE
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
                <Link to="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-gray-700 hover:text-gray-900">
                <FaSearch className="h-5 w-5" />
              </button>

              {isLoggedIn ? (
                // Show Logout button when logged in
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-gray-900 flex items-center space-x-2"
                >
                  <FaSignOutAlt className="h-5 w-5" />
                  <span className="hidden md:inline">Log Out</span>
                </button>
              ) : (
                // Show Login button when logged out
                <button className="text-gray-700 hover:text-gray-900">
                  <Link to="/login">
                    <FaUser className="h-5 w-5" />
                  </Link>
                </button>
              )}

              <button className="text-gray-700 hover:text-gray-900">
                <Link to={"/cart"}>
                  <FaShoppingCart className="h-5 w-5" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
