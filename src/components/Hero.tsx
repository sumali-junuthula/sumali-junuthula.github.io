import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, Palette } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-cyber opacity-30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-artistic opacity-20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-cyber opacity-10 rounded-full blur-3xl animate-pulse" /> */}
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-secondary/30 animate-float" style={{ animationDelay: '-0.5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent/20 rotate-12 animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main title with glitch effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
          <span className="text-gradient-cyber">Sumali </span>
          {/* <br /> */}
          <span className="font-mono text-gradient-code">Junuthula</span>
          {/* Glitch overlay */}
          {/* <span className="absolute inset-0 text-gradient-cyber animate-glitch opacity-50">
            Creative
            <br />
            <span className="font-mono text-gradient-code">Developer</span>
          </span> */}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-1xl text-muted-foreground/70 mb-8 max-w-2xl mx-auto">
          I'm a <span className="text-2xl text-muted-foreground">creative</span> <span className="text-2xl text-muted-foreground font-mono">{`{developer}`}</span>
          {" "} with experience in {" "} <br />
          <span className="text-2xl text-muted-foreground font-mono">machine learning</span>, {" "}
          <span className="text-2xl text-muted-foreground font-mono">quantitative research</span>, and {" "}
          <span className="text-2xl text-muted-foreground font-mono">software engineering</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="default" size="lg" className="group">
            <Code2 className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            View Projects
          </Button>
          <Button variant="default" size="lg" className="group">
            <Palette className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            See Artwork
          </Button>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;