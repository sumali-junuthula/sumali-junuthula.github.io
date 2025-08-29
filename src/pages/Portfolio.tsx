import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience  from "@/components/Experience";
import Projects from "@/components/Projects";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Let's create something amazing together
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="mailto:hello@example.com" 
              className="text-primary hover:text-secondary transition-colors font-mono"
            >
              hello@example.com
            </a>
            <a 
              href="https://github.com/example" 
              className="text-primary hover:text-secondary transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/example" 
              className="text-primary hover:text-secondary transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            © 2024 Creative Developer. Crafted with <span className="text-accent">♥</span> and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;