
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  // Category filter
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Sample project data
  const projects = [
    {
      title: "Digital Portfolio",
      description: "A minimalist portfolio website with smooth animations and a focus on typography.",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-commerce Dashboard",
      description: "Admin dashboard for managing products, orders and customer data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Material UI"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather forecasting application with location-based data.",
      image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=2069&auto=format&fit=crop",
      tags: ["JavaScript", "API Integration", "CSS3"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Recipe Finder",
      description: "Search and save recipes with filtering options for dietary preferences.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2080&auto=format&fit=crop",
      tags: ["React Native", "Firebase", "Redux"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Travel Blog",
      description: "Personal travel blog with photo galleries and interactive maps.",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop",
      tags: ["WordPress", "PHP", "JavaScript"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile app for tracking workouts, nutrition, and personal goals.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
      tags: ["React Native", "GraphQL", "MongoDB"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity design for a sustainable fashion company.",
      image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop",
      tags: ["Branding", "Logo Design", "Identity"],
      category: "design",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Photo Editing App",
      description: "Mobile application for photo editing with AI-powered filters.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2073&auto=format&fit=crop",
      tags: ["Swift", "Core ML", "UIKit"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "UI Component Library",
      description: "Reusable UI components built with React and styled-components.",
      image: "https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=2073&auto=format&fit=crop",
      tags: ["React", "Styled Components", "Storybook"],
      category: "design",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  // Filter categories
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design Work' }
  ];
  
  return (
    <div className="min-h-screen pt-24">
      <div className="container max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in opacity-0">
            My Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Projects & Case Studies
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            A curated selection of projects that showcase my skills, experience, and passion for design and development.
          </p>
        </div>
        
        {/* Filter */}
        <div className="flex flex-wrap justify-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 mx-2 mb-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="opacity-0 animate-scale-in" 
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
