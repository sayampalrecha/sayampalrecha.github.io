
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface SkillProps {
  name: string;
  level: number;
  description?: string;
}

const SkillBar: React.FC<SkillProps> = ({ name, level, description }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-base">{name}</h3>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
      {description && (
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      )}
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = {
    technical: [
      { name: "Python", level: 90, description: "NumPy, Pandas, Scikit-learn, TensorFlow" },
      { name: "R", level: 80, description: "Data visualization, statistical analysis" },
      { name: "SQL", level: 85, description: "Database management and queries" },
      { name: "Machine Learning", level: 80, description: "Supervised and unsupervised learning" },
      { name: "Data Visualization", level: 85, description: "Matplotlib, Seaborn, ggplot2, Tableau" },
    ],
    domainKnowledge: [
      { name: "Statistical Analysis", level: 85 },
      { name: "Data Preprocessing", level: 90 },
      { name: "Big Data Technologies", level: 75 },
      { name: "Deep Learning", level: 70 },
      { name: "Natural Language Processing", level: 75 },
    ],
    tools: [
      { name: "Jupyter Notebook", level: 95 },
      { name: "Git & GitHub", level: 80 },
      { name: "Docker", level: 70 },
      { name: "AWS Cloud Services", level: 65 },
      { name: "Power BI", level: 80 },
    ],
  };

  return (
    <section id="skills">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Expertise</h2>
        <p className="section-subheading">
          My technical toolkit and specialized knowledge areas in data science.
        </p>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="domainKnowledge">Domain Knowledge</TabsTrigger>
              <TabsTrigger value="tools">Tools & Platforms</TabsTrigger>
            </TabsList>

            <TabsContent value="technical" className="animate-fade-in">
              <Card>
                <CardContent className="pt-6">
                  {skillCategories.technical.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="domainKnowledge" className="animate-fade-in">
              <Card>
                <CardContent className="pt-6">
                  {skillCategories.domainKnowledge.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tools" className="animate-fade-in">
              <Card>
                <CardContent className="pt-6">
                  {skillCategories.tools.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
          {["Python", "R", "SQL", "TensorFlow", "PyTorch", "Tableau", "Pandas", "Scikit-learn"].map((tech, index) => (
            <div 
              key={tech} 
              className="bg-card rounded-lg p-4 shadow-md animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-mono text-data-600">{tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
