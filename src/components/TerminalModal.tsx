import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { TerminalHistory, TerminalCommand } from '../types/portfolio';
import { terminalCommands, skills, projects, aboutInfo } from '../data/portfolio';
import { useResizable } from '../hooks/useResizable';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState<TerminalHistory[]>([
    {
      command: 'welcome',
      output: [
        `Welcome to ${aboutInfo.name}'s Terminal Portfolio!`,
        `Type 'help' to see available commands.`,
        '',
      ],
      timestamp: new Date()
    }
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Resizable functionality
  const { state, isResizing, isDragging, handleMouseDown, handleDragStart } = useResizable({
    width: Math.min(1000, window.innerWidth * 0.8),
    height: Math.min(600, window.innerHeight * 0.8),
    x: (window.innerWidth - Math.min(1000, window.innerWidth * 0.8)) / 2,
    y: (window.innerHeight - Math.min(600, window.innerHeight * 0.8)) / 2
  });

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [history]);

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const args = trimmedCmd.split(' ');
    const command = args[0];
    
    let output: string[] = [];

    switch (command) {
      case 'help':
      case 'h':
      case '?':
        output = [
          'Available commands:',
          '',
          ...terminalCommands.map(cmd => 
            `  ${cmd.command.padEnd(12)} - ${cmd.description}${cmd.aliases ? ` (${cmd.aliases.join(', ')})` : ''}`
          ),
          ''
        ];
        break;

      case 'skills':
      case 'abilities':
      case 'tech':
        const category = args[1];
        const filteredSkills = category 
          ? skills.filter(skill => skill.category === category)
          : skills;
        
        output = [
          'Technical Skills:',
          '',
          ...filteredSkills.map(skill => 
            `  ${skill.name.padEnd(15)} [${skill.level.toUpperCase()}] - ${skill.description}`
          ),
          '',
          'Categories: frontend, backend, tools, languages',
          'Usage: skills [category]'
        ];
        break;

      case 'projects':
      case 'work':
      case 'portfolio':
        output = [
          'Portfolio Projects:',
          '',
          ...projects.map(project => [
            `  📁 ${project.title} (${project.status})`,
            `     ${project.description}`,
            `     Tech: ${project.technologies.join(', ')}`,
            project.github ? `     GitHub: ${project.github}` : '',
            project.demo ? `     Demo: ${project.demo}` : '',
            ''
          ]).flat(),
        ];
        break;

      case 'about':
      case 'info':
      case 'bio':
        output = [
          `About ${aboutInfo.name}:`,
          '',
          `  Title: ${aboutInfo.title}`,
          `  Location: ${aboutInfo.location}`,
          `  Experience: ${aboutInfo.experience}`,
          '',
          ...aboutInfo.description.split('\n').map(line => `  ${line.trim()}`),
          ''
        ];
        break;

      case 'contact':
      case 'reach':
      case 'email':
        output = [
          'Contact Information:',
          '',
          `  📧 Email: ${aboutInfo.email}`,
          `  💼 LinkedIn: ${aboutInfo.linkedin}`,
          `  🐙 GitHub: ${aboutInfo.github}`,
          `  🌐 Website: ${aboutInfo.website}`,
          ''
        ];
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        return;

      case 'whoami':
        output = [
          aboutInfo.name,
          aboutInfo.title,
          `Location: ${aboutInfo.location}`,
          ''
        ];
        break;

      case 'date':
        output = [
          new Date().toString(),
          ''
        ];
        break;

      case 'pwd':
        output = [
          `/home/${aboutInfo.name.toLowerCase().replace(' ', '')}/portfolio`,
          ''
        ];
        break;

      case '':
        return;

      default:
        output = [
          `Command not found: ${command}`,
          `Type 'help' to see available commands.`,
          ''
        ];
        break;
    }

    const newEntry: TerminalHistory = {
      command: cmd,
      output,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newEntry]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCommand.trim()) {
      setCommandHistory(prev => [...prev, currentCommand]);
      processCommand(currentCommand);
      setCurrentCommand('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div 
        className="terminal-window fixed overflow-hidden z-50 select-none"
        style={{
          left: state.x,
          top: state.y,
          width: state.width,
          height: state.height,
          minWidth: '300px',
          minHeight: '200px',
          cursor: isDragging ? 'grabbing' : 'default'
        }}
      >
        <div 
          className="terminal-header cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
        >
          <div className="traffic-lights">
            <button 
              className="traffic-light traffic-red"
              onClick={onClose}
            />
            <button className="traffic-light traffic-yellow" />
            <button className="traffic-light traffic-green" />
          </div>
          <div className="text-sm font-mono text-terminal-text opacity-70">
            Terminal — {aboutInfo.name}'s Portfolio
          </div>
          <button 
            onClick={onClose}
            className="text-terminal-text hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        
        <div ref={contentRef} className="terminal-content" style={{ height: state.height - 64 }}>
          {history.map((entry, index) => (
            <div key={index} className="mb-2">
              {entry.command !== 'welcome' && (
                <div className="flex items-center gap-2 terminal-prompt">
                  <span className="text-terminal-success">user@portfolio</span>
                  <span className="text-terminal-text">:</span>
                  <span className="text-primary">~</span>
                  <span className="text-terminal-text">$</span>
                  <span className="text-terminal-text ml-2">{entry.command}</span>
                </div>
              )}
              <div className="terminal-output whitespace-pre-line">
                {entry.output.join('\n')}
              </div>
            </div>
          ))}
          
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <div className="terminal-prompt flex items-center gap-2">
              <span className="text-terminal-success">user@portfolio</span>
              <span className="text-terminal-text">:</span>
              <span className="text-primary">~</span>
              <span className="text-terminal-text">$</span>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-terminal-text font-mono"
              autoComplete="off"
              spellCheck="false"
            />
            <span className="terminal-cursor h-5">|</span>
          </form>
        </div>

        {/* Resize handles */}
        <div 
          className="absolute top-0 left-0 w-2 h-2 cursor-nw-resize"
          onMouseDown={(e) => handleMouseDown(e, 'top-left')}
        />
        <div 
          className="absolute top-0 right-0 w-2 h-2 cursor-ne-resize"
          onMouseDown={(e) => handleMouseDown(e, 'top-right')}
        />
        <div 
          className="absolute bottom-0 left-0 w-2 h-2 cursor-sw-resize"
          onMouseDown={(e) => handleMouseDown(e, 'bottom-left')}
        />
        <div 
          className="absolute bottom-0 right-0 w-2 h-2 cursor-se-resize"
          onMouseDown={(e) => handleMouseDown(e, 'bottom-right')}
        />
        <div 
          className="absolute top-0 left-2 right-2 h-1 cursor-n-resize"
          onMouseDown={(e) => handleMouseDown(e, 'top')}
        />
        <div 
          className="absolute bottom-0 left-2 right-2 h-1 cursor-s-resize"
          onMouseDown={(e) => handleMouseDown(e, 'bottom')}
        />
        <div 
          className="absolute left-0 top-2 bottom-2 w-1 cursor-w-resize"
          onMouseDown={(e) => handleMouseDown(e, 'left')}
        />
        <div 
          className="absolute right-0 top-2 bottom-2 w-1 cursor-e-resize"
          onMouseDown={(e) => handleMouseDown(e, 'right')}
        />
      </div>
    </div>
  );
};
