import { Link } from "react-router-dom";
import { useEffect } from "react";
interface Cartprops {
  number: number;
  setNumber: (number: number) => void;
  cart: boolean;
  setCart: (cart: boolean) => void;
  cardsProduct: any;
  setCardsProduct: (imgProduct: any) => void;
}

export default function CartBox({
  cart,
  setCart,
  cardsProduct,
  setCardsProduct,
}: Cartprops) {
  const changeCount = (count: number, index: number) => {
    if (cardsProduct[index].count == 0 && count == -1) {
      return;
    }
    cardsProduct[index].count += count;
    setCardsProduct([...cardsProduct]);
  };

  const totoalPrice = cardsProduct.reduce(
    (total: any, item: { price: any; count: number }) => {
      return total + item.price * item.count;
    },
    0
  );

  useEffect(() => {
    const body = document.body;
    if (cart) {
      body.style.overflow = "hidden";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [cart]);

  return (
    <div
      onClick={() => {
        setCart(false);
      }}
      className="  flex flex-col items-center justify-start pt-[24px] absolute  w-[100vw] h-full  bg-black bg-opacity-50 z-10 md:items-end md:pr-12  xl:pr-40"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col justify-between w-[327px] h-[487px] bg-[#fff] rounded-[8px] px-[28px] py-[32px] md:w-[377px] md:h-[480px] md:px-8"
      >
        <div className="flex flex-row  w-full justify-between">
          <h3 className="text-[18px] font-bold tracking-[1.2px]">
            CART ({cardsProduct.length})
          </h3>
          <button
            onClick={() => {
              setCardsProduct([]);
            }}
            className="text-[15px] font-medium leading-[25p] opacity-[0.5]"
          >
            Remove all
          </button>
        </div>
        <div className="h-[240px] overflow-auto flex flex-col  gap-[24px]">
          {cardsProduct.map((item: any, index: number) => (
            <div key={index}>
              <div className=" flex flex-col  overflow-y-auto">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-center gap-[16px]">
                    <img
                      key={item.id}
                      className="w-[64px] h-[64px] rounded-[8px]"
                      src={"../" + item.img}
                      alt=""
                    />

                    <div className="flex flex-col items-start">
                      <h1 className=" text-black text-[15px] font-bold leading-[25px]">
                        {item.name}
                      </h1>

                      <p className=" opacity-[0.5] text-[14px] font-bold leading-[25px]">
                        {" "}
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="w-[96px] h-[32px] bg-[#f1f1f1] flex flex-row items-center justify-evenly">
                    <button
                      className=" text-black text-[13px] font-bold tracking-[1px] opacity-[0.25] cursor-pointer"
                      onClick={() => {
                        changeCount(-1, index);
                      }}
                    >
                      -
                    </button>
                    <p className=" text-black text-[13px] font-bold tracking-[1px]">
                      {item.count}
                    </p>
                    <button
                      className=" text-black text-[13px] font-bold tracking-[1px] opacity-[0.25] cursor-pointer "
                      onClick={() => {
                        changeCount(1, index);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-row justify-between w-full">
            <p className="text-[15px] font-medium leading-[25p] opacity-[0.5]">
              TOTAL
            </p>
            <p className="text-[18px] font-bold ">$ {totoalPrice}</p>
          </div>

          <Link
            to={"/checkout"}
            onClick={() => {
              setCart(!cart);

              const filteredProducts = cardsProduct.filter(
                (product: { count: number }) => product.count > 0
              );
              setCardsProduct(filteredProducts);
            }}
            className="w-[271px] h-[48px] bg-[#d87d4a] text-white text-[13px] font-bold tracking-[1px] flex items-center justify-center md:w-[313px]"
          >
            CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
}
