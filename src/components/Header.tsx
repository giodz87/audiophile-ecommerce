import menu from "../../public/assets/shared/tablet/icon-hamburger.svg";
import logo from "../../public/assets/shared/desktop/logo.svg";
import check from "../../public//assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
interface Headerprops {
  cart: boolean;
  setCart: (cart: boolean) => void;
  shop: boolean;
  setShop: (shop: boolean) => void;
}

export default function Header({ cart, setCart, shop, setShop }: Headerprops) {
  return (
    <div className="w-full h-[89px]  bg-black flex flex-row items-center justify-center  ">
      <div className="flex flex-row w-[375px] md:w-[768px] xl:w-full z-50">
        <div className="w-[375px] px-[24px] flex flex-row items-center justify-between md:w-[768px] md:px-[40px] xl:w-full xl:px-[165px]">
          <div className="w-[225px] flex flex-row items-center justify-between xl:w-[700px]">
            <img
              src={menu}
              className="xl:hidden"
              onClick={() => {
                setShop(!shop);
              }}
              alt=""
            />
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
            <div className="  hidden xl:flex flex-row items-center justify-center gap-[34px]">
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
          <img
            src={check}
            onClick={() => {
              setCart(!cart);
            }}
            alt=""
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
