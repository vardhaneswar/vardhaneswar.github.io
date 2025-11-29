import React from 'react';
import { Toaster } from "sonner";

import ParticleBackground from '../components/portfolio/ParticleBackground';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import CloudStackSection from '../components/portfolio/CloudStackSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import AchievementsSection from '../components/portfolio/AchievementsSection';
import EducationSection from '../components/portfolio/EducationSection';
import ContactSection from '../components/portfolio/ContactSection';
import FooterSection from '../components/portfolio/FooterSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Toaster richColors position="top-right" />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CloudStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
