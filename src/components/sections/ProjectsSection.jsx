
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx';
    import { Button } from '@/components/ui/button.jsx';
    import { Github, ExternalLink } from 'lucide-react';

    const projectsData = [
  {
    title: 'Mentor Connect (JobNexus)',
    description:
      'An AI-powered platform connecting recruiters and job seekers. Features a Botpress-integrated chatbot for real-time mentor recommendations and career Q&A.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Firebase', 'Botpress'],
    imageUrl: 'AI chatbot interface for mentorship platform',
    githubUrl: 'https://github.com/msyed74/jobnexusafterhackathonf',
    demoUrl: 'https://jobnexusss.netlify.app/',
  },
  {
    title: 'Face Recognition System',
    description:
      'A real-time face recognition system built with OpenCV and NumPy, capable of detecting, identifying, and authenticating users with optimized frame processing.',
    tags: ['Python', 'OpenCV', 'NumPy'],
    imageUrl: 'Face recognition interface with detection overlay',
    githubUrl: 'https://github.com/msyed74/face-recognition',
    demoUrl: null,
  },
  {
    title: 'Crypto Club MITS - Blockchain Workshops',
    description:
      'Organized and led technical workshops on DeFi, tokenomics, and Web3 fundamentals as co-founder of Crypto Club at MITS Gwalior.',
    tags: ['Blockchain', 'DeFi', 'Web3', 'Leadership'],
    imageUrl: 'Blockchain workshop environment or token demo slides',
    githubUrl: null,
    demoUrl: null,
  },
];


    const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, demoUrl }) => {
      return (
        <motion.div 
          className="h-full"
          whileHover={{ scale: 1.03, boxShadow: "0px 15px 30px rgba(0,0,0,0.15)" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Card className="flex flex-col h-full overflow-hidden glassmorphism">
            <div className="relative h-48 w-full overflow-hidden">
              <img  class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={title} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="h-20 overflow-y-auto text-sm">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              {githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
              {demoUrl && (
                <Button variant="default" size="sm" asChild>
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    const ProjectsSection = () => {
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
      };

      return (
        <section className="py-16 md:py-24 bg-secondary/5 dark:bg-secondary/10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {projectsData.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </motion.div>
          </div>
        </section>
      );
    };

    export default ProjectsSection;
  