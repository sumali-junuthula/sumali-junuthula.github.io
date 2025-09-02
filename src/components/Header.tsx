import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Stop cursor blinking when typing
  useEffect(() => {
    if (isTyping) {
      setShowCursor(true);
      const timeout = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [searchValue, isTyping]);

  const sections = {
    hero: "hero",
    skills: "skills", 
    projects: "projects",
    experience: "experience",
    awards: "experience", // awards are in experience section
    home: "hero",
    about: "hero",
    work: "projects",
    contact: "hero",
    // Recruiter-focused commands
    hire: "hero",
    resume: "experience",
    cv: "experience",
    portfolio: "projects",
    github: () => window.open("https://github.com/example", "_blank"),
    linkedin: () => window.open("https://linkedin.com/in/example", "_blank"),
    email: () => window.open("mailto:hello@example.com", "_blank")
  };

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const query = searchValue.toLowerCase().trim();
      const action = sections[query as keyof typeof sections];
      
      if (typeof action === "function") {
        action();
      } else if (action) {
        const element = document.getElementById(action);
        if (element) {
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
        }
      }
      setSearchValue("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setIsTyping(true);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side - Name and Social Icons */}
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold text-foreground font-mono">
            Creative Developer
          </h1>
          
          <div className="flex items-center gap-3">
            <a 
              href="mailto:hello@example.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://github.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/example"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Right side - Recruiter Terminal */}
        <div className="relative">
          <div className="bg-black/90 rounded-md border border-primary/30 shadow-neon px-3 py-2 min-w-[280px] font-mono text-xs">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-1 pb-1 border-b border-primary/20">
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <span className="text-muted-foreground text-[10px] ml-1">recruiter.sh</span>
              </div>
              <Terminal size={12} className="text-primary" />
            </div>
            
            {/* Terminal Content */}
            <div className="space-y-1">
              <div className="text-green-400/70 text-[10px]">
                # Try: hire | resume | github | linkedin | skills
              </div>
              <div className="flex items-center">
                <span className="text-green-400">hr@company</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-muted-foreground mr-1">$</span>
                <div className="flex-1 relative">
                  <Input
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyDown={handleSearch}
                    placeholder="hire me"
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/40 font-mono text-xs p-0 h-auto text-primary"
                  />
                  {!searchValue && (showCursor || isTyping) && (
                    <span className="absolute left-0 top-0 text-primary animate-pulse">▊</span>
                  )}
                  {searchValue && (showCursor || isTyping) && (
                    <span 
                      className="absolute top-0 text-primary animate-pulse" 
                      style={{ left: `${searchValue.length * 0.5}em` }}
                    >
                      ▊
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
