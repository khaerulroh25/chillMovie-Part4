interface TopRatingCardProps {
  image: string;
  badge?: "episode" | "top10";
}

export default function TopRatingCard({ image, badge }: TopRatingCardProps) {
  return (
    <div
      className="
        relative
        w-[96px]
        h-[143px]
        md:w-[234px]
        md:h-[365px]
        shrink-0
        rounded-[4px]
        overflow-hidden
        cursor-pointer
      "
    >
      <img src={image} alt="" className="w-full h-full object-cover" />

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
  );
}
