
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
    import { Code, Database, Brain, Cloud, Settings, BarChart3, Zap, Palette } from 'lucide-react';


    const skillsData = [
  // --- Frontend ---
  { name: 'HTML5 & CSS3', icon: Code, category: 'Frontend', level: 95 },
  { name: 'JavaScript (ES6+)', icon: Code, category: 'Frontend', level: 95 },
  { name: 'React.js & Next.js', icon: Code, category: 'Frontend', level: 90 },
  { name: 'TailwindCSS', icon: Palette, category: 'Frontend', level: 90 },
  { name: 'GSAP Animations', icon: Palette, category: 'Frontend', level: 75 },

  // --- Backend ---
  { name: 'Node.js & Express.js', icon: Settings, category: 'Backend', level: 85 },
  { name: 'REST APIs', icon: Zap, category: 'Backend', level: 90 },
  { name: 'Convex & Clerk', icon: Settings, category: 'Backend', level: 80 },

  // --- Databases ---
  { name: 'MongoDB & Firebase', icon: Database, category: 'Backend', level: 85 },
  { name: 'MySQL', icon: Database, category: 'Backend', level: 80 },

  // --- AI/ML ---
  { name: 'Python (AI/ML)', icon: Brain, category: 'AI', level: 80 },
  { name: 'OpenCV & NumPy', icon: Brain, category: 'AI', level: 75 },
  { name: 'AI-powered Chatbots (Botpress)', icon: Brain, category: 'AI', level: 85 },

  // --- DevOps / Tools ---
  { name: 'Git, GitHub', icon: Settings, category: '', level: 90 },
  { name: 'Vercel & Netlify', icon: Cloud, category: '', level: 85 },
  { name: 'JWT & API Testing (Postman)', icon: Cloud, category: '', level: 80 },
];


    const categoryColors = {
      Frontend: 'from-blue-500 to-cyan-400',
      Backend: 'from-green-500 to-emerald-400',
      AI: 'from-purple-500 to-pink-500',
      DevOps: 'from-orange-500 to-amber-400',
    };
    
    const SkillCard = ({ name, icon: Icon, category, level }) => {
      const gradient = categoryColors[category] || 'from-gray-500 to-gray-400';
      return (
        <motion.div 
          className="w-full"
          whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="h-full overflow-hidden glassmorphism">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{name}</CardTitle>
              <Icon className={`h-5 w-5 text-muted-foreground bg-gradient-to-r ${gradient} bg-clip-text text-transparent`} />
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground mb-1">{category}</div>
              <div className="w-full bg-muted rounded-full h-2.5 dark:bg-muted/50">
                <motion.div
                  className={`bg-gradient-to-r ${gradient} h-2.5 rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="text-xs text-right mt-1 font-semibold text-primary">{level}%</div>
            </CardContent>
          </Card>
        </motion.div>
      );
    };

    const SkillsSection = () => {
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
      };

      return (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                My Technical Skills
              </span>
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {skillsData.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </motion.div>
          </div>
        </section>
      );
    };

    export default SkillsSection;
  