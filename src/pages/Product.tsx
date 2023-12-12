import data from "../../data.json";
import { useParams, useNavigate } from "react-router-dom";
import Shop from "../components/Shop";
import BestAudio from "../components/BestAudio";
import { Link } from "react-router-dom";

interface Productprops {
  number: number;
  setNumber: (number: number) => void;
  cardsProduct: CardProduct[];
  setCardsProduct: (imgProduct: any) => void;
}
interface CardProduct {
  name: string | undefined;
  img: string | undefined;
  price: number | undefined;
  count: number;
}
export default function Product({
  number,
  setNumber,
  cardsProduct,
  setCardsProduct,
}: Productprops) {
  const pluseNumber = () => {
    setNumber(number + 1);
  };
  const minusNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const params = useParams();

  const producData = data.find(
    (item) =>
      item.slug.toLowerCase() === params.product?.toLowerCase() &&
      item.category === params.category
  );

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center md:px-[39px]   ">
      <div className="text-left justify-center items-start w-[330px] md:w-[690px] xl:w-[1110px] ">
        <button
          onClick={goBack}
          className=" opacity-[0.5] text-[15px] text-[#000] font-medium  mt-[16px] text-start md:mt-8 md:pl-0"
        >
          Go Back
        </button>
      </div>
      <article className="flex flex-col items-center justify-center  gap-[88px] md:items-start ">
        <section className="flex flex-col items-start gap-[24px] pt-6 md:flex-row md:gap-[70px] md:items-center xl:gap-[125px]">
          <img
            src={"../" + producData?.image.mobile}
            alt={producData?.name}
            className="w-[327px] h-[352px] md:hidden"
          />
          <img
            src={"../" + producData?.image.tablet}
            alt={producData?.name}
            className=" hidden md:flex md:w-[281px] md:h-[480px] xl:hidden"
          />
          <img
            src={"../" + producData?.image.tablet}
            alt={producData?.name}
            className=" hidden xl:flex xl:w-[540px] xl:h-[560px]"
          />
          <div className="flex flex-col gap-6">
            <p className="text-[14px] text-[#D87D4A] font-normal leading-[10px]  tracking-[10px] mt-[8px]">
              {producData?.new ? "NEW PRODUCT" : ""}
            </p>
            <h2 className=" text-black text-[28px] font-bold tracking-[1px] w-[190px] text-start xl:text-[40px] xl:w-[260px]">
              {producData?.name}
            </h2>
            <p className=" text-black w-[327px] text-[15px] font-medium leading-[25px] text-start opacity-[0.5] md:w-[339px] xl:w-[445px]">
              {producData?.description}
            </p>
            <p>${producData?.price}</p>
            <div className="flex flex-row gap-[16px] mt-[7px]">
              <div className="w-[120px] h-[48px] bg-[#F1F1F1] flex flex-rew items-center gap-[20] justify-evenly ">
                <button
                  className=" text-black text-[13px] font-bold tracking-[1px] opacity-[0.25] cursor-pointer"
                  onClick={() => {
                    minusNumber();
                  }}
                >
                  -
                </button>
                <p className=" text-black text-[13px] font-bold tracking-[1px]">
                  {number}
                </p>
                <button
                  className=" text-black text-[13px] font-bold tracking-[1px] opacity-[0.25] cursor-pointer"
                  onClick={() => {
                    pluseNumber();
                  }}
                >
                  +
                </button>{" "}
              </div>
              <button
                onClick={() => {
                  if (number > 0) {
                    const existingProductIndex = cardsProduct.findIndex(
                      (product) =>
                        product.name === producData?.name.split(" ")[0]
                    );

                    if (existingProductIndex !== -1) {
                      // If the product already exists, update the count
                      const updatedProducts = [...cardsProduct];
                      updatedProducts[existingProductIndex].count += number;
                      setCardsProduct(updatedProducts);
                    } else {
                      // If the product doesn't exist, add a new entry
                      const newProduct = {
                        name: producData?.name.split(" ")[0],
                        img: producData?.categoryImage.mobile,
                        price: producData?.price,
                        count: number,
                      };
                      setCardsProduct([...cardsProduct, newProduct]);
                    }
                  }
                  setNumber(0);
                }}
                className=" w-[160px] h-[48px] bg-[#D87D4a] text-white text-[13px] font-bold  hover:bg-[#FBAF85]"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center justify-center gap-[88px] md:w-[690px] xl:w-full xl:text-right xl:flex-row xl:items-baseline xl:gap-[125px] ">
          <section className="flex flex-col gap-[24px] ">
            <p className=" text-black text-[24px] font-bold tracking-[0.8px] leading-[36px] w-[190px] text-start md:text-[32px]">
              FEATURES
            </p>
            <p className=" text-black w-[327px] text-[15px] font-medium leading-[25px] text-start opacity-[0.5] md:w-full xl:w-[635px]">
              {producData?.features}
            </p>
          </section>
          <section className="flex flex-col items-start  w-[327px] gap-[8px] md:flex-row md:w-full md:justify-between xl:flex-col">
            <h2 className=" text-black text-[24px] font-bold tracking-[0.8px] leading-[36px] w-[190px] text-start mb-[16px]  md:text-[32px]">
              IN THE BOX
            </h2>
            <div className="flex flex-col items-start  w-[327px] gap-[8px]  ">
              {producData?.includes.map((include, index) => (
                <ul
                  key={index}
                  className="flex flex-row items-center justify-between gap-[28px]"
                >
                  <span className="w-[5px] flex flex-row items-start text-[14px] text-[#D87D4A] font-blod leading-[25px]">
                    {include.quantity} <p>x</p>
                  </span>
                  <span className=" text-black font-medium leading-[25px] text-[15px] opacity-[0.5]">
                    {include.item}
                  </span>
                </ul>
              ))}
            </div>
          </section>
        </div>
        <section>
          <div className="flex flex-col items-center justify-center gap-[16px] md:hidden">
            <img
              src={"../" + producData?.gallery.first.mobile}
              alt=""
              className=" rounded-[10px] "
            />
            <img
              src={"../" + producData?.gallery.second.mobile}
              alt=""
              className="  rounded-[10px] hidden md:flex "
            />
            <img
              src={"../" + producData?.gallery.third.mobile}
              alt=""
              className=" rounded-[10px] hidden "
            />
          </div>
          <div className=" hidden md:flex md:flex-row md:items-center md:justify-between md:gap-5 xl:hidden">
            <div className="flex flex-col gap-5">
              <img
                src={"../" + producData?.gallery.first.tablet}
                alt=""
                className=" rounded-[10px] w-[277px] h-[174px] "
              />
              <img
                src={"../" + producData?.gallery.second.tablet}
                alt=""
                className="  rounded-[10px]  w-[277px] h-[174px]"
              />
            </div>
            <img
              src={"../" + producData?.gallery.third.tablet}
              alt=""
              className=" rounded-[10px] w-[395px] h-[368px]"
            />
          </div>
          <div className=" hidden xl:flex xl:lex-row xl:items-center xl:justify-between xl:gap-8 ">
            <div className="flex flex-col gap-8">
              <img
                src={"../" + producData?.gallery.first.tablet}
                alt=""
                className=" rounded-[10px]  w-[445px] h-[280px]"
              />
              <img
                src={"../" + producData?.gallery.second.tablet}
                alt=""
                className=" rounded-[10px]   w-[445px] h-[280px]"
              />
            </div>
            <img
              src={"../" + producData?.gallery.third.tablet}
              alt=""
              className=" rounded-[10px] w-[635px] h-[592px]"
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full gap-[40px] ">
          <h2 className=" text-black text-[24px] font-bold tracking-[0.8px] leading-[36px]  ">
            YOU MAY ALSO LIKE{" "}
          </h2>
          <div className="flex flex-col gap-[56px] md:flex-row md:gap-[11px] xl:gap-[30px]">
            {producData?.others.map((item: any, index) => {
              const category = data.find(
                (prod) => prod.slug === item.slug
              )?.category;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-[32px]"
                >
                  <img
                    src={"../" + item.image.mobile}
                    alt=""
                    className="w-[327px] h-[120px] rounded-[8px] md:hidden"
                  />
                  <img
                    src={"../" + item.image.tablet}
                    alt=""
                    className=" hidden md:flex md:w-[223px] md:h-[318px] md:rounded-[8px] xl:hidden "
                  />
                  <img
                    src={"../" + item.image.desktop}
                    alt=""
                    className=" hidden xl:flex xl:w-[350px] xl:h-[328px] xl:rounded-[8px] "
                  />
                  <p className="text-black text-[24px] font-bold tracking-[1.7px] leading-[32px]">
                    {item.name}
                  </p>

                  <Link
                    to={"/" + category + "/" + item.slug}
                    className="flex items-center justify-center   w-[160px] h-[48px] bg-[#D87D4a] text-white text-[13px] font-bold hover:bg-[#FBAF85]"
                  >
                    See Product
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
        <div className="pt-[50px]">
          <Shop />
        </div>
        <BestAudio />
      </article>
    </div>
  );
}
