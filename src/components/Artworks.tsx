import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Terminal, Loader2 } from 'lucide-react';

interface Artwork {
  id: string;
  filename: string;
  title: string;
  colors: string[];
  description: string;
}

const artworks: Artwork[] = [
  { 
    id: '1', 
    filename: 'digital_dreams.jpg', 
    title: 'Digital Dreams',
    colors: ['#ff6b9d', '#45e3ff', '#ffd93d'],
    description: 'An exploration of digital consciousness'
  },
  { 
    id: '2', 
    filename: 'code_canvas.png', 
    title: 'Code Canvas',
    colors: ['#9c27b0', '#00bcd4', '#4caf50'],
    description: 'Where algorithms meet aesthetics'
  },
  { 
    id: '3', 
    filename: 'neural_networks.jpg', 
    title: 'Neural Networks',
    colors: ['#f44336', '#ff9800', '#795548'],
    description: 'Visualizing artificial intelligence'
  },
  { 
    id: '4', 
    filename: 'pixel_poetry.png', 
    title: 'Pixel Poetry',
    colors: ['#e91e63', '#3f51b5', '#009688'],
    description: 'Poetry rendered in pixels'
  },
  { 
    id: '5', 
    filename: 'quantum_expressions.jpg', 
    title: 'Quantum Expressions',
    colors: ['#673ab7', '#2196f3', '#00e676'],
    description: 'Quantum states visualized'
  },
  { 
    id: '6', 
    filename: 'synthetic_emotions.png', 
    title: 'Synthetic Emotions',
    colors: ['#ff5722', '#ffc107', '#8bc34a'],
    description: 'Emotions in synthetic form'
  }
];

const TerminalArtworks = () => {
  const [currentPath, setCurrentPath] = useState('~');
  const [command, setCommand] = useState('');
  const [logs, setLogs] = useState<string[]>([
    'Welcome to ArtworkShell v2.0.1',
    'Type "help" for available commands',
    ''
  ]);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isCompiling, setIsCompiling] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const addLog = (text: string) => {
    setLogs(prev => {
      const newLogs = [...prev, text];
      // Keep only last 50 logs for performance
      return newLogs.slice(-50);
    });
  };

  const simulateCompilation = async (artwork: Artwork) => {
    if (isCompiling) return; // Prevent overlapping compilations
    
    setIsCompiling(true);
    setSelectedArtwork(null); // Clear previous artwork immediately
    
    addLog(`> loading ${artwork.filename}`);
    await new Promise(resolve => setTimeout(resolve, 400));
    addLog('> rendering pixels...');
    await new Promise(resolve => setTimeout(resolve, 300));
    addLog('> applying color palette...');
    await new Promise(resolve => setTimeout(resolve, 200));
    addLog(`> success: masterpiece displayed! ✓`);
    addLog('');
    
    setSelectedArtwork(artwork);
    setIsCompiling(false);
  };

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    addLog(`$ ${cmd}`);

    if (trimmedCmd === 'help') {
      addLog('Available commands:');
      addLog('  ls              - list all artworks');
      addLog('  cd /artworks    - navigate to artworks directory');
      addLog('  open <filename> - display artwork');
      addLog('  clear           - clear terminal');
      addLog('  help            - show this help');
      addLog('');
    } else if (trimmedCmd === 'ls') {
      addLog('Artworks:');
      artworks.forEach(art => {
        addLog(`  ${art.filename.padEnd(25)} ${art.title}`);
      });
      addLog('');
    } else if (trimmedCmd === 'cd /artworks' || trimmedCmd === 'cd artworks') {
      setCurrentPath('/artworks');
      addLog('Navigated to /artworks');
      addLog('');
    } else if (trimmedCmd === 'cd' || trimmedCmd === 'cd ~') {
      setCurrentPath('~');
      addLog('Navigated to home');
      addLog('');
    } else if (trimmedCmd.startsWith('open ')) {
      const filename = trimmedCmd.substring(5).trim();
      const artwork = artworks.find(art => 
        art.filename.toLowerCase() === filename ||
        art.id === filename
      );
      if (artwork) {
        await simulateCompilation(artwork);
      } else {
        addLog(`Error: artwork "${filename}" not found`);
        addLog('Use "ls" to see available artworks');
        addLog('');
      }
    } else if (trimmedCmd === 'clear') {
      setLogs([]);
    } else if (trimmedCmd === '') {
      addLog('');
    } else {
      addLog(`Command not found: ${cmd}`);
      addLog('Type "help" for available commands');
      addLog('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim() && !isCompiling) {
      handleCommand(command);
      setCommand('');
    }
  };

  return (
    <section className="relative py-20 px-6 bg-background border-t-2 border-primary/20">
      <div className="max-w-7xl mx-auto">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Terminal className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
              /artworks
            </h2>
          </div>
          <p className="text-muted-foreground font-mono">
            {'> Interactive artwork terminal - Type commands to explore'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Terminal Console */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-background/95 border-2 border-primary/30 shadow-lg overflow-hidden">
              {/* Terminal Window Header */}
              <div className="bg-muted/50 border-b border-border/50 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-4">
                  artwork-shell
                </span>
              </div>

              {/* Terminal Body */}
              <div className="bg-background/50 p-6 font-mono text-sm h-[500px] overflow-y-auto">
                {/* Logs */}
                <div className="space-y-1 text-foreground/90">
                  {logs.map((log, i) => (
                    <div key={i} className="whitespace-pre-wrap">
                      {log.startsWith('>') ? (
                        <span className="text-primary">{log}</span>
                      ) : log.startsWith('$') ? (
                        <span className="text-secondary">{log}</span>
                      ) : log.includes('Error:') ? (
                        <span className="text-destructive">{log}</span>
                      ) : log.includes('success:') ? (
                        <span className="text-green-500">{log}</span>
                      ) : (
                        log
                      )}
                    </div>
                  ))}
                  <div ref={logsEndRef} />
                </div>

                {/* Command Input */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
                  <span className="text-primary">{currentPath}$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    disabled={isCompiling}
                    className="flex-1 bg-transparent border-none outline-none text-foreground"
                    autoFocus
                  />
                  {isCompiling && (
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  )}
                </form>
              </div>
            </Card>

            {/* Quick Commands */}
            <div className="mt-4 flex flex-wrap gap-2">
              {['ls', 'help', 'open digital_dreams.jpg', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    setCommand(cmd);
                    inputRef.current?.focus();
                  }}
                  disabled={isCompiling}
                  className="px-3 py-1 text-xs font-mono bg-muted/50 hover:bg-muted border border-border/50 rounded transition-colors disabled:opacity-50"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Artwork Viewer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-background/95 border-2 border-primary/30 shadow-lg overflow-hidden h-[580px]">
              {/* Viewer Window Header */}
              <div className="bg-muted/50 border-b border-border/50 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-4">
                  artwork-viewer
                </span>
              </div>

              {/* Viewer Body */}
              <div className="bg-background/50 p-6 h-[calc(100%-42px)] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  {isCompiling ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center"
                    >
                      <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                      <p className="font-mono text-muted-foreground">Compiling artwork...</p>
                    </motion.div>
                  ) : selectedArtwork ? (
                    <motion.div
                      key={selectedArtwork.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-full text-center"
                    >
                      {/* Generative Art Display */}
                      <div className="relative w-full aspect-square max-w-md mx-auto mb-6 rounded-lg overflow-hidden border-2 border-primary/20 bg-background">
                        <svg className="w-full h-full" viewBox="0 0 200 200">
                          {/* Background */}
                          <rect width="200" height="200" fill="hsl(var(--background))" />
                          
                          {/* Generative Pattern */}
                          {selectedArtwork.colors.map((color, i) => (
                            <g key={i}>
                              <circle
                                cx={40 + i * 35}
                                cy={60 + Math.sin(i) * 30}
                                r={25}
                                fill={color}
                                opacity={0.7}
                              />
                              <rect
                                x={30 + i * 30}
                                y={120}
                                width={25}
                                height={50}
                                fill={color}
                                opacity={0.5}
                                transform={`rotate(${i * 20} ${42.5 + i * 30} 145)`}
                              />
                            </g>
                          ))}
                          
                          {/* Code-like lines */}
                          {selectedArtwork.colors.map((color, i) => (
                            <line
                              key={`line-${i}`}
                              x1="20"
                              y1={20 + i * 15}
                              x2={150 - i * 10}
                              y2={20 + i * 15}
                              stroke={color}
                              strokeWidth="3"
                              opacity="0.4"
                            />
                          ))}
                        </svg>
                      </div>

                      {/* Artwork Info */}
                      <div className="font-mono text-left space-y-2 text-sm">
                        <div className="text-primary">
                          <span className="text-muted-foreground">filename:</span> {selectedArtwork.filename}
                        </div>
                        <div>
                          <span className="text-muted-foreground">title:</span> {selectedArtwork.title}
                        </div>
                        <div>
                          <span className="text-muted-foreground">description:</span> {selectedArtwork.description}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">palette:</span>
                          <div className="flex gap-1">
                            {selectedArtwork.colors.map((color, i) => (
                              <div
                                key={i}
                                className="w-5 h-5 rounded border border-border"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-center text-muted-foreground font-mono"
                    >
                      <div className="text-6xl mb-4">📁</div>
                      <p>No artwork selected</p>
                      <p className="text-sm mt-2">Type "ls" to list artworks</p>
                      <p className="text-sm">Then "open &lt;filename&gt;" to view</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Artwork Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-xl font-mono text-foreground mb-6 text-center">
            {'> Quick Access Gallery'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {artworks.map((artwork) => (
              <button
                key={artwork.id}
                onClick={() => simulateCompilation(artwork)}
                disabled={isCompiling}
                className="group relative aspect-square rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-background"
              >
                {/* Generative Preview */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <rect width="100" height="100" fill="hsl(var(--background))" />
                  {artwork.colors.map((color, i) => (
                    <circle
                      key={i}
                      cx={25 + i * 25}
                      cy={50}
                      r={15}
                      fill={color}
                      opacity={0.7}
                    />
                  ))}
                </svg>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="text-xs font-mono text-primary">
                    {artwork.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalArtworks;