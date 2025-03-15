
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <Link to="/" className="font-semibold text-xl">Portfolio.</Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            A minimalist personal portfolio website crafted with simplicity and purpose.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium">Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">About</Link></li>
            <li><Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Projects</Link></li>
            <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Blog</Link></li>
            <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium">Connect</h3>
          <div className="flex space-x-3">
            <a href="#" aria-label="Github" className="w-9 h-9 rounded-full flex items-center justify-center border border-border hover:bg-secondary transition-colors duration-200">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full flex items-center justify-center border border-border hover:bg-secondary transition-colors duration-200">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full flex items-center justify-center border border-border hover:bg-secondary transition-colors duration-200">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Email" className="w-9 h-9 rounded-full flex items-center justify-center border border-border hover:bg-secondary transition-colors duration-200">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Portfolio. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
