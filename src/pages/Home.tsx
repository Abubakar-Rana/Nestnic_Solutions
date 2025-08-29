import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Code2, Sparkles } from "lucide-react";
import darkHeroBg from "@/assets/dark-hero-bg.jpg";
import geometricElements from "@/assets/geometric-elements.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "10+", label: "Projects", delay: "animate-delay-100" },
    { value: "2+", label: "Years", delay: "animate-delay-200" },
    { value: "24/7", label: "Support", delay: "animate-delay-300" },
  ];

  const services = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Custom Development",
      description: "Tailored solutions for your unique needs"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Modern Tech",
      description: "Cutting-edge technologies and frameworks"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center grain-bg dot-matrix">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <img
            src={darkHeroBg}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <div className="w-20 h-20 border border-primary/30 rounded-lg rotate-45"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed opacity-20">
          <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float opacity-20">
          <div className="w-16 h-16 border-2 border-accent/30 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text block animate-scale-in">
                  Next-Gen IT Solutions
                </span>
                
{/* <span className="gradient-text block animate-scale-in">
                  Nestnic Solutions
                </span> */}

              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animate-delay-300">
                Transform your business with innovative technology that drives results
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-500">
              <Link to="/contact"> <Button variant="hero" size="lg" className="group text-lg px-8 py-6">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button> </Link>
              {/* <Button  variant="outline" size="lg" className="text-lg px-8 py-6 hover:bg-primary/10">
                View Our Work
              </Button> */}
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:bg-primary/10">
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex justify-center space-x-12 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center animate-fade-in ${stat.delay}`}>
                  <div className="text-3xl lg:text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold gradient-text">What We Do</h2>
            <p className="text-muted-foreground">Excellence in every solution</p>
          </div>
          <Link to="/services">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group card-hover border-border/50 bg-card/50 backdrop-blur-sm animated-border"
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-smooth glow-effect">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:gradient-text transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div> </Link>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={geometricElements}
            alt=""
            className="w-full h-full object-cover opacity-35 animate-float"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Ready to innovate?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's build something extraordinary together
            </p>
            <Button variant="hero" size="lg" className="text-lg px-12 py-6 animate-pulse-glow">
              <Link to={'/contact'}> Get Started Today </Link>
            </Button>
          </div>
        </div>

      </section>



      <div className="relative w-full h-[200px] flex items-center justify-center  shadow-lg bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="max-w-[200px] max-h-[300px] object-contain"
        >
          <source src="/portfolio/nestnic.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay content */}
        <div className="absolute bottom-3 text-center">
          <span className="gradient-text block animate-scale-in">
            © 2025 Nestnic Solutions. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;