import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { MapPin, Clock, Users, Award } from "lucide-react";

const ContactPage = () => {
  const serviceAreas = ["Currency Nagar Vijayawada", "Tadepalli Guntur "];

  const faqs = [
    {
      question: "What is your turnaround time?",
      answer:
        "Our standard turnaround time is 24-48 hours for regular washing and ironing. Dry cleaning may take up to 72 hours depending on the garment type.",
    },
    {
      question: "Do you offer same-day service?",
      answer:
        "Yes, we offer same-day service for urgent requirements with a small additional charge. Please call us before 10 AM for same-day pickup and delivery.",
    },
    {
      question: "How do you handle delicate fabrics?",
      answer:
        "We have specialized processes for delicate fabrics including silk, wool, and designer garments. Our trained professionals ensure proper care for each fabric type.",
    },
    {
      question: "What if my clothes get damaged?",
      answer:
        "We take full responsibility for any damage caused during our service. We offer compensation or replacement as per our service guarantee policy.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Contact Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Get in touch with Mumbai's most trusted Ironing service. We're here
            to help with all your clothing care needs.
          </p>
        </div>
      </section>

      <Contact />

      {/* Service Areas Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We currently serve these areas in Mumbai with free pickup and
              delivery
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl w-full place-items-center  ">
              {serviceAreas.map((area, index) => (
                <Card
                  key={index}
                  className="text-center border-2 border-primary/10 hover:border-primary/30 transition-smooth"
                >
                  <CardContent className="p-4">
                    <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-medium">{area}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our Ironing services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-left">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "5000+", label: "Happy Customers" },
              { icon: Clock, number: "24-48hrs", label: "Turnaround Time" },
              { icon: Award, number: "99%", label: "Satisfaction Rate" },
              { icon: MapPin, number: "25+", label: "Service Areas" },
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
