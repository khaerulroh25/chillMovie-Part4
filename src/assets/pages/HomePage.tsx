import Navbar from "../components/organisms/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import ContinueWatchingSection from "../components/organisms/ContinueWatchingSection";
import TopRatingSection from "../components/organisms/TopRatingSection";
import TopTrandingSection from "../components/organisms/TopTrandingSection";
import TopRilisSection from "../components/organisms/TopRilisSection";
import Footer from "../components/organisms/Footer";
type Movie = {
  id: number;
  image: string;
  isWatched?: boolean;
};

interface HomePageProps {
  myList: Movie[];
  onAddToMyList: (movie: Movie) => void;
}
export default function HomePage({ myList, onAddToMyList }: HomePageProps) {
  return (
    <div className="bg-black text-white font-sans md:w-[1440px] md:h-[2890px]">
      <Navbar />
      <HeroSection />
      <ContinueWatchingSection />
      <TopRatingSection myList={myList} onAddToMyList={onAddToMyList} />
      <TopTrandingSection myList={myList} onAddToMyList={onAddToMyList} />
      <TopRilisSection myList={myList} onAddToMyList={onAddToMyList} />
      <Footer />
    </div>
  );
}
