
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const About: React.FC = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University Name",
      period: "2022 - Present",
      description: "Focusing on machine learning, statistical modeling, and big data technologies.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2018 - 2022",
      description: "Graduated with honors. Specialized in data structures, algorithms, and software development.",
    },
  ];

  return (
    <section id="about" className="bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          <div className="md:col-span-5">
            <Card className="card-shadow h-full">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                  <p>
                    I'm a passionate data science student with a keen interest in extracting meaningful insights from complex datasets. 
                    With a background in computer science and statistics, I strive to bridge the gap between technical expertise and practical problem-solving.
                  </p>
                  <p>
                    My journey in data science began when I discovered the power of algorithms to predict outcomes and identify patterns that weren't immediately obvious. 
                    Since then, I've been dedicated to expanding my knowledge and skills in this rapidly evolving field.
                  </p>
                  <p>
                    When I'm not coding or analyzing data, you can find me hiking, reading about new technologies, or participating in data science competitions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 pb-8 border-l border-border animate-slide-up" 
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-data-600 text-white p-1 rounded-full">
                    <GraduationCap size={18} />
                  </div>
                  <div className="mb-1 text-sm text-muted-foreground">{item.period}</div>
                  <h4 className="text-lg font-semibold">{item.degree}</h4>
                  <div className="text-base text-muted-foreground mb-2">{item.institution}</div>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Data Science Professional Certificate - Platform Name</li>
                  <li>Machine Learning Specialization - Platform Name</li>
                  <li>SQL Advanced Certificate - Platform Name</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
