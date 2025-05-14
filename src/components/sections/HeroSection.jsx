
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button.jsx';
    import { ArrowDown, Code, Brain, Zap } from 'lucide-react';

    const HeroSection = () => {
      const title = "Hi, I’m Syed Mohammad ";
      const subtitle = "Full-Stack Developer & AI Engineer";

      const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2,
          },
        },
      };

      const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 100, damping: 12 },
        },
      };
      
      const iconContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 1.5,
          },
        },
      };

      const iconVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { type: 'spring', stiffness: 150, damping: 10 }
        },
      };


      return (
        <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 dark:from-primary/5 dark:via-background dark:to-accent/5"></div>
            <motion.div 
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl opacity-50 animate-pulse"
              animate={{ scale: [1, 1.2, 1], x: [-10, 10, -10], y: [-5, 5, -5] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/20 rounded-full filter blur-2xl opacity-50 animate-pulse"
              animate={{ scale: [1, 1.1, 1], x: [5, -5, 5], y: [10, -10, 10] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            ></motion.div>
          </div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {subtitle}
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center items-center gap-4 mb-12"
            variants={iconContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={iconVariants} className="flex items-center space-x-2 p-2 bg-secondary/10 dark:bg-secondary/20 rounded-lg">
              <Code className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Web Development</span>
            </motion.div>
            <motion.div variants={iconVariants} className="flex items-center space-x-2 p-2 bg-secondary/10 dark:bg-secondary/20 rounded-lg">
              <Brain className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium">AI Engineering</span>
            </motion.div>
            <motion.div variants={iconVariants} className="flex items-center space-x-2 p-2 bg-secondary/10 dark:bg-secondary/20 rounded-lg">
              <Zap className="h-6 w-6 text-yellow-500" />
              <span className="text-sm font-medium">Automation</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <Button size="lg" asChild className="group relative overflow-hidden shadow-lg hover:shadow-primary/50 transition-shadow duration-300">
              <a href="#contact">
                Get In Touch
                <ArrowDown className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-y-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
          </motion.div>
        </section>
      );
    };

    export default HeroSection;
  