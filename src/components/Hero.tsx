
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background shapes/elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[10%] w-60 h-60 rounded-full bg-accent/20 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[15%] left-[10%] w-80 h-80 rounded-full bg-accent/10 blur-[120px] animate-[pulse_10s_ease-in-out_infinite_1s]" />
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-2 animate-slide-down opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
              Personal Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:leading-tight text-balance">
              Crafting Digital Experiences with <span className="text-primary">Simplicity</span> and <span className="text-primary">Purpose</span>
            </h1>
          </div>
          
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground animate-slide-down opacity-0" style={{ animationDelay: '0.3s' }}>
            I'm a designer and developer focused on creating elegant, intuitive, and functional digital experiences that prioritize user needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <Link 
              to="/projects" 
              className={cn(
                "group inline-flex items-center justify-center px-6 py-3 rounded-lg",
                "bg-primary text-primary-foreground hover:bg-primary/90",
                "font-medium text-sm md:text-base transition-all duration-300"
              )}
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "group inline-flex items-center justify-center px-6 py-3 rounded-lg",
                "bg-secondary text-secondary-foreground hover:bg-secondary/90",
                "font-medium text-sm md:text-base transition-all duration-300"
              )}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
        <span className="text-xs text-muted-foreground mt-2">Scroll</span>
      </div>
    </section>
  );
}
