import { useEffect, useState } from "react";
import { deleteMovie } from "../../../services/api/movieApi";
import { getMovies } from "../../../services/api/movieApi";
import Button from "../atoms/Buttons";
import playIcon from "../../img/icons/vector.png";
import checkIcon from "../../img/icons/check.png";
import chevronIcon from "../../img/icons/chevron-down.png";
import addIcon from "../../img/icons/plus.png";

type Movie = {
  id: string;
  poster: string;
};

interface TopRatingCardProps {
  id: string;
  poster: string;
  badge?: "episode" | "top10";
  myList?: Movie[];
  onAddToMyList: (movie: Movie) => Promise<string>;
  onOpenDetail: () => void;
}

export default function TopRatingCard({
  id,
  poster,
  badge,
  onAddToMyList,
  onOpenDetail,
}: TopRatingCardProps) {
  const [added, setAdded] = useState(false);
  const [apiId, setApiId] = useState<string | null>(null);

  useEffect(() => {
    const syncWithApi = async () => {
      const movies = await getMovies();
      const found = movies.find((m: Movie) => m.poster === poster);

      if (found) {
        setAdded(true);
        setApiId(found.id);
      }
    };

    syncWithApi();
  }, [poster]);

  return (
    <div className="relative shrink-0">
      <div
        className="
        group
        relative
        w-[96px]
        h-[143px]
        md:w-[234px]
        md:h-[365px]
        shrink-0
        rounded-[4px]
        cursor-pointer
      "
      >
        <img
          src={poster}
          alt=""
          className="w-full h-full object-cover rounded-[4px]"
        />

        <div
          className="
          absolute
          md:top-1/2
          md:left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[200px]
          h-[380px]
          md:w-[408px]
          md:h-[415px]
          bg-[#181A1C]
          shadow-2xl
          opacity-0
          scale-95
          overflow-hidden
          pointer-events-none
          rounded-[20px]
          transition-all duration-300
          md:group-hover:opacity-100
          md:group-hover:scale-100
          group-hover:pointer-events-auto
          z-50
        "
        >
          <img src={poster} className="w-[408px] h-[255px] object-cover" />

          <div className="gap-3 p-4 md:gap-[17px] md:p-[29px] ">
            <div className="flex items-center  gap-4 mb-4">
              <Button
                variant="icon"
                className=" bg-white hover:bg-gray-200 p-2 md:p-3"
              >
                <img
                  src={playIcon}
                  alt="Play"
                  className="md:w-4 md:h-4 w-3 h-3"
                />
              </Button>

              <Button
                variant="icon"
                onClick={async () => {
                  if (!added) {
                    const newApiId = await onAddToMyList({ id, poster });
                    setApiId(newApiId);
                    setAdded(true);
                  } else {
                    await deleteMovie(apiId!);
                    setApiId(null);
                    setAdded(false);
                  }
                }}
                className=" border border-white/30 hover:bg-white/10 p-2 md:p-3"
              >
                <img
                  src={added ? checkIcon : addIcon}
                  alt="Tambah"
                  className="md:w-4 md:h-4 w-3 h-3"
                />
              </Button>

              <Button
                variant="icon"
                onClick={onOpenDetail}
                className=" ml-auto border border-white/30 hover:bg-white/10 p-2 md:p-3"
              >
                <img
                  src={chevronIcon}
                  alt="Like"
                  className="md:w-4 md:h-4 w-3 h-3"
                />
              </Button>
            </div>

            <div className="flex gap-2 text-xs text-[16px] mt-1">
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium text-[#C1C2C4] bg-[#CDF1FF4D] rounded-full">
                16+
              </span>

              <span className="text-white">16 Episode</span>
            </div>

            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs sm:text-[18px] text-[#C1C2C4] mt-2">
              <span>Misteri</span>
              <span>•</span>
              <span>Kriminal</span>
              <span>•</span>
              <span>Fantasi</span>
            </div>
          </div>
        </div>

        {badge === "episode" && (
          <span className="absolute flex items-center justify-center gap-[2px] top-[8px] md:top-[16px] left-3 w-[44px] h-[14px] md:w-[104px] md:h-[28px] bg-[#1E40AF] text-white text-[6px] md:text-[14px] rounded-full ">
            Episode Baru
          </span>
        )}

        {badge === "top10" && (
          <div className="absolute gap-[5px] md:gap-[10px] top-0 right-3 flex flex-col items-center justify-center w-[15px] h-[22px] md:w-[31px] md:h-[48px] bg-[#E50914] text-white  rounded-tr-[20%] rounded-bl-[20%]">
            <span className="text-[7px] md:text-[14px] leading-none">Top</span>
            <span className="text-[7px] md:text-[14px] leading-none">10</span>
          </div>
        )}
      </div>
    </div>
  );
}
