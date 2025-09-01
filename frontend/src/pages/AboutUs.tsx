import Header from '../components/Header';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
    
      
      {/* About Us Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Isthri Wala</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We are currency nagar Vijayawada & Tadepalli Guntur premier Ironing service, committed to providing exceptional care for your garments 
            with professional expertise and convenient home pickup and delivery services.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a simple mission to make ironing care effortless for busy families and professionals, 
                  IsthriWala has been serving currency nagar Vijayawada & Tadepalli Guntur with dedication and excellence for years.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand that your clothes are more than just fabric – they represent your style, 
                  your confidence, and your professional image. That's why we treat every garment with the 
                  same care and attention we'd give our own.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team of experienced professionals uses only the finest iron machineries and latest 
                  equipment to ensure your clothes look their absolute best, every single time.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To provide convenient, reliable, and high-quality Ironing services that give our customers 
                  more time to focus on what matters most to them.
                </p>
                
                <h3 className="text-2xl font-bold mb-6 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted Ironing service provider in currency nagar Vijayawada & Tadepalli Guntur , known for exceptional 
                  quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    
    </div>
  );
};

export default AboutUs;
