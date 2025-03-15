
import React from 'react';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in opacity-0">
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Let's Work Together
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            I'm currently available for freelance work and exciting opportunities. Feel free to reach out if you have a project in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card rounded-lg border border-border p-6 md:p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:hello@example.com" className="font-medium hover:text-primary transition-colors duration-200">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+1234567890" className="font-medium hover:text-primary transition-colors duration-200">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-medium">San Francisco, California</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 mr-4">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Social Media</p>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors duration-200">
                        Twitter
                      </a>
                      <span>•</span>
                      <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors duration-200">
                        LinkedIn
                      </a>
                      <span>•</span>
                      <a href="#" aria-label="Github" className="hover:text-primary transition-colors duration-200">
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-medium mb-4">Office Hours</h3>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="text-muted-foreground">Monday - Friday:</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div className="text-muted-foreground">Saturday:</div>
                  <div>10:00 AM - 2:00 PM</div>
                  <div className="text-muted-foreground">Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-card rounded-lg border border-border p-6 md:p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
        
        {/* Map or additional content */}
        <div className="mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="aspect-[21/9] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2090&auto=format&fit=crop"
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
