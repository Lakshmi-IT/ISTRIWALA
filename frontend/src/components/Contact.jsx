import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { HeroButton } from './ui/hero-button';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Contact us today for premium Ironing services. We're here to make your life easier!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-blue-100">+91 8125423366</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-blue-100">info@isthriwala.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Service Area</h4>
                  <p className="text-blue-100"> Currency Nagar Vijayawada</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Service Area</h4>
                  <p className="text-blue-100">Tadepalli Guntur</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-blue-100">Mon-Sun: 7AM - 9PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to={"/placeorder"}>
                <HeroButton variant="hero" className="bg-accent hover:bg-accent/90">
                  Book Service Now
                </HeroButton>
              </Link>
              <Link to={"/contact"}>
                <HeroButton variant="hero-outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Get Quote
                </HeroButton>
              </Link>
            </div>
          </div>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-xl">Service Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Schedule Pickup</h4>
                    <p className="text-blue-100 text-sm">Call us or book online for convenient pickup</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Professional Cleaning</h4>
                    <p className="text-blue-100 text-sm">We clean your clothes with expert care</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Fresh Delivery</h4>
                    <p className="text-blue-100 text-sm">Clean, fresh clothes delivered to your door</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;