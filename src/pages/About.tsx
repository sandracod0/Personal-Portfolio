
import React from 'react';
import Footer from '@/components/Footer';
import { Calendar, Download, Mail, MapPin, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
            About Me
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Design-minded developer focused on building beautiful, functional experiences
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            I'm a passionate designer and developer with a keen eye for detail and a love for creating user-centered digital products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="relative rounded-lg overflow-hidden aspect-square md:aspect-auto md:h-auto animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
              alt="Professional portrait"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-semibold">Personal Information</h2>
            <p className="text-muted-foreground">
              With over 5 years of experience in the field, I've had the privilege of working with a diverse range of clients and projects, from startups to established enterprises.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Name</div>
                  <div className="font-medium">John Doe</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">hello@example.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">San Francisco, CA</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                  <div className="font-medium">5+ Years</div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </a>
            </div>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>My Experience</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-border md:ml-5">
            {[
              {
                period: "2020 - Present",
                title: "Senior Frontend Developer",
                company: "Tech Innovations Inc.",
                description: "Leading the frontend development team in building modern web applications with React and TypeScript. Improved site performance by 40% through code optimization."
              },
              {
                period: "2018 - 2020",
                title: "UI/UX Designer",
                company: "Design Studio",
                description: "Created user-centered designs for various clients, conducting user research and iterating on feedback. Designed responsive interfaces for web and mobile applications."
              },
              {
                period: "2016 - 2018",
                title: "Web Developer",
                company: "Web Solutions",
                description: "Developed responsive websites for clients across different industries. Implemented SEO best practices and ensured cross-browser compatibility."
              }
            ].map((item, index) => (
              <div 
                key={item.title} 
                className={cn(
                  "relative grid md:grid-cols-5 gap-6 md:gap-8 pl-8 md:pl-0",
                  "opacity-0 animate-slide-up"
                )}
                style={{ animationDelay: `${0.6 + index * 0.15}s` }}
              >
                <div className="md:text-right md:pr-8 md:col-span-2">
                  <div className="absolute left-0 md:left-auto md:right-0 top-1 transform -translate-x-1/2 md:translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background" />
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm">{item.company}</p>
                </div>
                <div className="md:col-span-3 md:pl-8 border-l border-border">
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { category: "Design", skills: [
                { name: "UI/UX Design", level: 90 },
                { name: "Wireframing", level: 85 },
                { name: "Prototyping", level: 80 },
                { name: "Responsive Design", level: 95 }
              ]},
              { category: "Development", skills: [
                { name: "HTML/CSS", level: 95 },
                { name: "JavaScript", level: 90 },
                { name: "React", level: 85 },
                { name: "Node.js", level: 75 }
              ]}
            ].map((skillGroup, groupIndex) => (
              <div 
                key={skillGroup.category} 
                className="opacity-0 animate-slide-up"
                style={{ animationDelay: `${1 + groupIndex * 0.15}s` }}
              >
                <h3 className="text-xl font-medium mb-6">{skillGroup.category}</h3>
                <div className="space-y-5">
                  {skillGroup.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full animate-[grow_1.5s_ease-out_forwards]" 
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${1.1 + groupIndex * 0.15 + index * 0.1}s`,
                            transform: 'scaleX(0)', 
                            transformOrigin: 'left' 
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center animate-fade-in opacity-0" style={{ animationDelay: '1.3s' }}>Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                degree: "Master's in Computer Science",
                institution: "Stanford University",
                period: "2014 - 2016",
                description: "Specialized in Human-Computer Interaction and User Experience Design."
              },
              {
                degree: "Bachelor's in Graphic Design",
                institution: "Rhode Island School of Design",
                period: "2010 - 2014",
                description: "Focused on digital media and interactive design."
              }
            ].map((edu, index) => (
              <div 
                key={edu.degree} 
                className="rounded-lg border border-border p-6 opacity-0 animate-scale-in"
                style={{ animationDelay: `${1.4 + index * 0.15}s` }}
              >
                <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                <h3 className="text-lg font-medium">{edu.degree}</h3>
                <p className="text-sm mb-4">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
