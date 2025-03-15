
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ title, description, image, tags, demoUrl, githubUrl }: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="group relative rounded-lg overflow-hidden border border-border bg-card h-full flex flex-col transition-all duration-300 hover:shadow-md">
      <div className="aspect-video relative overflow-hidden bg-accent/5">
        <div 
          className={cn(
            "absolute inset-0 bg-accent/10 flex items-center justify-center",
            isLoaded ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="w-10 h-10 rounded-full border-2 border-t-transparent border-primary animate-spin" />
        </div>
        <img 
          src={image} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            "group-hover:scale-105",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="text-xs py-1 px-2 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="flex gap-3 mt-auto">
          {demoUrl && (
            <a 
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-1 px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              Live Demo <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          )}
          
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-1 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors duration-200"
            >
              Code <Github className="w-3 h-3 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
