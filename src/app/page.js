"use client"
import HeroSection from "@/components/HeroSection/HeroSection";
import ExtensiveSkill from "@/components/SkillList/ExtensiveSkill";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExtensiveSkill />
      <Portfolio />
    </>
  );
}
