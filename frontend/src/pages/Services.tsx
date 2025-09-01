import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, Clock, Shield, Truck } from 'lucide-react';

const ServicesPage = () => {
  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "₹199",
      duration: "per bag",
      features: [
        "Washing & Folding",
        "48-hour turnaround",
        "Free pickup & delivery",
        "Basic stain removal"
      ]
    },
    {
      name: "Premium Plan",
      price: "₹399",
      duration: "per bag",
      features: [
        "Washing, Ironing & Folding",
        "24-hour turnaround",
        "Free pickup & delivery",
        "Advanced stain removal",
        "Fabric softening",
        "Special garment care"
      ],
      popular: true
    },
    {
      name: "Dry Clean Only",
      price: "₹149",
      duration: "per piece",
      features: [
        "Professional dry cleaning",
        "48-hour turnaround",
        "Free pickup & delivery",
        "Delicate fabric care",
        "Pressing included"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
   
      
      {/* Services Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive laundry solutions tailored to meet all your clothing care needs 
            with professional expertise and convenient service.
          </p>
        </div>
      </section>

      <Services />

      {/* Pricing Section */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden costs. Choose the plan that fits your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative border-2 ${plan.popular ? 'border-primary shadow-card' : 'border-border'} hover:shadow-elegant transition-smooth`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mt-4">
                    {plan.price}
                    <span className="text-lg text-muted-foreground font-normal">/{plan.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, convenient, and hassle-free Ironing service in just three easy steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Schedule", description: "Book pickup online or call us" },
              { icon: Truck, title: "Pickup", description: "We collect your clothes from your doorstep" },
              { icon: Shield, title: "Clean", description: "Professional cleaning with expert care" },
              { icon: CheckCircle, title: "Deliver", description: "Fresh, clean clothes delivered back to you" }
            ].map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ServicesPage;