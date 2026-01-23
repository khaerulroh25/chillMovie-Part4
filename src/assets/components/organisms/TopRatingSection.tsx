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
  id: number;
  image: string;
};

interface TopRatingSectionProps {
  myList: Movie[];
  onAddToMyList: (movie: Movie) => void;
}

export default function TopRatingSection({
  myList,
  onAddToMyList,
}: TopRatingSectionProps) {
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
            md:overflow-visible
            px-4
            md:ml-[80px]
            md:px-0
            md:w-[1445px]
            scroll-smooth
            snap-x snap-mandatory
          "
        >
          <TopRatingCard
            id={1}
            image={img1}
            badge="episode"
            myList={myList}
            onAddToMyList={onAddToMyList}
          />
          <TopRatingCard
            id={2}
            image={img2}
            myList={myList}
            onAddToMyList={onAddToMyList}
          />
          <TopRatingCard
            id={3}
            image={img3}
            myList={myList}
            onAddToMyList={onAddToMyList}
          />
          <TopRatingCard
            id={4}
            image={img4}
            badge="episode"
            myList={myList}
            onAddToMyList={onAddToMyList}
          />
          <TopRatingCard
            id={5}
            image={img5}
            badge="top10"
            myList={myList}
            onAddToMyList={onAddToMyList}
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
    </section>
  );
}
