import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import { Download, UserCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/5 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <UserCircle className="h-24 w-24 text-primary" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="text-left shadow-xl glassmorphism">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Syed Mohammad Baqir Husain
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  A Passionate full-stack developer with a strong foundation in
                  Artificial Intelligence and Robotics, currently pursuing
                  B.Tech at Madhav Institute of Technology & Science, Gwalior
                  (Graduating 2026). Dedicated to building scalable,
                  high-performance web applications with intuitive user
                  experiences and clean, maintainable code.
                </p>
                <p>
                  Experienced in crafting end-to-end solutions using modern
                  technologies such as React.js, Next.js, Node.js, and
                  AI-powered tools. Particularly skilled in integrating
                  automation, chatbots, and real-time features into web
                  platforms that solve real-world problems.{" "}
                </p>
                <p>
                  Driven by a deep curiosity and a growth mindset, constantly
                  exploring new frameworks and best practices to deliver
                  cutting-edge digital products. Open to challenging
                  opportunities in software development where innovation,
                  impact, and continuous learning are at the core.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <Button
              size="lg"
              asChild
              className="group relative overflow-hidden shadow-lg hover:shadow-primary/50 transition-shadow duration-300"
            >
              <a
                href="/Syed-Resume.pdf"
                download="Syed-Resume.pdf"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
              </a>
            </Button>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
