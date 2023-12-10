import info from "../../public/assets/shared/mobile/image-best-gear.jpg";
import infotab from "../../public/assets/shared/tablet/image-best-gear.jpg";
import infodesktop from "../../public/assets/shared/desktop/image-best-gear.jpg";
export default function BestAudio() {
  return (
    <div className="flex flex-col items-center justify-center gap-[32px] mb-[120px] md:mb-[96px] xl:flex-row-reverse xl:mb-[200px]  xl:gap-[125px]">
      <img src={info} alt="" className="w-[327px] rounded-[8px] md:hidden" />
      <img
        src={infotab}
        alt=""
        className="hidden  md:flex md:w-[689oox] md:h-[300px] xl:hidden"
      />
      <img
        src={infodesktop}
        alt=""
        className="hidden xl:flex w-[540px] h-[588px]"
      />
      <div className=" text-center flex flex-col gap-[32px] xl:text-start md:mt-[30px]">
        <h1 className=" text-black text-[28px] font-bold tracking-[1px] w-[327px] md:w-[573px] md:text-[40px] md:tracking-[1.4px] md:leading-[44px] xl:w-[445px] ">
          BRINGING YOU THE
          <strong className="text-[#D87D4A]"> BEST </strong>AUDIO GEAR
        </h1>

        <p className=" text-black  text-[15px] font-normal leading-[25px] opacity-[0.5] w-[327px]  md:w-[573px] xl:w-[445px] ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
