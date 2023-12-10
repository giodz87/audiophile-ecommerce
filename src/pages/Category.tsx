import data from "../../data.json";
import { useParams } from "react-router-dom";
import Shop from "../components/Shop";
import BestAudio from "../components/BestAudio";
import { Link } from "react-router-dom";
export default function Category() {
  const params = useParams();

  const productData = data.filter(
    (item) => item.category.toLowerCase() === params.category?.toLowerCase()
  );

  return (
    <div className="flex flex-col  items-center justify-start gap-[120px] ">
      <header className="flex items-center justify-center h-[102px] w-full bg-black">
        <h2 className=" text-white   text-[28px] font-bold tracking-[2px] md:text-[40px]">
          {params.category?.toUpperCase()}
        </h2>
      </header>

      <section className="flex flex-col-reverse items-center justify-center gap-[120px] ">
        {productData.map((item, index) => {
          const isThirdItem = index === 2;
          const isSecondItem = index === 1;
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-[32px]  xl:flex-row xl:gap-[125px] ${
                isSecondItem ? "xl:flex-row-reverse" : ""
              }`}
            >
              <img
                src={item.categoryImage.mobile}
                alt={item.name}
                className="w-[327px] h-[327px] md:hidden"
              />
              <img
                src={item.categoryImage.tablet}
                alt={item.name}
                className="hidden md:flex w-[689px] h-[352px] xl:hidden"
              />
              <img
                src={item.categoryImage.desktop}
                alt={item.name}
                className={`hidden xl:flex w-[540px] h-[560px] ${
                  isThirdItem || isSecondItem ? "xl:flex-row-reverse" : ""
                }`}
              />

              <div className="flex flex-col items-center justify-center gap-[24px]  md:gap-[32px] xl:items-start">
                <div className="flex flex-col items-center justify-center gap-[24px] md:gap-[16px] xl:items-start">
                  <p className="text-[14px] text-[#D87D4A] font-normal tracking-[10px] xl:text-start ">
                    {item.new ? "NEW PRODUCT" : ""}
                  </p>
                  <h2 className=" text-black text-[28px] font-bold tracking-[1px] text-center w-[190px] md:text-[40px] md:w-[365px] md:leading-[44px] xl:text-start ">
                    {item.name}
                  </h2>
                </div>
                <p className=" text-black w-[327px] text-[15px] font-medium leading-[25px] text-center opacity-[0.5] md:w-[572px] xl:w-[445px] xl:text-start">
                  {item.description}
                </p>
                <Link
                  to={"/" + item.category + "/" + item.slug}
                  className="flex items-center justify-center w-[160px] h-[48px] bg-[#D87D4a] text-white text-[13px] font-bold mt-[8px] hover:bg-[#FBAF85]"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      <Shop />
      <BestAudio />
    </div>
  );
}
