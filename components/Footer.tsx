import { Instagram, Phone, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 shadow-md w-full">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Brand Name */}
        <p className="text-lg font-semibold">© 2025 Eman Aljishi</p>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="https://www.instagram.com/emanaljishi" target="_blank" className="hover:text-rose transition-colors">
            <Instagram size={24} />
          </Link>
          <a href="tel:+966504813213" className="hover:text-rose transition-colors">
            <Phone size={24} />
          </a>
          <a href="mailto:emanaljishi@gmail.com" className="hover:text-rose transition-colors">
            <Mail size={24} />
          </a>
          <Link href="https://www.linkedin.com/in/eman-aljishi/" target="_blank" className="hover:text-rose transition-colors">
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
