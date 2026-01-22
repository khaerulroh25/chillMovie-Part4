import TopRatingCard from "../molecules/TopRatingCard";
import Button from "../atoms/Buttons";

import img1 from "../../img/movies/image212.png";
import img2 from "../../img/movies/image221.png";
import img3 from "../../img/movies/image235.png";
import img4 from "../../img/movies/image215.png";
import img5 from "../../img/movies/image211.png";

import arrowLeft from "../../img/icons/arrow-left.png";
import arrowRight from "../../img/icons/arrow-right.png";

type Movie = {
  id: number;
  image: string;
};

interface TopTrandingSectionProps {
  myList: Movie[];
  onAddToMyList: (movie: Movie) => void;
}
export default function TopRatingSection({
  myList = [],
  onAddToMyList,
}: TopTrandingSectionProps) {
  return (
    <section className="md:w-[1440px] md:h-[512px]">
      <h2 className="px-4 md:px-[80px] mb-[20px] text-[20px] md:text-[24px] font-semibold text-white">
        Film Trending
      </h2>

      <div className="relative overflow-hidden pb-[50px] pt-[50px]">
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
            id={11}
            image={img1}
            badge="top10"
            myList={myList}
            onAddToMyList={onAddToMyList}
          />
          <TopRatingCard
            id={12}
            image={img2}
            badge="top10"
            myList={myList}
            onAddToMyList={onAddToMyList}
          />
          <TopRatingCard
            id={13}
            image={img3}
            badge="top10"
            myList={myList}
            onAddToMyList={onAddToMyList}
          />
          <TopRatingCard
            id={14}
            image={img4}
            badge="top10"
            myList={myList}
            onAddToMyList={onAddToMyList}
          />
          <TopRatingCard
            id={15}
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
