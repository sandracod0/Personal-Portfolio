
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  slug: string;
}

export default function BlogCard({ title, excerpt, coverImage, date, readTime, slug }: BlogCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <Link 
      to={`/blog/${slug}`} 
      className="group block rounded-lg overflow-hidden border border-border bg-card h-full transition-all duration-300 hover:shadow-md"
    >
      <div className="aspect-[16/9] relative overflow-hidden bg-accent/5">
        <div 
          className={cn(
            "absolute inset-0 bg-accent/10 flex items-center justify-center",
            isLoaded ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="w-10 h-10 rounded-full border-2 border-t-transparent border-primary animate-spin" />
        </div>
        <img 
          src={coverImage} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            "group-hover:scale-105",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-200">{title}</h3>
        <p className="text-sm text-muted-foreground">{excerpt}</p>
      </div>
    </Link>
  );
}
