import { Card, CardContent } from './ui/card';
import { Truck, Clock, Shield, Award, Users, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Pickup & Delivery",
      description: "We collect and deliver your clothes right to your doorstep at no extra cost."
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick turnaround time of 24-48 hours for all regular Ironing services."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your clothes are handled with care and tracked throughout the entire process."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "We use premium products and techniques to ensure the best results every time."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced professionals know how to handle all types of fabrics and stains."
    },
    {
      icon: ThumbsUp,
      title: "100% Satisfaction",
      description: "We're not happy until you're completely satisfied with our service."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Isthri Wala?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best ironing experience with professional care and convenience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth border-2 border-primary/10 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;