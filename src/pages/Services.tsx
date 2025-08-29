import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Settings,
  Users,
  ArrowRight,
  CheckCircle,
  Brain,
  TrendingUp,
  BarChart3,
  PenTool,
  Search,
  Code
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: <Code2 className="h-12 w-12 text-primary" />,
      title: "Custom Software Development",
      description: "End-to-end software development services tailored to your business needs. We build scalable, maintainable applications using modern technologies.",
      features: [
        "Full-stack web applications",
        "Desktop applications",
        "API development & integration",
        "Legacy system modernization"
      ],
      technologies: ["React", "Node.js", "Python", ".NET", "Java"]
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that provide exceptional user experiences across all devices.",
      features: [
        "Responsive web design",
        "E-commerce solutions",
        "Content management systems",
        "Progressive web apps (PWA)"
      ],
      technologies: ["React", "Vue.js", "Angular", "Next.js", "WordPress"]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile App Development",
      description: "Cross-platform and native mobile applications that engage users and drive business growth.",
      features: [
        "iOS & Android apps",
        "Cross-platform development",
        "App store optimization",
        "Mobile app maintenance"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Database Solutions",
      description: "Comprehensive database services including design, optimization, migration, and ongoing management.",
      features: [
        "Database design & architecture",
        "Performance optimization",
        "Data migration services",
        "Backup & recovery solutions"
      ],
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS RDS"]
    },
    {
      icon: <Cloud className="h-12 w-12 text-primary" />,
      title: "Cloud Services",
      description: "Cloud migration, deployment, and management services to help you leverage the power of cloud computing.",
      features: [
        "Cloud migration strategy",
        "Infrastructure as Code",
        "DevOps automation",
        "Cloud security & compliance"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from cyber threats and ensure compliance.",
      features: [
        "Security assessments",
        "Vulnerability testing",
        "Security implementation",
        "Compliance management"
      ],
      technologies: ["Penetration Testing", "SIEM", "Encryption", "Authentication"]
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning algorithms to automate processes and gain insights.",
      features: [
        "Custom AI model development",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI"]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Digital Marketing & Advertising",
      description: "Digital marketing solutions to boost your online presence, increase brand awareness, and drive customer engagement.",
      features: [
        "Digital marketing strategy",
        "Social media management",
        "PPC campaign management",
        "Brand identity design"
      ],
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "Mailchimp", "HubSpot"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Data Science & Analytics",
      description: "Transform raw data into actionable insights with advanced analytics, reporting, and business intelligence solutions.",
      features: [
        "Business intelligence dashboards",
        "Data visualization",
        "Statistical analysis",
        "Real-time reporting tools"
      ],
      technologies: ["Power BI", "Tableau", "R", "Python", "SQL"]
    }
  ];

  const additionalServices = [
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Content Writing",
      description: "Professional content creation for websites, blogs, research papers, and marketing materials."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO",
      description: "Search engine optimization to improve your website's visibility and rankings."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Small Tasks Coding",
      description: "Quick coding tasks, bug fixes, and minor feature implementations."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth
            and digital transformation journey.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-12 mb-20">
          {mainServices.map((service, index) => (
            <Card key={index} className="border-border/50 hover:shadow-card transition-smooth group hover:shadow-elegant transition-smooth border-border/90 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Key Features:</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="group">
                      <Link to="/portfolio">Learn More </Link>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Technologies We Use:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Service highlight card */}
                    <Card className="bg-gradient-secondary border-primary/20">
                      <CardContent className="p-4">
                        <div className="text-sm space-y-2">
                          <div className="font-medium text-foreground">Why Choose This Service?</div>
                          <div className="text-muted-foreground">
                            Our expert team delivers high-quality solutions with proven methodologies
                            and cutting-edge technologies.
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Additional Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive support services to complement your core development needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-border/50 hover:shadow-card transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-8 bg-gradient-hero rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button variant="hero" size="lg">
              Request a Quote
            </Button> </Link>
            <Link to="/contact#contact-form"> <Button variant="outline" size="lg">
              Schedule Consultation
            </Button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;