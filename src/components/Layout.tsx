import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <PageTransition>
        <Outlet />
      </PageTransition>
    </main>
    <footer className="border-t border-border/60 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">SL</span>
          </div>
          <span className="text-sm font-semibold text-foreground">Siwoo Lee</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Siwoo Lee · Dublin High School
        </p>
      </div>
    </footer>
  </div>
);

export default Layout;
