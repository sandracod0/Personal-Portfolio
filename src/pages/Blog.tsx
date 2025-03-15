
import React from 'react';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { cn } from '@/lib/utils';

const Blog = () => {
  // Sample blog post data
  const blogPosts = [
    {
      title: "Designing for Accessibility: Best Practices",
      excerpt: "Learn the essential principles and techniques for designing accessible digital products that everyone can use.",
      coverImage: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=2070&auto=format&fit=crop",
      date: "May 15, 2023",
      readTime: "5 min read",
      slug: "designing-for-accessibility"
    },
    {
      title: "The Future of Frontend Development",
      excerpt: "Exploring emerging technologies and trends that will shape the future of frontend development.",
      coverImage: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop",
      date: "April 22, 2023",
      readTime: "8 min read",
      slug: "future-of-frontend-development"
    },
    {
      title: "Optimizing React Performance",
      excerpt: "Practical strategies and techniques to improve the performance of your React applications.",
      coverImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2081&auto=format&fit=crop",
      date: "March 10, 2023",
      readTime: "10 min read",
      slug: "optimizing-react-performance"
    },
    {
      title: "Creating Smooth Animations with CSS and JavaScript",
      excerpt: "Learn how to create performant and visually appealing animations for your web projects.",
      coverImage: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop",
      date: "February 5, 2023",
      readTime: "7 min read",
      slug: "smooth-animations-css-javascript"
    },
    {
      title: "The Importance of Design Systems",
      excerpt: "How design systems can improve consistency, efficiency, and collaboration in your projects.",
      coverImage: "https://images.unsplash.com/photo-1599309329365-0a9ed45a1da3?q=80&w=1974&auto=format&fit=crop",
      date: "January 18, 2023",
      readTime: "6 min read",
      slug: "importance-of-design-systems"
    },
    {
      title: "Responsive Design in 2023",
      excerpt: "Modern approaches to responsive design and how to adapt to the evolving device landscape.",
      coverImage: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=2062&auto=format&fit=crop",
      date: "December 2, 2022",
      readTime: "9 min read",
      slug: "responsive-design-2023"
    }
  ];
  
  // Featured post (first in the array)
  const featuredPost = blogPosts[0];
  // Regular posts (rest of the array)
  const regularPosts = blogPosts.slice(1);
  
  return (
    <div className="min-h-screen pt-24">
      <div className="container max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in opacity-0">
            Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Thoughts & Insights
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Articles on design, development, and the creative process. Sharing what I've learned along the way.
          </p>
        </div>
        
        {/* Featured Post */}
        <div className="mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <div className="relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-md transition-all duration-300">
            <div className="md:grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto md:h-full relative">
                <img 
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-3">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-5">{featuredPost.excerpt}</p>
                <a 
                  href={`/blog/${featuredPost.slug}`}
                  className={cn(
                    "self-start inline-flex items-center px-5 py-2.5 rounded-lg",
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                    "font-medium text-sm transition-all duration-200"
                  )}
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {regularPosts.map((post, index) => (
            <div 
              key={post.slug} 
              className="opacity-0 animate-scale-in" 
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="rounded-lg bg-secondary/30 p-8 md:p-10 mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Subscribe to my newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Stay updated with my latest articles, projects, and insights straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                aria-label="Your email address"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
