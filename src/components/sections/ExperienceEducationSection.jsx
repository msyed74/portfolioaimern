import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card.jsx";
import { Briefcase, GraduationCap, CalendarDays } from "lucide-react";

const experienceData = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description:
      "Led development of scalable web applications using MERN stack. Integrated AI models for enhanced user experience. Mentored junior developers and improved code quality by 20%.",
    icon: Briefcase,
  },
  {
    title: "AI Engineer (Intern)",
    company: "Innovate AI Corp.",
    period: "2020 - 2021",
    description:
      "Developed and deployed machine learning models for predictive analytics. Contributed to research on NLP techniques for sentiment analysis.",
    icon: Briefcase,
  },
];

const educationData = [
  {
    degree: "B.Tech in Artificial Intelligence & Robotics",
    institution: "Madhav Institute of Technology & Science, Gwalior (M.P.)",
    period: "2022 - 2026",
    description:
      "Focused on artificial intelligence, robotics, and full-stack development. Participated in hackathons, co-founded Crypto Club, and built impactful AI-driven projects.",
    icon: GraduationCap,
  },

  {
    degree: "Bharat Jyoti Higher Secoundary School (Class XII)",
    institution: "Bharat Jyoti Higher Secoundary School",
    period: "2019 - 2021",
    description:
      'Complete Higher Secoundary with a focus on Physics, Chemistry, Mathematics . Gained foundational problem-solving and logical reasoning skills crucial for engineering.',
    icon: GraduationCap,
  },
  {
    degree: 'Secondary Education (Class X)',
    institution: 'Bharat Jyoti Higher Secoundary School',
    period: '2009 - 2019',
    description:
      'Completed foundational studies in science, mathematics, and computer applications. Awarded for academic excellence and participation in tech events.',
    icon: GraduationCap,
  },
];

const TimelineItem = ({ item, index }) => {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`flex ${
        isLeft ? "md:flex-row-reverse" : "md:flex-row"
      } md:justify-between items-start w-full mb-8`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="order-1 md:w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
        <Icon className="mx-auto font-semibold text-lg text-primary-foreground w-6 h-6" />
      </div>
      <div
        className={`order-1 ${
          isLeft ? "md:text-right" : "md:text-left"
        } md:w-5/12 px-6 py-4`}
      >
        <Card className="shadow-lg glassmorphism">
          <CardHeader>
            <CardTitle className="text-lg">{item.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {item.company || item.institution}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-xs text-muted-foreground mb-2">
              <CalendarDays className="mr-2 h-4 w-4" />
              {item.period}
            </div>
            <p className="text-sm">{item.description}</p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

const SectionTitle = ({ children }) => (
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-2xl md:text-3xl font-bold text-center mb-10"
  >
    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      {children}
    </span>
  </motion.h3>
);

const ExperienceEducationSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Journey & Milestones
          </span>
        </motion.h2>

        <div>
          <SectionTitle>Professional Experience</SectionTitle>
          <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-border h-full border"
              style={{ left: "50%", transform: "translateX(-50%)" }}
            ></div>
            {experienceData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionTitle>Education</SectionTitle>
          <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-border h-full border"
              style={{ left: "50%", transform: "translateX(-50%)" }}
            ></div>
            {educationData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
