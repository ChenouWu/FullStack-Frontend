import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // ✅ 引入样式
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
