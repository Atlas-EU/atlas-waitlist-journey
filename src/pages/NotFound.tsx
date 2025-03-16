
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-atlas-gray-darkest">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-9xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-atlas-gray-light mb-8">Oops! This page doesn't exist</p>
        <Link 
          to="/" 
          className="button-glow bg-atlas-green-strong hover:bg-atlas-green-medium text-black font-medium px-8 py-3 rounded-full hover-glow hover:translate-y-[-2px] transition-all duration-300 inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
