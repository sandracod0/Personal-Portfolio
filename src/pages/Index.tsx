
import React from 'react';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Sample project data
  const featuredProjects = [
    {
      title: "Digital Portfolio",
      description: "A minimalist portfolio website with smooth animations and a focus on typography.",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-commerce Dashboard",
      description: "Admin dashboard for managing products, orders and customer data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Material UI"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather forecasting application with location-based data.",
      image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=2069&auto=format&fit=crop",
      tags: ["JavaScript", "API Integration", "CSS3"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-20 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-xl">
                A selection of my recent work, showcasing my skills and experience in design and development.
              </p>
            </div>
            <Link 
              to="/projects" 
              className="group inline-flex items-center text-sm font-medium mt-4 md:mt-0"
            >
              View All Projects
              <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="opacity-0 animate-scale-in" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I specialize in creating clean, efficient, and user-centric digital experiences using modern technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Design", "Frontend", "Backend", "Tools"].map((category, categoryIndex) => (
              <div 
                key={category} 
                className="rounded-lg border border-border p-6 opacity-0 animate-slide-up" 
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                <h3 className="text-lg font-medium mb-4">{category}</h3>
                <ul className="space-y-2 text-sm">
                  {category === "Design" && ["Figma", "Adobe XD", "UI/UX", "Responsive Design"].map(skill => (
                    <li key={skill} className="text-muted-foreground">{skill}</li>
                  ))}
                  {category === "Frontend" && ["React", "TypeScript", "Tailwind CSS", "Next.js"].map(skill => (
                    <li key={skill} className="text-muted-foreground">{skill}</li>
                  ))}
                  {category === "Backend" && ["Node.js", "Express", "MongoDB", "PostgreSQL"].map(skill => (
                    <li key={skill} className="text-muted-foreground">{skill}</li>
                  ))}
                  {category === "Tools" && ["Git", "VS Code", "Docker", "CI/CD"].map(skill => (
                    <li key={skill} className="text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6 opacity-0 animate-scale-in">
            <h2 className="text-3xl font-bold">Let's Work Together</h2>
            <p className="text-muted-foreground">
              I'm currently available for freelance work and exciting opportunities.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
