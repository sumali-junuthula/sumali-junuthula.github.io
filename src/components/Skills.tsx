import { Code2, Palette, Zap, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Development",
      skills: ["React", "TypeScript", "Node.js", "Python", "C", "SML", "JavaScript", "TailwindCSS", "Vite", "HTML", "CSS"],
      color: "primary"
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["UI/UX", "Digital Art", "3D Modeling", "Pastel"],
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Classes",
      skills: ["Intro to Machine Learning", "Concepts of Math", "Intro to Computer Systems", "Parallel and Sequential Data Structures and Algorithms", "Functional Programming", "Principles of Imperative Computation", "Intro to Accounting", "Finance", "Optimization for Business"],
      color: "accent"
    },
    {
      icon: Cpu,
      title: "Tech Stack",
      skills: ["Docker", "AWS", "Git", "Figma"],
      color: "muted"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-cyber">Skills</span> &{" "}
            <span className="font-mono text-gradient-code">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A fusion of technical skills and creative vision, constantly evolving 
            to push the boundaries of digital art and development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-neon transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Icon */}
                <div className="mb-4">
                  <Icon className={`h-8 w-8 text-${category.color}`} />
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold mb-4 font-mono">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted/20 text-sm rounded-full border border-border/30 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary font-mono">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary font-mono">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent font-mono">∞</div>
            <div className="text-muted-foreground">Creative Ideas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;