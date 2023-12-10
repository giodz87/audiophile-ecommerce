import header from "../../public/assets/home/tablet/image-header.jpg";
import deskheader from "../../public/assets/home/desktop/image-hero.jpg";
import Shop from "../components/Shop";

/////
import speaker from "../../public/assets/home/mobile/image-speaker-zx9.png";
import desktopspeaker from "../../public/assets/home/desktop/image-speaker-zx9.png";
import table from "../../public/assets/home/mobile/image-speaker-zx7.jpg";
import desktoptable from "../../public/assets/home/desktop/image-speaker-zx7.jpg";
import earphone from "../../public/assets/home/mobile/image-earphones-yx1.jpg";
import desktopearphone from "../../public/assets/home/desktop/image-earphones-yx1.jpg";
import BestAudio from "../components/BestAudio";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center justify-center gap-[120px] xl:gap-[132px]">
      <nav className=" flex flex-col items-center justify-center w-[375px]  bg-cover bg-center gap-[24px] md:w-[768px] xl:w-full">
        <img
          className="w-[375px] h-[600px] bg-cover bg-center  md:bg-bottom md:h-[630px] md:w-full xl:hidden "
          style={{ backgroundImage: `url(${header})` }}
        />
        <img
          className=" hidden xl:flex xl:w-full xl:h-[729px] bg-center border-none bg-no-repeat bg-black "
          alt=""
          style={{ backgroundImage: `url(${deskheader})` }}
        />
        <div className=" absolute flex flex-col gap-[24px] items-center justify-center xl:left-[165px] xl:items-start ">
          <div className=" flex flex-col items-center justify-center gap-[16px] md:gap-[24px]  xl:items-start ">
            <p className="  text-white opacity-[0.5] text-[14px] tracking-[10px] font-normal  xl:items-start ">
              NEW PRODUCT
            </p>
            <h1 className="  text-white text-[36px] tracking-[1.2px] leading-[40px] font-bold md:text-[56px] md:tracking-[2px] md:leading-[58px]   xl:text-start">
              XX99 Mark II <br /> HeadphoneS
            </h1>
          </div>
          <p className=" text-white text-[15px]  font-medium  opacity-[0.75] text-center w-[328px] md:leading-[25px md:w-[349px] xl:text-start">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            to={"/headphones/xx99-mark-two-headphones"}
            className="flex items-center justify-center cursor-pointer w-[160px] h-[48px] bg-[#D87D4a] text-white text-[13px] font-bold mt-[8px] hover:bg-[#FBAF85] md:mt-[16px]"
          >
            SEE PRODUCT
          </Link>
        </div>
      </nav>
      <Shop />
      <section className="flex flex-col items-center justify-center gap-[24px] xl:gap-[40px] ">
        <div className="w-[327px] h-[600px] bg-[#D87D4A] rounded-[8px] flex flex-col items-center justify-center gap-[24px] md:w-[690px] md:h-[720px] xl:w-[1110px] xl:h-[560px] xl:flex-row overflow-hidden xl:gap-[138px]">
          <img
            src={speaker}
            alt=""
            className="pt-[33px] w-[173px] h-[207px] md:w-[198px] md:h-[237px] xl:hidden  "
          />
          <img
            src={desktopspeaker}
            alt=""
            className="hidden xl:flex xl:w-[410px] xl:h-[493px] translate-y-[50px]"
          />
          <div className="flex flex-col items-center justify-center gap-[24px] xl:items-start">
            <h2 className=" text-white text-center text-[36px] font-bold leading-[40px] tracking-[1.28px] mt-[8px] md:text-[56px] md:leading-[58px] md:tracking-[2px] xl:text-start xl:mt-0">
              ZX9 <br />
              SPEAKER
            </h2>
            <p className="text-white text-center text-[15px] font-normal leading-[25px] opacity-[0.75] w-[280px] md:w-[349px] xl:text-start">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              to={"/speakers/zx9-speaker"}
              className="flex items-center justify-center w-[160px] h-[48px] bg-black text-white text-13px font-bold leading-[1px] cursor-pointer md:mt-[16px] xl:mt-[31px] hover:bg-[#4C4C4C]"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        <div className=" relative">
          <img
            src={table}
            alt="speaker"
            className="rounded-[8px] w-[327px]  md:w-[690px] md:h-[320px] xl:hidden"
          />
          <img
            src={desktoptable}
            alt=""
            className="hidden xl:flex xl:w-[1110px] xl:h-[320px] rounded-[8px]"
          />
          <div className="flex flex-col items-start gap-[32px] pl-[24px] absolute top-[90px]  md:pl-[64px]">
            <h2 className=" text-black text-[28px] font-bold tracking-[2px]">
              ZX7 SPEAKER
            </h2>
            <Link
              to={"/speakers/zx7-speaker"}
              className="flex items-center justify-center w-[160px] h-[48px]  text-black text-[13px] font-bold leading-[1px] cursor-pointerb border-black border-[1px] cursor-pointer  hover:bg-[#000000] hover:text-white "
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[24px] md:flex-row md:gap-[12px] xl:gap-[30px]">
          <img
            src={earphone}
            alt="earphone"
            className="rounded-[8px] w-[327px] md:w-[339px] md:h-[320px] xl:hidden"
          />
          <img
            src={desktopearphone}
            alt=""
            className=" hidden xl:flex w-[540px] h-[320px] rounded-[8px]"
          />
          <div className="flex flex-col items-start justify-center gap-[32px] pl-[24px] w-[327px] h-[200px] bg-[#F1F1F1] rounded-[8px] md:w-[339px] md:h-[320px] md:pl-[42px]  xl:w-[540px] xl:h-[320px] xl:pl-[95px] ">
            <h2 className=" text-black text-[28px] font-bold tracking-[2px]">
              YX1 EARPHONES
            </h2>
            <Link
              to={"/earphones/yx1-earphones"}
              className=" flex items-center justify-center w-[160px]  h-[48px]  text-black text-[13px] font-bold leading-[1px] cursor-pointerb border-black border-[1px] cursor-pointer hover:bg-[#000000] hover:text-white "
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>
      <BestAudio />
    </div>
  );
}
