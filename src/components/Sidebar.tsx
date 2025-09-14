function Sidebar() {
  return (
    <aside className="min-h-full w-100 bg-red-400 text-white flex flex-col rounded-r-2xl shadow-lg">
      <div className="flex flex-col items-center py-6 border-b border-red-300">
        <div className="relative -mt-18 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="https://i.pinimg.com/originals/d8/6b/32/d86b3203cd4288eaddfa152361bf6ccf.jpg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-semibold">Kurapika</span>
        <span className="text-sm text-gray-100">kurapika@gmail.com</span>
      </div>

      <nav className="flex flex-col gap-4 px-6 py-6 flex-grow">
        <a
          href="#"
          className="bg-white text-red-500 rounded-xl px-4 py-2 font-medium shadow"
        >
          Dashboard
        </a>
        <a href="#" className="hover:text-gray-200">
          Vital Task
        </a>
        <a href="#" className="hover:text-gray-200">
          My Task
        </a>
        <a href="#" className="hover:text-gray-200">
          Task Categories
        </a>
        <a href="#" className="hover:text-gray-200">
          Settings
        </a>
        <a href="#" className="hover:text-gray-200">
          Help
        </a>
      </nav>

      <div className="px-6 py-4 border-t border-red-300">
        <a href="#" className="hover:text-gray-200">
          Logout
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
