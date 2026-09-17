import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { About } from "@/components/About";
import { FeaturedWork } from "@/components/FeaturedWork";
import { UpskillingProgramme } from "@/components/UpskillingProgramme";
import { SecondaryProjects } from "@/components/SecondaryProjects";
import { HowIThink } from "@/components/HowIThink";
import { Experience } from "@/components/Experience";
import { OutsideTheCode } from "@/components/OutsideTheCode";
import { Writing } from "@/components/Writing";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { EducationLeadership } from "@/components/EducationLeadership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <FeaturedWork />
        <UpskillingProgramme />
        <SecondaryProjects />
        <HowIThink />
        <Experience />
        <OutsideTheCode />
        <Writing />
        <Skills />
        <Certifications />
        <EducationLeadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
