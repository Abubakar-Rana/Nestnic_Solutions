import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  Award,
  Globe,
  Clock,
  CheckCircle,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-primary" />, value: "20+", label: "Projects Completed" },
    { icon: <Clock className="h-8 w-8 text-primary" />, value: "1+", label: "Years Experience" },
    { icon: <Award className="h-8 w-8 text-primary" />, value: "100%", label: "Client Satisfaction" },
    { icon: <Globe className="h-8 w-8 text-primary" />, value: "Global", label: "Countries Served" }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality through rigorous testing, code reviews, and best practices."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "With experience serving clients worldwide, we understand diverse business needs and cultural requirements."
    }
  ];

  const team = [
    {
      name: "Hafiz Muhammad Abubakar",
      role: "CEO & Founder",
      image: "/portfolio/ab.png",
      bio: "3+ years in software development and business strategy. Passionate about using technology to solve real-world problems.",
      linkedin: "https://www.linkedin.com/in/hafiz-muhammad-abubakar-49a883284/",
      twitter: "#",
      email: "gabubakar757@gmail.com"
    },
    {
      name: "Mujadid Sana",
      role: "Founder & CTO",
      image: "/portfolio/mj.png",
      bio: "Full-stack architect with expertise in cloud technologies and scalable system design. Former tech lead at Fortune 500 companies.",
      linkedin: "https://www.linkedin.com/in/mujadid-sana-4a288a229/",
      twitter: "#",
      email: "sanamujadid@gmail.com"
    },
    {
      name: "Hasnain Ahmad",
      role: "Founder & Lead DevOps Designer",
      image: "/portfolio/hs.png",
      bio: "UX/UI specialist focused on creating intuitive and engaging user experiences. Award-winning designer with 10+ years experience.",
      linkedin: "https://www.linkedin.com/in/hasnain-ahmad-7937a51b1/",
      twitter: "#",
      email: "hasnayn.2.0@gmail.com"
    },
    {
      name: "Vaneeza Zafar",
      role: "Founder & CMO",
      image: "/portfolio/vn.png",
      bio: "Expert in modern JavaScript frameworks and mobile app development. Passionate about clean code and performance optimization.",
      linkedin: "#",
      twitter: "#",
      email: ""
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "TypeScript", "Next.js", "Vue.js", "Angular",
    "React Native", "Flutter", "PostgreSQL", "MongoDB", "AWS", "Azure", "Docker"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            About Nestnic Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and solution strategists
            dedicated to transforming businesses through innovative technology solutions.
          </p>
        </div>

        {/* Mission & Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, Nestnic Solutions emerged from a simple vision: to bridge the gap
                  between complex technology and practical business solutions. Our founders, experienced
                  developers and business strategists, recognized that many companies struggled to
                  leverage technology effectively.
                </p>
                <p>
                  Starting as a small team of passionate developers, we've grown into a full-service
                  IT solutions provider, serving clients across various industries. Our journey has been
                  marked by continuous learning, adaptation, and an unwavering commitment to excellence.
                </p>
                <p>
                  Today, we pride ourselves on being more than just a service provider – we're your
                  technology partner, invested in your success and growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-border/50 hover:shadow-card transition-smooth">
                  <CardContent className="p-0 space-y-3">
                    <div className="flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20 bg-gradient-hero rounded-2xl p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth,
                improve efficiency, and create lasting competitive advantages in the digital age.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the leading technology partner for businesses worldwide, recognized for
                our innovation, quality, and commitment to client success.
              </p>
            </div>
          </div>
        </section>

        

        {/* Team */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Meet Our Team</h2>
            <p className="text-muted-foreground">The talented professionals behind our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden border-border/50 hover:shadow-card transition-smooth group">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth"></div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <Badge variant="secondary" className="text-xs">{member.role}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <Button variant="ghost" size="sm" className="p-2">
                      
<a href={member.linkedin}><Linkedin className="h-4 w-4" /> </a>

                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


{/* Values */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-border/50 hover:shadow-card transition-smooth">
                <CardContent className="p-0 space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technologies
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Technologies We Use</h2>
            <p className="text-muted-foreground">Our expertise spans across modern development technologies</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section> */}

        {/* CTA */}
        <div className="text-center space-y-8 bg-gradient-primary rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Join the growing list of satisfied clients who have transformed their businesses with our help.
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="shadow-glow">
              <Link to={'/contact'}> Get In Touch </Link>
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;