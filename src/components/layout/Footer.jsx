
    import React from 'react';
    import { Github, Linkedin, Mail } from 'lucide-react';
    import { motion } from 'framer-motion';

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      return (
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-border/40 py-8 text-center text-muted-foreground"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-6 mb-4">
              <motion.a
                href="https://github.com/msyed74"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/syed-mohammad-baqir-husain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:smhusain7804@gmail.com" 
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
            <p className="text-sm">
              &copy; {currentYear} Syed Mohammad Baqir Husain. All rights reserved.
            </p>
           
          </div>
        </motion.footer>
      );
    };

    export default Footer;
  