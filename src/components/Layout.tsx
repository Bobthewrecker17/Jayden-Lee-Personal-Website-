import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-20">
      <Outlet />
    </main>
    <footer className="py-8 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Your Name. Built with ❤️
    </footer>
  </div>
);

export default Layout;
