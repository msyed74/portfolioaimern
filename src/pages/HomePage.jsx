
    import React from 'react';
    import HeroSection from '@/components/sections/HeroSection.jsx';
    import AboutSection from '@/components/sections/AboutSection.jsx';
    import SkillsSection from '@/components/sections/SkillsSection.jsx';
    import ProjectsSection from '@/components/sections/ProjectsSection.jsx';
    import ExperienceEducationSection from '@/components/sections/ExperienceEducationSection.jsx';
    import ContactSection from '@/components/sections/ContactSection.jsx';
    import { motion } from 'framer-motion';

    const HomePage = () => {
      const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      };

      return (
        <div className="space-y-24 md:space-y-32 overflow-x-hidden scrollbar-hide">
          <motion.div variants={sectionVariants} initial="hidden" animate="visible" viewport={{ once: true, amount: 0.2 }}>
            <HeroSection />
          </motion.div>
          <motion.div id="about" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <AboutSection />
          </motion.div>
          <motion.div id="skills" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <SkillsSection />
          </motion.div>
          <motion.div id="projects" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <ProjectsSection />
          </motion.div>
          <motion.div id="experience" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <ExperienceEducationSection />
          </motion.div>
          <motion.div id="contact" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <ContactSection />
          </motion.div>
        </div>
      );
    };

    export default HomePage;
  