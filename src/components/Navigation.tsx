import { Link, useLocation } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Gamepad2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-poppins font-bold text-foreground">
                Uncensored
              </h1>
              <p className="text-xs text-muted-foreground">Game Reviewes & Ratings</p>
            </div>
          </Link>

          {!isHome && (
            <Link 
              to="/" 
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              ← Back to Reviews
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
