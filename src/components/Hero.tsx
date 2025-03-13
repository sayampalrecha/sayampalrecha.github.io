
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm <span className="gradient-text">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
              Data Science Student
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              I transform complex data into meaningful insights and effective solutions. 
              Passionate about machine learning, data visualization, and statistical analysis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-data-700 hover:bg-data-800">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="relative w-full h-[400px] rounded-lg bg-gradient-to-br from-data-200 to-accent/30 shadow-xl animate-fade-in">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-mono text-lg mb-4">data.scientist</div>
                  <div className="text-sm font-mono text-muted-foreground">
                    <div>Python • R • SQL</div>
                    <div>Machine Learning • Data Analysis</div>
                    <div>Statistical Modeling</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#projects" aria-label="Scroll down">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
