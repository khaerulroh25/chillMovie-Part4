import heroImage from "../../img/backgrounds/hero.png";
import Button from "../atoms/Buttons";
import infoIcon from "../../img/icons/information-outline.png";
import volumeIcon from "../../img/icons/volume-off.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[420px] md:h-[540px]">
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <div className="relative z-10 h-full flex items-end">
        <div className="px-6 pb-10 md:px-[80px] md:pb-[60px] max-w-[668px]">
          <h1 className="text-[24px] md:text-[48px] font-bold mb-4">
            Duty After School
          </h1>

          <p className="text-[12px] md:text-[18px] leading-[20px] text-gray-300 mb-6 line-clamp-2 md:line-clamp-none">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="heroPrimary"
              className="w-[100px] h-[25px] md:w-[93px] md:h-[45px] text-[12px] md:text-[16px]"
            >
              Mulai
            </Button>

            <Button
              variant="heroSecondary"
              className="w-[120px] h-[25px] md:w-[185px] md:h-[44px] text-[12px] md:text-[16px]"
            >
              <div className="flex items-center justify-center gap-2">
                <img
                  src={infoIcon}
                  alt=""
                  className="w-[12px] h-[12px] md:w-[24px] md:h-[24px]"
                />
                <span>Selengkapnya</span>
              </div>
            </Button>
            <span
              className="
                    w-[30px]
                    h-[25px]
                    md:w-[52px]
                    md:h-[45px]
                    flex
                    items-center
                    justify-center
                    text-[12px]
                    md:text-[18px]
                    border
                    border-gray-400
                    rounded-full
                    text-[#C1C2C4]
                  "
            >
              18+
            </span>
          </div>
          <button
            className="
                  absolute
                  right-6
                  bottom-10
                  w-[24px]
                  h-[25px]
                  md:w-[44px]
                  md:h-[44px]
                  flex
                  items-center
                  justify-center
                  border
                  border-gray-400
                  rounded-full
                  text-[#C1C2C4]
                  hover:bg-white/10
                "
            aria-label="Mute"
          >
            <img
              src={volumeIcon}
              alt=""
              className="w-[12px] h-[12px] md:w-[24px] md:h-[24px]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
