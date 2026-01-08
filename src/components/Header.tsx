import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/climegrove-logo.png";

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    { name: "NettZero", href: "#" },
    { name: "ClimeScore", href: "#" },
    { name: "ClimeStore", href: "#" },
    { name: "ClimeSchool", href: "#" },
    { name: "ClimeFolio", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="ClimeGrove Logo" 
              className="h-8 md:h-10 w-auto invert"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl py-2">
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#crisis" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              The Crisis
            </a>
            <a href="#biochar" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Biochar
            </a>
            <a href="#b3" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              B3 Product
            </a>
            <a href="#impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Impact
            </a>
            <a href="#pathways" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pathways
            </a>
          </div>

          {/* CTA */}
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-terracotta text-cream text-sm font-medium rounded-md hover:bg-terracotta-light transition-colors"
          >
            Work With Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
