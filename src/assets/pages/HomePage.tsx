import Navbar from "../components/organisms/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import ContinueWatchingSection from "../components/organisms/ContinueWatchingSection";
import TopRatingSection from "../components/organisms/TopRatingSection";
import TopTrandingSection from "../components/organisms/TopTrandingSection";
import TopRilisSection from "../components/organisms/TopRilisSection";
import Footer from "../components/organisms/Footer";

export default function HomePage() {
  return (
    <div className="bg-black text-white font-sans w-[360px] h-[1476px] md:w-[1440px] md:h-[2890px]">
      <Navbar />
      <HeroSection />
      <ContinueWatchingSection />
      <TopRatingSection />
      <TopTrandingSection />
      <TopRilisSection />
      <Footer />
    </div>
  );
}
