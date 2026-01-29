import { useState } from "react";
import MovieDetailModal from "../molecules/MoviedetailModal";
import TopRatingCard from "../molecules/TopRatingCard";
import Button from "../atoms/Buttons";
import img1 from "../../img/movies/image218.png";
import img2 from "../../img/movies/image230.png";
import img3 from "../../img/movies/image234.png";
import img4 from "../../img/movies/image214.png";
import img5 from "../../img/movies/image217.png";
import arrowLeft from "../../img/icons/arrow-left.png";
import arrowRight from "../../img/icons/arrow-right.png";

type Movie = {
  id: string;
  poster: string;
};

interface TopRatingSectionProps {
  onAddToMyList: (movie: Movie) => Promise<string>;
}

export default function TopRatingSection({
  onAddToMyList,
}: TopRatingSectionProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  return (
    <section className=" md:w-[1440px] md:h-[512px] ">
      <h2 className="px-4 md:px-[80px] mb-[20px] text-[20px] md:text-[24px] font-semibold text-white">
        Top Rating Film dan Series Hari ini
      </h2>

      <div className="relative overflow-hidden md:pb-[50px] md:pt-[50px] ">
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
            id="top-1"
            poster={img1}
            badge="episode"
            onAddToMyList={onAddToMyList}
            onOpenDetail={() =>
              setSelectedMovie({
                id: "top-1",
                poster: img1,
              })
            }
          />
          <TopRatingCard
            id="top-2"
            poster={img2}
            onAddToMyList={onAddToMyList}
            onOpenDetail={() =>
              setSelectedMovie({
                id: "top-2",
                poster: img2,
              })
            }
          />
          <TopRatingCard
            id="top-3"
            poster={img3}
            onAddToMyList={onAddToMyList}
            onOpenDetail={() =>
              setSelectedMovie({
                id: "top-3",
                poster: img3,
              })
            }
          />
          <TopRatingCard
            id="top-4"
            poster={img4}
            badge="episode"
            onAddToMyList={onAddToMyList}
            onOpenDetail={() =>
              setSelectedMovie({
                id: "top-4",
                poster: img4,
              })
            }
          />
          <TopRatingCard
            id="top-5"
            poster={img5}
            badge="top10"
            onAddToMyList={onAddToMyList}
            onOpenDetail={() =>
              setSelectedMovie({
                id: "top-5",
                poster: img5,
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
        open={!!selectedMovie}
        onClose={() => setSelectedMovie(null)}
        poster={selectedMovie?.poster ?? ""}
        title="Ted Lasso"
      />
    </section>
  );
}
