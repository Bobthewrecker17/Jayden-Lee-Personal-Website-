import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Activities from "./pages/Activities";
import ActivityCategory from "./pages/ActivityCategory";
import ActivityDetailPage from "./pages/ActivityDetailPage";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import FuturePlans from "./pages/FuturePlans";
import Gallery from "./pages/Gallery";
import Job from "./pages/Job";
import Leadership from "./pages/Leadership";
import Music from "./pages/Music";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:category" element={<ActivityCategory />} />
            <Route path="/activities/:category/:slug" element={<ActivityDetailPage />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/future-plans" element={<FuturePlans />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/job" element={<Job />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/music" element={<Music />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
