import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div key={location.key} className="page-enter">
      {children}
    </div>
  );
};

export default PageTransition;
