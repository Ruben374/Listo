import { Search, Bell, Calendar } from "lucide-react";

function Navbar() {
  return (
    <nav className="mb-18 top-0 left-0 w-full flex items-center justify-between bg-[#F8F8F8] px-20 py-8 shadow">
      <div className="flex items-center">
        <span className="text-red-500 font-bold text-xl">Dash</span>
        <span className="text-black font-semibold text-xl">board</span>
      </div>

      <div className="relative flex-1 max-w-2xl mx-6">
        <input
          type="text"
          placeholder="Search your task here..."
          className="w-full pl-4 pr-20 py-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-red-500">
          <Search size={18} />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-sm px-3 py-1 rounded bg-red-100 text-red-500">
          <Bell size={18} />
        </button>
        <button className="text-sm px-3 py-1 rounded bg-red-100 text-red-500">
          <Calendar size={18} />
        </button>
        <div className="flex flex-col items-end text-sm">
          <span className="text-gray-600">Tuesday</span>
          <span className="text-blue-500 font-medium">20/06/2023</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
