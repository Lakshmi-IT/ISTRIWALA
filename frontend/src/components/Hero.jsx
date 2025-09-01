import { HeroButton } from './ui/hero-button';
import { CheckCircle, Clock, Shield,MessageCircle  } from 'lucide-react';
// import heroImage from '../assets/hero-laundry.jpg';
import heroImage from '../assets/CoverImage 2.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Professional
              <span className="block text-blue-950">ISTRIWALA</span>
              You Can Trust
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed">
              IstriWala offers reliable doorstep pickup and delivery,ironing and hygienic services.
              Our trained professionals ensure your clothes are neatly pressed and
              delivered back to you on time — fresh, crisp, and ready to wear.
              Convenience, quality, and care, right at your doorstep
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to={"/placeorder"}>
                <HeroButton variant="hero">
                  Book Service Now
                </HeroButton>
              </Link>
<HeroButton
  asChild
  variant="hero-outline"
  className="flex items-center gap-2 text-white border-white"
>
  <a
    href="https://wa.me/918125423366?text=Hello%2C%20I%20need%20ironing%20services"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MessageCircle className="w-4 h-4" />
    +91 8125423366
  </a>
</HeroButton>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-blue-100">Free Pickup & Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-blue-100">24-48 Hour Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-blue-100">100% Safe & Secure</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Professional Ironing service"
              className="rounded-lg shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
