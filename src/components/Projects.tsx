
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubLink?: string;
  demoLink?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  demoLink,
}) => {
  return (
    <Card className="card-shadow overflow-hidden">
      <div className="h-48 overflow-hidden bg-muted">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        {githubLink && (
          <Button asChild variant="outline" size="sm">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
        {demoLink && (
          <Button asChild size="sm" className="bg-data-600 hover:bg-data-700">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Predictive Analytics Dashboard",
      description: "Built an interactive dashboard that visualizes sales trends and forecasts using machine learning algorithms.",
      tags: ["Python", "Scikit-learn", "Plotly", "Pandas"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Natural Language Processing Tool",
      description: "Developed a sentiment analysis tool that evaluates customer feedback and generates insights for product improvement.",
      tags: ["Python", "NLTK", "Transformers", "SpaCy"],
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
      githubLink: "#",
    },
    {
      title: "Time Series Analysis Project",
      description: "Analyzed historical stock price data to identify patterns and created a model for price prediction.",
      tags: ["R", "Time Series", "ggplot2", "Statistics"],
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Projects</h2>
        <p className="section-subheading">
          A collection of data science projects that demonstrate my technical skills and problem-solving approach.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
