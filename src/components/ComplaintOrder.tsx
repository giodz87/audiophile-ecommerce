import image from "../../public/assets/checkout/icon-order-confirmation.svg";
import { useNavigate } from "react-router-dom";
interface checkprops {
  cardsProduct: any;
  setCardsProduct: any;
}

export default function ComplaintOrder({
  cardsProduct,
  setCardsProduct,
}: checkprops) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  const totoalPrice = cardsProduct.reduce(
    (total: any, item: { price: any; count: number }) => {
      return total + item.price * item.count;
    },
    0
  );

  const firstElement = cardsProduct[0];
  return (
    <div className="  flex flex-col items-center justify-start p-[24px]   w-full h-full  bg-black bg-opacity-50 z-10 ">
      <div className="w-[327px] bg-white p-[32px] rounded-[8px] flex flex-col items-start gap-[24px] md:w-[540px] md:p-12  md:gap-[33px]">
        <img src={image} alt="icon-order-confirmation" />
        <div className="flex flex-col items-start gap-[16px] md:gap-[24px]">
          <h1 className="text-[24px] font-bold leading-[28px] tracking-[0.8px] md:text-[32px] md:leading-[36px]">
            THANK YOU <br />
            FOR YOUR ORDER
          </h1>
          <p className="text-[15px] font-normal leading-[25px] opacity-50">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="w-[263px] bg-[#F1F1F1] p-[24px] flex flex-col items-center gap-3 rounded-t-[8px] md:w-[246px] rounded-r-[0px] rounded-l-[8px] ">
            <div className="flex flex-row  w-full   justify-between">
              <div className="flex flex-row items-center gap-[27px]  ">
                <img
                  className="w-[50px] h-[50px]"
                  src={"../" + firstElement?.img}
                  alt=""
                />
                <div className="flex flex-col items-start">
                  <h1 className=" text-black text-[15px] font-bold leading-[25px]">
                    {firstElement?.name}
                  </h1>

                  <p className=" opacity-[0.5] text-[14px] font-bold leading-[25px]">
                    {firstElement?.price}
                  </p>
                </div>
              </div>
              <p className="pt-[6px] opacity-[0.5] font-normal leading-[25px] text-[15px]">
                x{firstElement?.count}
              </p>
            </div>
            <div className="w-[215px] h-[1px] bg-black opacity-20 "></div>
            <p className="text-[12px] font-bold tracking-[-0.21px] text-black opacity-50">
              and {cardsProduct.slice(1).length} other item(s)
            </p>
          </div>

          <div className="bg-black w-[263px] h-[92px] pl-[24px] pt-[15px] flex flex-col items-start gap-2 rounded-b-[8px] md:w-[198px] md:h-[140px] md:pt-10 md:rounded-r-[8px] md:rounded-l-[0px]">
            <h2 className="text-white text-[15px] font-medium leading-6 opacity-50">
              GRAND TOTAL
            </h2>
            <div className="text-lg text-white font-bold ">$ {totoalPrice}</div>
          </div>
        </div>
        <button
          onClick={() => {
            goBack();
            setCardsProduct([]);
          }}
          className="text-[13px] font-bold tracking-[1px] text-white w-[263px] h-[48px] bg-[#D87D4A] md:w-[444px]"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}
