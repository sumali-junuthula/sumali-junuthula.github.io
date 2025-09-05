import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Rnd } from "react-rnd";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);

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

  // Skills and Projects data
  const skillsData = {
    "Development": ["React", "TypeScript", "Node.js", "Python", "Three.js", "WebGL"],
    "Design": ["UI/UX", "Digital Art", "3D Modeling", "Motion Graphics", "Branding"],
    "Creative Coding": ["Generative Art", "Interactive Media", "Data Visualization", "Shaders"],
    "Tech Stack": ["Docker", "AWS", "Git", "Blender", "Adobe Suite", "Figma"]
  };

  const projectsData = [
    "AlphaHub",
    "DealLab", 
    "KnowYourRights",
    "My Website"
  ];

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
    github: () => window.open("https://github.com/sumali-junuthula", "_blank"),
    linkedin: () => window.open("https://www.linkedin.com/in/sumali-junuthula/", "_blank"),
    email: () => window.open("mailto:sumali.junuthula@gmail.com", "_blank")
  };

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const query = searchValue.toLowerCase().trim();
      
      // Handle special commands in modal mode
      if (isTerminalOpen) {
        const command = `recruiter@portfolio:~$ ${query}`;
        
        if (query === "skills") {
          const skillsList = Object.entries(skillsData).map(([category, skills]) => 
            `${category}:\n  ${skills.join(', ')}`
          ).join('\n\n');
          
          setTerminalHistory(prev => [
            ...prev,
            command,
            `\n# Technical Skills Overview\n\n${skillsList}\n`
          ]);
          setSearchValue("");
          return;
        }
        
        if (query === "projects") {
          const projectsList = projectsData.map((project, index) => 
            `${(index + 1).toString().padStart(2, '0')}. ${project}`
          ).join('\n');
          
          setTerminalHistory(prev => [
            ...prev,
            command,
            `\n# Featured Projects Portfolio\n\n${projectsList}\n`
          ]);
          setSearchValue("");
          return;
        }
        
        // Add command to history for other commands
        setTerminalHistory(prev => [...prev, command]);
      }
      
      // Handle regular navigation
      const action = sections[query as keyof typeof sections];
      
      if (typeof action === "function") {
        action();
      } else if (action) {
        // Close modal if it's open before navigating
        if (isTerminalOpen) {
          setIsTerminalOpen(false);
        }
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
          <h1 className="text-xl font-bold text-muted-foreground font-mono">
            Sumali Junuthula
          </h1>
          
          <div className="flex items-center gap-3">
            <a 
              href="mailto:sumali.junuthula@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://github.com/sumali-junuthula"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sumali-junuthula/"
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
          <div className="bg-card/90 backdrop-blur-md rounded-lg border border-border shadow-neon px-3 py-2 min-w-[300px] font-mono text-sm">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                  <div 
                    className="w-2.5 h-2.5 rounded-full bg-secondary cursor-pointer hover:bg-secondary/80 transition-colors shadow-neon"
                    onClick={() => setIsTerminalOpen(true)}
                  ></div>
                </div>
                <span className="text-muted-foreground text-xs ml-1">recruiter.sh</span>
              </div>
              <Terminal size={14} className="text-primary" />
            </div>
            
            {/* Terminal Content */}
            <div className="space-y-2">
              <div className="text-secondary/80 text-xs">
                # Try: hire | resume | github | linkedin | skills
              </div>
              <div className="flex items-center">
                <span className="text-secondary">hr@company</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-accent">~</span>
                <span className="text-muted-foreground mr-1">$</span>
                <div className="flex-1 relative">
                  <Input
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyDown={handleSearch}
                    placeholder="hire me"
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/50 font-mono text-sm p-0 h-auto text-foreground"
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
        
        {/* Resizable Terminal Modal */}
        {isTerminalOpen && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
            <Rnd
              default={{
                x: Math.max(50, (window.innerWidth - 800) / 2),
                y: Math.max(50, (window.innerHeight - 600) / 2),
                width: 800,
                height: 600,
              }}
              minWidth={400}
              minHeight={300}
              bounds="window"
              dragHandleClassName="terminal-drag-handle"
              className="font-mono"
              enableResizing={{
                top: true,
                right: true,
                bottom: true,
                left: true,
                topRight: true,
                bottomRight: true,
                bottomLeft: true,
                topLeft: true,
              }}
            >
              <div className="h-full bg-card/95 backdrop-blur-md border border-border/50 rounded-lg overflow-hidden shadow-2xl">
                {/* Terminal Header - Draggable */}
                <div className="terminal-drag-handle flex items-center justify-between p-4 bg-muted/30 border-b border-border/50 cursor-move">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div 
                        className="w-3 h-3 rounded-full bg-destructive cursor-pointer hover:bg-destructive/80 transition-colors"
                        onClick={() => setIsTerminalOpen(false)}
                      ></div>
                      <div className="w-3 h-3 rounded-full bg-accent cursor-pointer hover:bg-accent/80 transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary cursor-pointer hover:bg-secondary/80 transition-colors"></div>
                    </div>
                    <span className="text-muted-foreground text-sm font-medium">Recruiter Terminal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      Connected • Ready
                    </div>
                    <Terminal size={16} className="text-primary" />
                  </div>
                </div>
                
                {/* Terminal Content - Non-draggable */}
                <div className="h-full flex flex-col" style={{ height: 'calc(100% - 64px)' }}>
                  <ScrollArea className="flex-1">
                    <div className="p-6 space-y-4 text-sm">
                      <div className="text-primary font-semibold text-base">
                        📋 Recruiter Command Center
                      </div>
                      
                      <div className="bg-muted/20 border border-border/30 rounded-lg p-4 space-y-3">
                        <div className="text-secondary font-medium">Quick Navigation Commands:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                          <div className="space-y-2">
                            <div className="text-primary font-medium">📱 Contact & Links:</div>
                            <div className="space-y-1 text-muted-foreground">
                              <div>• <span className="text-accent font-mono">hire</span> - Contact information</div>
                              <div>• <span className="text-accent font-mono">github</span> - View code repositories</div>
                              <div>• <span className="text-accent font-mono">linkedin</span> - Professional profile</div>
                              <div>• <span className="text-accent font-mono">email</span> - Send direct message</div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-primary font-medium">📊 Portfolio Content:</div>
                            <div className="space-y-1 text-muted-foreground">
                              <div>• <span className="text-accent font-mono">skills</span> - Technical expertise</div>
                              <div>• <span className="text-accent font-mono">projects</span> - Featured work</div>
                              <div>• <span className="text-accent font-mono">experience</span> - Work history</div>
                              <div>• <span className="text-accent font-mono">resume</span> - Download CV</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/10 border border-border/20 rounded-lg p-4 space-y-3">
                        <div className="text-accent font-medium">⚡ System Status:</div>
                        <div className="flex items-center gap-4 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                            <span className="text-muted-foreground">Portfolio Online</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                            <span className="text-muted-foreground">Response Time: &lt;50ms</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                            <span className="text-muted-foreground">Last Updated: Today</span>
                          </div>
                        </div>
                      </div>

                      {/* Command History */}
                      {terminalHistory.length > 0 && (
                        <div className="bg-muted/10 border border-border/20 rounded-lg p-4 space-y-3">
                          <div className="text-primary font-medium">📝 Recent Commands:</div>
                          <div className="space-y-2 max-h-40 overflow-y-auto">
                            {terminalHistory.map((entry, index) => (
                              <div key={index} className="text-xs">
                                {entry.startsWith('recruiter@portfolio:~$') ? (
                                  <div className="text-secondary font-mono bg-muted/30 p-2 rounded">{entry}</div>
                                ) : (
                                  <div className="text-muted-foreground whitespace-pre-line pl-4 border-l-2 border-border/30">{entry}</div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                  
                  {/* Interactive Prompt */}
                  <div className="border-t border-border/30 bg-muted/20 p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-secondary font-semibold">recruiter@portfolio</span>
                      <span className="text-muted-foreground">:</span>
                      <span className="text-accent">~</span>
                      <span className="text-muted-foreground">$</span>
                      <div className="flex-1 relative">
                        <Input
                          value={searchValue}
                          onChange={handleInputChange}
                          onKeyDown={handleSearch}
                          placeholder="Type a command (hire, skills, github, etc.)"
                          className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60 font-mono text-sm p-0 h-auto text-foreground ml-2"
                          autoFocus
                        />
                        {!searchValue && (showCursor || isTyping) && (
                          <span className="absolute left-2 top-0 text-primary animate-pulse">▊</span>
                        )}
                        {searchValue && (showCursor || isTyping) && (
                          <span 
                            className="absolute top-0 text-primary animate-pulse" 
                            style={{ left: `${8 + (searchValue.length * 7)}px` }}
                          >
                            ▊
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Rnd>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;