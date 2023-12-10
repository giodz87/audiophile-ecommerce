import logo from "../../public/assets/shared/desktop/logo.svg";
import facebook from "../../public/assets/shared/desktop/icon-facebook.svg";
import instragam from "../../public/assets/shared/desktop/icon-instagram.svg";
import twitter from "../../public/assets/shared/desktop/icon-twitter.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[48px]  w-[100vw] bg-black  md:items-start md:px-[40px] xl:px-[165px]">
        <div className="h-[4px] w-[101px] bg-[#D87D4A]"></div>
        <div className="flex flex-col items-center justify-center gap-[48px] md:items-start md:gap-[32px] xl:flex-row xl:w-full xl:justify-between">
          <img src={logo} alt="" />
          <div className="flex flex-col items-center justify-center  gap-[16px] md:flex-row md:gap-[34px]">
            <Link
              to={"/"}
              className=" text-white text-[13px] font-bold  leading-[25px] tracking-[2px] hover:text-[#D87D4A]"
            >
              HOME
            </Link>
            <Link
              to={"/headphones"}
              className=" text-white text-[13px] font-bold  leading-[25px] tracking-[2px] hover:text-[#D87D4A]"
            >
              HEADPHONES
            </Link>
            <Link
              to={"/speakers"}
              className=" text-white text-[13px] font-bold  leading-[25px] tracking-[2px] hover:text-[#D87D4A]"
            >
              SPEAKERS
            </Link>
            <Link
              to={"/earphones"}
              className=" text-white text-[13px] font-bold  leading-[25px] tracking-[2px] hover:text-[#D87D4A]"
            >
              EARPHONES
            </Link>
          </div>
        </div>
        <p className=" text-white text-[15px] font-normal  w-[327px] leading-[25px] opacity-[0.5]  text-center  md:w-full md:text-start xl:w-[540px] ">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex flex-col items-center justify-center gap-[50px] mb-[38px] w-full md:flex-row md:items-center md:justify-between md:mb-[46px]">
          <p className=" text-white text-[15px] font-bold  leading-[25px] opacity-[0.5]">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex flex-row items-center justify-center gap-[25px] xl:translate-y-[-100px] ">
            <img src={facebook} alt="" className=" cursor-pointer" />
            <img src={instragam} alt="" className=" cursor-pointer" />
            <img src={twitter} alt="" className=" cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
