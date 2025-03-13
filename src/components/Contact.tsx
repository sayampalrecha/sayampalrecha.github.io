
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-subheading">
          Have a question or want to work together? Feel free to contact me!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <Card className="card-shadow h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-data-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                        your.email@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-data-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">City, Country</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Linkedin className="w-5 h-5 text-data-600 mt-1" />
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                        linkedin.com/in/yourprofile
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Github className="w-5 h-5 text-data-600 mt-1" />
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                        github.com/yourusername
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4">Connect With Me</h4>
                  <div className="flex gap-4">
                    <Button asChild size="icon" variant="outline">
                      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button asChild size="icon" variant="outline">
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button asChild size="icon" variant="outline">
                      <a href="mailto:your.email@example.com" aria-label="Email Me">
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in">
            <Card className="card-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Subject" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message" rows={4} />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-data-600 hover:bg-data-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
