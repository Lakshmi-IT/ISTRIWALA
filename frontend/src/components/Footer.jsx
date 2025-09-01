import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Youtube } from 'lucide-react';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 lg:mb-0 mb-5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo + About */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt='logo' title='logo of website' className='w-[50px] h-[50px]' />
              <h1 className="text-2xl font-bold text-primary">ISTRIWALA</h1>
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted partner for professional Ironing services. We handle your clothes with care and deliver excellence every time.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61579776703379" className="text-gray-300 hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/_istriwala_" className="text-gray-300 hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/ISTRIWALA25552" className="text-gray-300 hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UChOgPyPBYPtPPugCaW2skVg" className="text-gray-300 hover:text-primary transition-smooth">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-smooth">Ironing</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Free Pickup & Delivery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 8125423366</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@isthriwala.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  Currency Nagar, Vijayawada

                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>

                  Tadepalli, Guntur
                </span>
              </div>
              <p className="text-sm">
                Operating Hours:<br />
                Mon-Sun: 7:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Isthri Wala. All rights reserved. | Professional Ironing service
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Developed by{" "}
            <Link
              to="https://lakshmiit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              LakshmiIT
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
