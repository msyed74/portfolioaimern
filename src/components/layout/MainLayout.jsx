
    import React from 'react';
    import { Outlet } from 'react-router-dom';
    import Navbar from '@/components/layout/Navbar.jsx';
    import Footer from '@/components/layout/Footer.jsx';
    import { motion } from 'framer-motion';

    const MainLayout = () => {
      return (
        <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
          <Navbar />
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex-grow container mx-auto px-4 py-8"
          >
            <Outlet />
          </motion.main>
          <Footer />
        </div>
      );
    };

    export default MainLayout;
  