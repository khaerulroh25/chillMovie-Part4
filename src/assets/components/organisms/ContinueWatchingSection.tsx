import ContinueMovieCard from "../molecules/ContinueMovieCard";
import Button from "../atoms/Buttons";

import img1 from "../../img/movies/image233.png";
import img2 from "../../img/movies/image223.png";
import img3 from "../../img/movies/image224.png";
import img4 from "../../img/movies/image219.png";
import arrowLeft from "../../img/icons/arrow-left.png";
import arrowRight from "../../img/icons/arrow-right.png";

export default function ContinueWatchingSection() {
  return (
    <section className="md:w-[1440px] md:h-[309px] w-[634px] h-[235px]">
      <h2 className="px-4 md:px-[80px] mb-[20px] md:mb-[32px] text-[20px] md:text-[32px] font-semibold text-white">
        Melanjutkan Tonton Film
      </h2>

      <div className="relative overflow-hidden pb-6">
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
          <img src={arrowLeft} alt="Next" className="w-4 h-4" />
        </Button>
        <div
          className="
            flex
            items-center
            gap-[16px]
            md:gap-[24px]
            overflow-x-auto
            md:overflow-hidden
            px-4
            md:ml-[80px]
            md:px-0
            md:w-[1445px]
            md:h-[180px]
            scroll-smooth
          "
        >
          <ContinueMovieCard
            image={img1}
            title="Don't Look Up"
            rating="4.5/5"
          />
          <ContinueMovieCard image={img2} title="The Batman" rating="4.2/5" />
          <ContinueMovieCard image={img4} title="Blue Lock" rating="4.6/5" />
          <ContinueMovieCard
            image={img3}
            title="A Man Called Otto"
            rating="4.4/5"
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
          <img src={arrowRight} alt="Next" className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
