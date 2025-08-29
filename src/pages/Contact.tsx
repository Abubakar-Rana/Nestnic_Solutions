import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   toast({
  //     title: "Message Sent!",
  //     description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
  //   });
  //   // Reset form
  //   setFormData({
  //     name: "",
  //     email: "",
  //     company: "",
  //     service: "",
  //     budget: "",
  //     message: ""
  //   });
  // };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://nestnic-backend-server.onrender.com/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Network Error",
        description: error.message || "Unable to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "nestnicsupplies@gmail.com",
      subtitle: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      content: "+92 336 0617000",
      subtitle: "Mon-Fri from 11am to 11pm"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Office",
      content: "Lahore, Pakistan",
      subtitle: "Visit us at our office"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Response Time",
      content: "Within 24 hours",
      subtitle: "We're quick to respond"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but most projects range from 4-16 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally after launch."
    },
    {
      question: "What's your development process?",
      answer: "We follow an agile methodology with regular check-ins, transparent communication, and iterative development to ensure your project meets expectations."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We have experience working with clients across different time zones and provide flexible communication schedules."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Get In Touch            
          </h1>
          <p className="text-lg text-primary font-medium max-w-2xl mx-auto" dir="rtl" lang="ur">
    مشورے کے کوئی پیسے نہیں, آج ہی رابطہ کریں
  </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Send us a message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Contact Number</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your contact number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="mobile-development">Mobile Development</SelectItem>
                          <SelectItem value="custom-software">Custom Software</SelectItem>
                          <SelectItem value="AI, Automation Bot, Solution">AI Solution or Automation Bot</SelectItem>
                          <SelectItem value="consulting">IT Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $1,000</SelectItem>
                        <SelectItem value="10k-25k">$1,000 - $5,000</SelectItem>
                        <SelectItem value="25k-50k">$5,000 - $7,000</SelectItem>
                        <SelectItem value="50k-100k">$7,000 - $10,000</SelectItem>
                        <SelectItem value="over-100k">Over $10,000</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-foreground">{info.title}</div>
                      <div className="text-foreground">{info.content}</div>
                      <div className="text-sm text-muted-foreground">{info.subtitle}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <a
                      href={"https://www.instagram.com/nestnic_solutions/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    ><Instagram className="h-4 w-4" /></a>
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Working Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">12:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
                <div className="pt-2 text-sm text-muted-foreground">
                  All times in Pacific Standard Time (PST)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border/50 hover:shadow-card transition-smooth">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center space-y-8 bg-gradient-hero rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground">
            Prefer to Talk Directly?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Schedule a free consultation call to discuss your project requirements
            and get personalized recommendations.
          </p>
          {/* <Button variant="cta" size="lg">
            Schedule a Call
          </Button> */}
          <Button variant="cta" size="lg">
            <a href="tel:+923360617000">
              Schedule a Call
            </a> </Button>

        </div>
      </div>
    </div>
  );
};

export default Contact;




