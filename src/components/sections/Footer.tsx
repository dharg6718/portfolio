import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-8" />
      <div className="container mx-auto px-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Giri Dhar. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full border border-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-cyan transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
