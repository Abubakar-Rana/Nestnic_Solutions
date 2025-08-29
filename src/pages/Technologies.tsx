import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Technologies = () => {

  const technologies = [
    {
      name: "Next.js",
      description: "React framework for production",
      category: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "React",
      description: "JavaScript library for UI",
      category: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      category: "Frontend",
      logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png"
    },
    {
      name: "Python",
      description: "Versatile programming language",
      category: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "AI/ML",
      description: "Artificial Intelligence & Machine Learning",
      category: "AI/Data",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
    },
    {
      name: "CRM",
      description: "Customer Relationship Management",
      category: "Business",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"
    },
    {
      name: "Data Science",
      description: "Extracting insights from data",
      category: "AI/Data",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
    },
    {
      name: "Google Earth Engine",
      description: "GIS based Solutions",
      category: "Geospatial",
      logo: "https://images.icon-icons.com/1508/PNG/512/googleearth-engine_104576.png"
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for servers",
      category: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "TypeScript",
      description: "Typed superset of JavaScript",
      category: "Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      name: "MongoDB",
      description: "NoSQL document database",
      category: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "PostgreSQL",
      description: "Advanced open source database",
      category: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    {
      name: "AWS",
      description: "Amazon Web Services cloud",
      category: "Cloud",
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png"
    },
    {
      name: "Docker",
      description: "Containerization platform",
      category: "DevOps",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
      name: "GraphQL",
      description: "Query language for APIs",
      category: "API",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
    },
    {
      name: "Firebase",
      description: "Google's mobile platform",
      category: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
    },
    {
      name: "Supabase",
      description: "Open source Firebase alternative",
      category: "Backend",
      logo: "https://supabase.com/favicon/favicon-96x96.png"
    },
    {
      name: "WordPress",
      description: "Popular CMS platform",
      category: "CMS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
    },
    {
      name: "Shopify",
      description: "E-commerce platform",
      category: "E-commerce",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/shopify-logo-png-transparent.png"
    },
    {
      name: "Stripe",
      description: "Online payment processing",
      category: "Payment",
      logo: "https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg"
    },
    {
      name: "TensorFlow",
      description: "Machine learning framework",
      category: "AI/Data",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
    },
    {
      name: "Kubernetes",
      description: "Container orchestration",
      category: "DevOps",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
    },
    {
      name: "Vue.js",
      description: "Progressive JavaScript framework",
      category: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
    }
  ];
  // const technologies = [
  //   {
  //     name: "Next.js",
  //     description: "React framework for production",
  //     category: "Frontend",
  //     logo: "⚡"
  //   },
  //   {
  //     name: "React",
  //     description: "JavaScript library for UI",
  //     category: "Frontend",
  //     logo: "⚛️"
  //   },
  //   {
  //     name: "Tailwind CSS",
  //     description: "Utility-first CSS framework",
  //     category: "Frontend",
  //     logo: "🎨"
  //   },
  //   {
  //     name: "Python",
  //     description: "Versatile programming language",
  //     category: "Backend",
  //     logo: "🐍"
  //   },
  //   {
  //     name: "AI/ML",
  //     description: "Artificial Intelligence & Machine Learning",
  //     category: "AI/Data",
  //     logo: "🧠"
  //   },
  //   {
  //     name: "CRM",
  //     description: "Customer Relationship Management",
  //     category: "Business",
  //     logo: "👥"
  //   },
  //   {
  //     name: "Framer Motion",
  //     description: "Animation library for React",
  //     category: "Frontend",
  //     logo: "🎭"
  //   },
  //   {
  //     name: "Data Science",
  //     description: "Extracting insights from data",
  //     category: "AI/Data",
  //     logo: "📊"
  //   },
  //   {
  //     name: "Google Earth Engine",
  //     description: "GIS based Solutions",
  //     category: "Geospatial",
  //     logo: "🌍"
  //   },
  //   {
  //     name: "Node.js",
  //     description: "JavaScript runtime for servers",
  //     category: "Backend",
  //     logo: "💚"
  //   },
  //   {
  //     name: "TypeScript",
  //     description: "Typed superset of JavaScript",
  //     category: "Language",
  //     logo: "📘"
  //   },
  //   {
  //     name: "MongoDB",
  //     description: "NoSQL document database",
  //     category: "Database",
  //     logo: "🍃"
  //   },
  //   {
  //     name: "PostgreSQL",
  //     description: "Advanced open source database",
  //     category: "Database",
  //     logo: "🐘"
  //   },
  //   {
  //     name: "AWS",
  //     description: "Amazon Web Services cloud",
  //     category: "Cloud",
  //     logo: "☁️"
  //   },
  //   {
  //     name: "Docker",
  //     description: "Containerization platform",
  //     category: "DevOps",
  //     logo: "🐳"
  //   },
  //   {
  //     name: "GraphQL",
  //     description: "Query language for APIs",
  //     category: "API",
  //     logo: "🔗"
  //   },
  //   {
  //     name: "Firebase",
  //     description: "Google's mobile platform",
  //     category: "Backend",
  //     logo: "🔥"
  //   },
  //   {
  //     name: "Supabase",
  //     description: "Open source Firebase alternative",
  //     category: "Backend",
  //     logo: "⚡"
  //   },
  //   {
  //     name: "WordPress",
  //     description: "Popular CMS platform",
  //     category: "CMS",
  //     logo: "📝"
  //   },
  //   {
  //     name: "Shopify",
  //     description: "E-commerce platform",
  //     category: "E-commerce",
  //     logo: "🛒"
  //   },
  //   {
  //     name: "Stripe",
  //     description: "Online payment processing",
  //     category: "Payment",
  //     logo: "💳"
  //   },
  //   {
  //     name: "TensorFlow",
  //     description: "Machine learning framework",
  //     category: "AI/Data",
  //     logo: "🤖"
  //   },
  //   {
  //     name: "Kubernetes",
  //     description: "Container orchestration",
  //     category: "DevOps",
  //     logo: "⚙️"
  //   },
  //   {
  //     name: "Vue.js",
  //     description: "Progressive JavaScript framework",
  //     category: "Frontend",
  //     logo: "💚"
  //   }
  // ];

  const categories = ["All", "Frontend", "Backend", "AI/Data", "Cloud", "Database", "DevOps"];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredTechnologies = selectedCategory === "All"
    ? technologies
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our Technologies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks we use to build exceptional
            digital solutions for your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filteredTechnologies.map((tech, index) => (
            <Card
              key={index}
              className="border-border/50 hover:shadow-card transition-smooth group hover:scale-105"
            >
              <CardHeader className="text-center">
                {/* <div className="text-4xl mb-4 group-hover:animate-pulse">
                  {tech.logo}
                </div> */}
                <div className="w-16 h-16 mx-auto mb-4 group-hover:animate-pulse">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <CardTitle className="text-lg text-foreground">
                  {tech.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {tech.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">24+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">40+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">99%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Technical Support</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 bg-gradient-hero rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Build with Modern Tech?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's leverage these powerful technologies to create innovative solutions
            that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Link to={'/contact'}>Start Your Project</Link>
            </Button>

            <a href="tel:+923360617000">
              <Button variant="outline" size="lg">
                Technology Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;