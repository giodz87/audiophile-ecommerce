import headpone from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "../../public/assets/shared/desktop/icon-arrow-right.svg";

import { Link } from "react-router-dom";
export default function Shop() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-[80px]  bg-white  md:flex-row md:gap-[10px] xl:gap-[30px] ">
        <div className="w-[327px] bg-[#F1F1F1] flex flex-col items-center justify-center rounded-[8px] md:w-[223px] md:h-[165px] xl:w-[350px] xl:h-[204px]">
          <img
            src={headpone}
            alt=""
            className="translate-y-[-55px] w-[170px] h-[155px] md:w-[143px] md:h-[143px]"
          />
          <p className="text-[15px] font-bold tracking-[1.07px] leading-normal text-[#000] translate-y-[-50px] xl:text-[18px] xl:tracking-[1.2px]">
            HEADPHONES
          </p>
          <Link
            to={"/headphones"}
            className="flex flex-row items-center justify-center gap-[18px] translate-y-[-30px] "
          >
            <p className="text-[#000] text-[13px] font-bold tracking-[1px] leading-normal opacity-50 hover:text-[#D87D4A] ">
              SHOP
            </p>

            <img src={arrow} alt="arrow" />
          </Link>
        </div>
        <div className="w-[327px] bg-[#F1F1F1] flex flex-col items-center justify-center rounded-[8px] md:w-[223px] md:h-[165px] xl:w-[350px] xl:h-[204px]">
          <img
            src={speakers}
            alt="speakers"
            className="translate-y-[-55px] w-[170px] h-[155px] md:w-[143px] md:h-[143px] "
          />
          <div className="text-[15px] font-bold tracking-[1.07px] leading-normal text-[#000] translate-y-[-50px] xl:text-[18px] xl:tracking-[1.2px]">
            SPEAKERS
          </div>
          <Link
            to={"/speakers"}
            className="flex flex-row items-center justify-center gap-[18px] translate-y-[-30px]"
          >
            <p className="text-[#000] text-[13px] font-bold tracking-[1px] leading-normal opacity-50 hover:text-[#D87D4A] ">
              SHOP
            </p>

            <img src={arrow} alt="arrow" />
          </Link>
        </div>
        <div className="w-[327px] bg-[#F1F1F1] flex flex-col items-center justify-center rounded-[8px] md:w-[223px] md:h-[165px] xl:w-[350px] xl:h-[204px]">
          <img
            src={earphones}
            alt="earphones"
            className="translate-y-[-55px] w-[170px] h-[155px] md:w-[143px] md:h-[143px]"
          />
          <p className="text-[15px] font-bold tracking-[1.07px] leading-normal text-[#000] translate-y-[-50px] xl:text-[18px] xl:tracking-[1.2px]">
            EARPHONES
          </p>
          <Link
            to={"/earphones"}
            className="flex flex-row items-center justify-center gap-[18px] translate-y-[-30px]"
          >
            <p className="text-[#000] text-[13px] font-bold tracking-[1px] leading-normal opacity-50 hover:text-[#D87D4A] ">
              SHOP
            </p>

            <img src={arrow} alt="arrow" />
          </Link>
        </div>
      </section>
    </div>
  );
}
