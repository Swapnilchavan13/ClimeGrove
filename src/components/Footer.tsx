import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-terracotta to-soil flex items-center justify-center">
                <span className="text-sm font-bold text-cream">C</span>
              </div>
              <span className="font-serif text-xl font-medium text-foreground tracking-tight">
                ClimeGrove
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Climate infrastructure for India. Restoring balance through proven, 
              on-ground systems — starting with biochar.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ClimeGrove. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <a href="#crisis" className="text-muted-foreground hover:text-foreground transition-colors">
                  The Crisis
                </a>
              </li>
              <li>
                <a href="#biochar" className="text-muted-foreground hover:text-foreground transition-colors">
                  Biochar
                </a>
              </li>
              <li>
                <a href="#b3" className="text-muted-foreground hover:text-foreground transition-colors">
                  B3 Product
                </a>
              </li>
              <li>
                <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#pathways" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pathways
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:connect@climegrove.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  connect@climegrove.com
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Work With Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
