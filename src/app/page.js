import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Gallery from "./components/Gallery"; // Import the Gallery component

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        
        {/* Add the Gallery section here */}
        <Gallery />

        <Recommendations />  
      </div>
      <Footer />
    </main>
  );
}
