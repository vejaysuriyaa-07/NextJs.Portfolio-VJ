import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ScrollProgress from "./components/ScrollProgress";
import CursorSpotlight from "./components/CursorSpotlight";
import CommandMenu from "./components/CommandMenu";
import EasterEgg from "./components/EasterEgg";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <ScrollProgress />
      <CursorSpotlight />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <Reveal>
          <AchievementsSection />
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <Gallery />
        </Reveal>
      </div>
      <Footer />
      <CommandMenu />
      <EasterEgg />
    </main>
  );
}
