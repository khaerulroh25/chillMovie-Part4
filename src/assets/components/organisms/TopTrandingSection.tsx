import { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../../../services/api/movieApi";
import TopRatingCard from "../molecules/TopRatingCard";
import MovieDetailModal from "../molecules/MoviedetailModal";
import Button from "../atoms/Buttons";

import img1 from "../../img/movies/image212.png";
import img2 from "../../img/movies/image221.png";
import img3 from "../../img/movies/image235.png";
import img4 from "../../img/movies/image215.png";
import img5 from "../../img/movies/image211.png";

import arrowLeft from "../../img/icons/arrow-left.png";
import arrowRight from "../../img/icons/arrow-right.png";

type Movie = {
  id: string;
  poster: string;
  title?: string;
};

interface TopTrandingSectionProps {
  onAddToMyList: (movie: Movie) => Promise<string>;
}
export default function TopTrandingSection({
  onAddToMyList,
}: TopTrandingSectionProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [myList, setMyList] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMyList = async () => {
      const movies = await getMovies();
      setMyList(movies);
    };

    fetchMyList();
  }, []);
  const handleToggleMyList = async (movie: Movie) => {
    const found = myList.find((m) => m.poster === movie.poster);
    if (!found) {
      const newId = await onAddToMyList(movie);
      setMyList((prev) => [...prev, { ...movie, id: newId }]);
    } else {
      await deleteMovie(found.id);
      setMyList((prev) => prev.filter((m) => m.id !== found.id));
    }
  };
  return (
    <section className="md:w-[1440px] md:h-[512px]">
      <h2 className="px-4 md:px-[80px] mb-[20px] text-[20px] md:text-[24px] font-semibold text-white">
        Film Trending
      </h2>

      <div className="relative overflow-hidden md:pb-[50px] md:pt-[50px]">
        <Button
          variant="icon"
          className="
            hidden md:flex
            absolute
            left-[50px]
            top-1/2
            -translate-y-1/2
            z-10
            bg-[#2F3334]
            hover:bg-black/80
          "
        >
          <img src={arrowLeft} className="w-4 h-4" />
        </Button>

        <div
          className="
            flex
            gap-[16px]
            md:gap-[28px]
            overflow-x-auto
            overflow-y-hidden
            md:overflow-visible
            px-4
            md:ml-[80px]
            md:px-0
            md:w-[1445px]
            scroll-smooth
            md:snap-x md:snap-mandatory
          "
        >
          <TopRatingCard
            id="top-11"
            poster={img1}
            badge="top10"
            isAdded={myList.some((m) => m.poster === img1)}
            onToggleMyList={handleToggleMyList}
            onOpenDetail={() =>
              setSelectedMovie({
                id: "top-11",
                poster: img1,
                title: "The Tomorrow War",
              })
            }
          />
          <TopRatingCard
            id="top-12"
            poster={img2}
            badge="top10"
            isAdded={myList.some((m) => m.poster === img2)}
            onToggleMyList={handleToggleMyList}
            onOpenDetail={() =>
              setSelectedMovie({
                id: "top-12",
                poster: img2,
                title: "Quantumania",
              })
            }
          />
          <TopRatingCard
            id="top-13"
            poster={img3}
            badge="top10"
            isAdded={myList.some((m) => m.poster === img3)}
            onToggleMyList={handleToggleMyList}
            onOpenDetail={() =>
              setSelectedMovie({
                id: "top-13",
                poster: img3,
                title: "Guardians of the Galaxy Vol. 3",
              })
            }
          />
          <TopRatingCard
            id="top-14"
            poster={img4}
            badge="top10"
            isAdded={myList.some((m) => m.poster === img4)}
            onToggleMyList={handleToggleMyList}
            onOpenDetail={() =>
              setSelectedMovie({
                id: "top-14",
                poster: img4,
                title: "A Man Called Otto",
              })
            }
          />
          <TopRatingCard
            id="top-15"
            poster={img5}
            badge="top10"
            isAdded={myList.some((m) => m.poster === img5)}
            onToggleMyList={handleToggleMyList}
            onOpenDetail={() =>
              setSelectedMovie({
                id: "top-15",
                poster: img5,
                title: "The Little Mermaid",
              })
            }
          />
        </div>

        <Button
          variant="icon"
          className="
            hidden md:flex
            absolute
            right-[50px]
            top-1/2
            -translate-y-1/2
            z-10
            bg-[#2F3334]
            hover:bg-black/80
          "
        >
          <img src={arrowRight} className="w-4 h-4" />
        </Button>
      </div>
      <MovieDetailModal
        open={selectedMovie !== null}
        onClose={() => setSelectedMovie(null)}
        poster={selectedMovie?.poster ?? ""}
        title={selectedMovie?.title ?? ""}
        isAdded={myList.some((m) => m.poster === selectedMovie?.poster)}
        onToggleMyList={() =>
          selectedMovie && handleToggleMyList(selectedMovie)
        }
      />
    </section>
  );
}
