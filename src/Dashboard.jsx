import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token later when implemented
    navigate("/");
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-transparent fixed w-full top-0 z-10">
        <h1 className="text-3xl font-extrabold text-red-600 tracking-wide">NETFLIX</h1>
        
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-1 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </nav>

      {/* Content */}
      <div className="pt-32 text-center">
        <h2 className="text-4xl font-bold mb-3">Welcome Back 👋</h2>
        <p className="text-gray-300 text-lg">You are now logged in successfully.</p>
      </div>

      
      </div>

  );
};

export default Dashboard;
