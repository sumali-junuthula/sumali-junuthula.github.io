import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Cursor />
      <Header />
      <div className="pt-20"> {/* Add padding to account for fixed header */}
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
      </div>
      
      {/* Help Section */}
      <section className="py-8 px-6 bg-muted/30 border-t border-border/20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-foreground mb-4 font-mono">Navigation Help</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <p className="font-mono mb-2">Recruiter Commands:</p>
              <ul className="space-y-1 font-mono">
                <li>• <span className="text-primary">hire</span> - Let's talk!</li>
                <li>• <span className="text-primary">resume</span> - View experience & awards</li>
                <li>• <span className="text-primary">github</span> - Check my code</li>
                <li>• <span className="text-primary">linkedin</span> - Professional profile</li>
                <li>• <span className="text-primary">skills</span> - Technical expertise</li>
                <li>• <span className="text-primary">projects</span> - Portfolio showcase</li>
              </ul>
            </div>
            <div>
              <p className="font-mono mb-2">Quick Tips:</p>
              <ul className="space-y-1">
                <li>• Type command in terminal and press Enter</li>
                <li>• Click social icons in header for contact</li>
                <li>• Scroll naturally or use search navigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
            © 2025 Creative Developer. Crafted with <span className="text-accent">♥</span> and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
