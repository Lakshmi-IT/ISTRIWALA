import {
  Phone,
  MapPin,
  Menu,
  LogIn,
  LogOut,
  UserPlus,
  Home,
  Info,
  Briefcase,
  Mail,
  ListOrdered,
  ShoppingCart,
  User,
  Package
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { toast } from "react-toastify";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [tokenPresent, setTokenPresent] = useState("")
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'About Us', path: '/about', icon: <Info className="h-5 w-5" /> },
    { name: 'Services', path: '/services', icon: <Briefcase className="h-5 w-5" /> },
   




  ];

  // ✅ Show Contact only if NOT logged in
  if (!isLoggedIn) {
    navItems.push({
      name: "Contact",
      path: "/contact",
      icon: <Mail className="h-5 w-5" />,
    },
     {
      name: "Place Order",
      path: "/placeorder",
      icon: <ShoppingCart className="h-5 w-5" />,
    })
  }


  // ✅ add Order only if logged in
  if (isLoggedIn) {
    navItems.push({
      name: "Profile",
      path: "/ProfilePage",
      icon: <User className="h-5 w-5" />,
    });
    navItems.push({
      name: "Place Order",
      path: "/placeorder",
      icon: <ShoppingCart className="h-5 w-5" />,
    });
    navItems.push({
      name: "Your Orders",
      path: "/yourorders",
      icon: <Package className="h-5 w-5" />,
    });
  }



  // Check token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setTokenPresent(token)
    setIsLoggedIn(!!token);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/LoginPage"); // redirect to login after logout
    toast.success("✅ Logout successfull!");
  };



  return (
    <header className="bg-background shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
            <h1 className="lg:text-3xl text-xl font-bold text-blue-950">ISTRIWALA</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 font-medium transition hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-foreground'
                  }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                <LogOut className="h-5 w-5" /> Logout
              </button>
            ) : (
              <div className="flex gap-4">
                <Link to="/LoginPage">
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-blue-600 hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                  >
                    <LogIn className="h-5 w-5" /> Login
                  </button>
                </Link>
                {/* <Link to="/RegisterPage">
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
                  >
                    <UserPlus className="h-5 w-5" /> Register
                  </button>
                </Link> */}
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 font-medium transition hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-foreground'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
        {/* ✅ Bottom Navigation for Mobile (App-like) */}

        {tokenPresent && (
          <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            <div className="flex justify-around items-center py-2">
              <Link
                to="/"
                className={`flex flex-col items-center text-xs ${location.pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-500"
                  }`}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>

              <Link
                to="/placeorder"
                className={`flex flex-col items-center text-xs ${location.pathname === "/placeorder" ? "text-blue-600 font-semibold" : "text-gray-500"
                  }`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Place Order</span>
              </Link>

              <Link
                to="/yourorders"
                className={`flex flex-col items-center text-xs ${location.pathname === "/yourorders" ? "text-blue-600 font-semibold" : "text-gray-500"
                  }`}
              >
                <Package className="h-5 w-5" />
                <span>My Orders</span>
              </Link>

              <Link
                to="/contact"
                className={`flex flex-col items-center text-xs ${location.pathname === "/contact" ? "text-blue-600 font-semibold" : "text-gray-500"
                  }`}
              >
                <Info className="h-5 w-5" />
                <span>Help</span>
              </Link>

              <Link
                to={isLoggedIn ? "/ProfilePage" : "/LoginPage"}
                className={`flex flex-col items-center text-xs ${location.pathname === "/ProfilePage" || location.pathname === "/LoginPage"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-500"
                  }`}
              >
                <User className="h-5 w-5" />
                <span>Account</span>
              </Link>
            </div>
          </nav>
        )}

      </div>
    </header>
  );
};

export default Header;
