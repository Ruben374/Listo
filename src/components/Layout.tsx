


import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import type { LayoutProps } from "../utils/interfaces";

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F8FF]">
      <Navbar />
      <div className="flex flex-1 flex-row">
     
        <Sidebar />
     
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
