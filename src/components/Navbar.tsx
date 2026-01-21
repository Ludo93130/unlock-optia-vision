import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "La Clé", href: "#methodology" },
  { label: "Notre Process", href: "/process", isPage: true },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "/faq", isPage: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.isPage) {
      navigate(link.href);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAuditClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="Optia Solutions" className="h-16 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="text-foreground/80 hover:text-cyan-electric transition-colors duration-300 font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="heroOutline" 
            size="lg"
            onClick={handleAuditClick}
          >
            Audit Gratuit
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(link);
                  }}
                  className="text-foreground/80 hover:text-cyan-electric transition-colors duration-300 font-medium py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                variant="hero" 
                size="lg" 
                className="mt-2"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleAuditClick();
                }}
              >
                Audit Gratuit
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
