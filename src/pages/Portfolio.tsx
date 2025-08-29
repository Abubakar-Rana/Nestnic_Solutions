import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Hotel Management System",
      category: "Web Development",
      description: "A comprehensive hotel management solution with rooms management, and hotel analytics.",
      technologies: ["React", "Node.js", "PostgreSQL", "WP", "Hostinger"],
      image: "/portfolio/saeedhousing.png",
      liveUrl: "https://saeedhousing.co.uk/",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "IBDEMS – Health Monitoring System",
      category: "Custom Software",
      description: "A global digital health platform enabling real-time patient monitoring, records management, and data-driven insights.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Express", "Vercel"],
      image: "/portfolio/ibdem.png",
      liveUrl: "https://ibdem.vercel.app/",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "QR Code Generator App",
      category: "Custom Software",
      description: "Secure mobile banking application with biometric authentication and real-time transaction tracking.",
      technologies: ["React", "GPT Engineer", "Node.js"],
      image: "/portfolio/qr.png",
      liveUrl: "https://qr-code-generator-288.vercel.app/",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Carrier Filter Pro",
      category: "Data Analytics Platform",
      description: "Advanced FMCSA carrier data analytics system with smart filtering, instant insights, and exportable reports tailored for trucking businesses.",
      technologies: ["Next.js","React", "Node.js", "MongoDB", "FMCSA API"],
      image: "/portfolio/carrier.png",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "Educational Learning Platform",
      category: "Web Development",
      description: "Interactive online learning platform with video streaming, progress tracking, and certification system.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Vercel"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      category: "Custom Software",
      description: "Industrial IoT solution for monitoring equipment performance and predictive maintenance alerts.",
      technologies: ["Python", "InfluxDB", "Grafana", "Docker"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Custom Software"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground  ">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our latest projects and see how we've helped businesses
            transform their operations with innovative technology solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="gradient-text block animate-scale-in text-5xl lg:text-2xl font-extrabold">
  Featured Projects
</h2>
            {/* <p className="text-muted-foreground">Our most impactful and innovative solutions</p> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-elegant transition-smooth border-border/50 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-smooth"></div>
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 pt-2">




                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <Button variant="outline" size="sm" className="group/btn">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">All Projects</h2>
            <p className="text-muted-foreground">Browse our complete portfolio of successful projects</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-card transition-smooth border-border/50 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth"></div>
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>

                    </div>
                    <Button variant="link" size="sm" className="group/link p-0">
                      Learn More
                      <ArrowRight className="h-3 w-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-8 bg-gradient-hero rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together.
            Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <a href="tel:+923360617000">Let's Discuss Your Project</a>
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
