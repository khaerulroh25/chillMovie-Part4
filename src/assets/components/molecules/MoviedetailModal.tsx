import Button from "../atoms/Buttons";
import addIcon from "../../img/icons/plus.png";
import volumeIcon from "../../img/icons/volume-off.png";
import close from "../../img/icons/close.png";

interface MovieDetailModalProps {
  open: boolean;
  onClose: () => void;
  poster: string;
  title: string;
}

export default function MovieDetailModal({
  open,
  onClose,
  poster,
  title,
}: MovieDetailModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL CONTAINER (INI YANG SEBELUMNYA KAMU TIDAK PUNYA) */}
      <div
        className="
          relative
          w:[320px]
          h-[670px]
          md:w-[933px]
          max-w-[95vw]
          md:h-[1568px]
          max-h-[90vh]
          bg-black
          rounded-[16px]
          overflow-y-auto
          z-50
        "
      >
        {/* HEADER / POSTER */}
        <div
          className="relative
                    w-[320px]
                    h-[190px]
                    md:w-[933px]
                    md:h-[554px]
                    overflow-hidden
                    rounded-t-[16px]"
        >
          <img src={poster} className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent" />

          <Button
            variant="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl bg-black md:w-[30px] md:h-[30px] w-[16px] h-[16px]"
          >
            <img src={close} alt="close" />
          </Button>

          <div
            className="absolute
                      bottom-6
                      pl-[16px]
                      md:pl-[80px]
                      w-[265px]
                      h-[55px]
                      md:w-[860px]
                      md:h-[103px]
                      flex
                      flex-col
                      gap-[8px]
                      md:gap-[24px]
                      text-white"
          >
            <h1 className="text-[16px] md:text-[32px] font-bold">{title}</h1>

            <div className="flex gap-3">
              <Button
                variant="heroPrimary"
                className=" hover:bg-blue-700 w-[55px] h-[25px] md:w-[121px] md:h-[42px] text-[12px] md:text-[16px]"
              >
                Mulai
              </Button>
              <Button
                variant="icon"
                className="w-[24px] h-[24px] md:w-[44px] md:h-[44px] bg-transparent border border-solid border-white/30"
              >
                <img
                  src={addIcon}
                  alt="Tambah"
                  className="md:w-[10px] md:h-[10px] w-[14px] h-[14px]"
                />
              </Button>
              <Button
                variant="icon"
                className="ml-auto w-[24px] h-[24px] md:w-[44px] md:h-[44px] bg-transparent border border-solid border-white/30"
              >
                <img
                  src={volumeIcon}
                  alt="volume"
                  className="md:w-[13px] md:h-[13px] w-[18px] h-[18px]"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div
          className=" w-[320px]
                      px-4
                      py-4
                      text-gray-300
                      md:w-[933px]
                      md:py-[24px]
                      md:px-[80px]
                      md:grid
                      md:grid-cols-2
                      md:gap-[24px]
                    "
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-[12px] md:text-[16px] text-gray-400">
              <span>2020</span>
              <span>10 Episode</span>
              <span
                className="
                    w-[30px]
                    h-[25px]
                    md:w-[40px]
                    md:h-[40px]
                    flex
                    items-center
                    justify-center
                    text-[12px]
                    md:text-[14px]
                    border
                    border-gray-400
                    rounded-full
                    text-[#C1C2C4]
                  "
              >
                16+
              </span>
            </div>
            <p className="text-[12px] md:text-[16px] leading-relaxed">
              Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke
              London untuk mengelola AFC Richmond, tim sepak bola liga Utama
              Inggris yang kesulitan.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-4 md:mt-0 text-[12px] md:text-[16px]">
            <p>
              <span className="text-gray-400">Cast:</span> Jason Sudeikis, Brett
              Goldstein, Brendan Hunt, Nick Mohammed, dan lain-lain
            </p>
            <p>
              <span className="text-gray-400">Genre:</span> Komedi, Drama,
              Olahraga
            </p>
            <p>
              <span className="text-gray-400">Pembuat Film:</span> Brendan Hunt,
              Joe Killy, Bill Lawrence
            </p>
          </div>
        </div>

        {/* EPISODE LIST */}
        <div
          className="w-[320px]
                      h-[306px]
                        md:w-[933px]
                        md:h-[790px]
                        md:pt-[24px]
                        md:pr-[80px]
                        md:pb-[24px]
                        md:pl-[80px]
                        pt-[10px]
                        pr-[19px]
                        pb-[10px]
                        pl-[19px]
                        md:flex
                        flex-col
                        gap-[8px]
                        md:gap-[28px]"
        >
          <h2 className="text-white md:text-[24px] text-[12px] font-semibold">
            Episode
          </h2>

          <div className="flex flex-col  overflow-y-auto">
            {[1, 2, 3, 4, 5].map((ep) => (
              <div
                key={ep}
                className="flex
                          w-[282px]
                          h-[52px]
                          md:w-[773px]
                          md:h-[137px]
                          py-[5px]
                          md:py-[16px]
                          gap-[10px]
                          md:gap-[24px]
                          bg-black
                          rounded-[4px]
                          hover:bg-[#333333]
                          transition-colors"
              >
                <div className="flex items-center gap-[8px] md:gap-[24px] px-[7px] md:px-[16px]">
                  <h3 className="text-[10px] md:text-[18px] font-semibold">
                    {ep}
                  </h3>

                  <img
                    src={poster}
                    className="w-[200px] h-[32px] md:w-[295px] md:h-[96px] object-cover rounded"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-[10px] md:text-[18px] font-medium">
                      Episode {ep}
                    </h3>
                    <span className="text-gray-400 text-[10px] md:text-[14px] whitespace-nowrap px-[16px]">
                      29 min
                    </span>
                  </div>
                  <p className="text-sm text-[10px] md:text-[18px] text-gray-400 line-clamp-1 md:line-clamp-none">
                    It's Ted's first day of coaching, and fans aren't happy. He
                    makes little headway but remains undeterred as the team...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
