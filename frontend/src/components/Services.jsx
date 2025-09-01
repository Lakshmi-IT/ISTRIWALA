import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Truck, Shield, Clock, DollarSign, ThumbsUp, IndianRupee } from 'lucide-react';
import pickupImage from '../assets/pickupanddelivery.jpeg';
import hygieneImage from '../assets/hygiene-process.jpeg';
import deliveryImage from '../assets/on-time-delivery.png';
import pricingImage from '../assets/affordable.jpeg';
import satisfactionImage from '../assets/customer-satisfaction.jpeg';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Doorstep Pickup & Delivery",
      description: "We pick up and deliver your clothes right at your doorstep for ultimate convenience.",
      image: pickupImage,
      features: ["Free pickup", "On-time delivery", "Hassle-free process", "Service at your doorstep"]
    },
    {
      icon: Shield,
      title: "Very Hygienic Process",
      description: "All clothes are cleaned using hygienic, safe, and fabric-friendly methods.",
      image: hygieneImage,
      features: ["Sanitized equipment", "Fabric care", "Fresh results"]
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We value your time and ensure your clothes are ready exactly when promised.",
      image: deliveryImage,
      features: ["24-48 hour turnaround", "Express options", "Reliable service", "Timely updates"]
    },
    {
      icon: IndianRupee,
      title: "Affordable Pricing",
      description: "Enjoy premium Ironing services at budget-friendly prices with no hidden costs.",
      image: pricingImage,
      features: ["Transparent rates", "Multiple plans", "Value for money", "Flexible options"]
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction Guaranteed",
      description: "We prioritize your satisfaction with every Ironing, Pickup, and delivery.",
      image: satisfactionImage,
      features: ["Quality assurance", "Dedicated support", "Personalized care", "Trusted by customers"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide reliable, hygienic, and affordable Ironing services tailored to your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth cursor-pointer border-0 shadow-card">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                />
                {/* <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-smooth"></div> */}
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
