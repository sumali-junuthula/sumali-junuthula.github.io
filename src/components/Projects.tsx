import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye, Share2, Code2, Palette } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Projects = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState<"all" | "code">("all");

  const projects = [
    {
      id: 1,
      title: "AlphaHub",
      type: "code",
      description: "A real-time multi-modal alpha signal engine",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      skills: ["Vite", "API", "React", "TypeScript", "TailwindCSS"],
      github: "https://github.com/sumali-junuthula/alpha-hub",
      demo: "https://alpha-hub-100p.onrender.com/",
      views: 101,
      category: "FinTech"
    },
    {
      id: 3,
      title: "DealLab",
      type: "code",
      description: "AI-Powered M&A Screener & Strategy Assistant",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      skills: ["Vite", "React", "HTML", "TypeScript", "JavaScript", "TailwindCSS"],
      github: "https://github.com/sumali-junuthula/deal-lab",
      demo: "",
      views: 215,
      category: "FinTech"
    },
    {
      id: 4,
      title: "KnowYourRights",
      type: "code",
      description: "AI-Powered M&A Screener & Strategy Assistant",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      skills: ["react Navigation", "React Native (Expo)", "Firebase", "Node.js", "HTML", "TypeScript", "JavaScript", "TailwindCSS"],
      github: "https://github.com/sumali-junuthula/know-your-rights",
      demo: "",
      views: 215,
      category: "FinTech"
    },
    {
      id: 5,
      title: "My Portfolio",
      type: "code",
      description: "A wesbite that showcases my experiences, skills, and projects.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      skills: ["Vite", "React", "HTML", "TypeScript", "JavaScript", "TailwindCSS"],
      github: "https://github.com/sumali-junuthula/sumali-junuthula.github.io",
      demo: "https://sumali-junuthula.github.io/",
      views: 215,
      category: "Creative Coding"
    },
  ];

  const filteredProjects = projects.filter(project => 
    filter === "all" || project.type === filter
  );

  const handleShare = async (project: typeof projects[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: project.demo,
        });
      } catch (err) {
        // Fallback to clipboard
        navigator.clipboard.writeText(project.demo);
        toast({
          title: "Link copied!",
          description: "Project link copied to clipboard.",
        });
      }
    } else {
      navigator.clipboard.writeText(project.demo);
      toast({
        title: "Link copied!",
        description: "Project link copied to clipboard.",
      });
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-cyber">Featured</span>{" "}
            <span className="font-mono text-gradient-code">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A curated collection of creative coding projects and digital artworks 
            that showcase the intersection of technology and creativity.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              onClick={() => setFilter("all")}
              className="group"
            >
              All Projects
            </Button>
            <Button
              variant={filter === "code" ? "default" : "ghost"}
              onClick={() => setFilter("code")}
              className="group"
            >
              <Code2 className="mr-2 h-4 w-4" />
              Code Projects
            </Button>
          </div>
        </div>

        {/* Projects Grid - Terminal Style */}
        <div className="max-w-4xl mx-auto space-y-20">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden bg-card border-primary/10 hover:border-primary/60 transition-all duration-500 animate-fade-in relative"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'var(--terminal-bg)',
                boxShadow: '0 0 20px hsl(var(--primary) / 0.2)'
              }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 p-3 border-b border-primary/20 bg-primary/5">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs font-mono text-primary">{project.category}</span>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm">
                <div className="text-primary mb-2">
                  <span className="text-accent">user@portfolio:~$</span> cat {project.title.toLowerCase().replace(/\s+/g, '_')}.md
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Skills as terminal output */}
                <div className="mb-4">
                  <div className="text-secondary mb-1">Dependencies:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-secondary/10 text-xs rounded text-secondary border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-xs text-accent">
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    Views: {project.views.toLocaleString()}
                  </span>
                </div>

                {/* Terminal Actions */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group/btn font-mono text-xs border-primary/30 hover:border-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        git clone
                      </a>
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 group/btn font-mono text-xs"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        ./run
                      </a>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleShare(project)}
                      className="group/btn font-mono text-xs"
                    >
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;