interface checkprops {
  cardsProduct: any;
  onSubmit: () => void;
}
export default function Summary({ cardsProduct, onSubmit }: checkprops) {
  const totoalPrice = cardsProduct.reduce(
    (total: any, item: { price: any; count: number }) => {
      return total + item.price * item.count;
    },
    0
  );

  const shipping = 0.009;
  const ship = totoalPrice * shipping;
  const totalle = totoalPrice + ship;

  const orderComplate = () => {
    onSubmit();
  };

  return (
    <div className=" flex flex-col items-start gap-[32px] p-[24px] rounded-[8px] w-[327px] bg-white mt-[8px] md:w-[689px] md:p-[33px] xl:w-[350px] xl:mt-0">
      <strong>SUMMARY</strong>

      <section className="flex flex-col w-full justify-between gap-[32px]">
        <div className="max-h-[240px] overflow-auto flex flex-col  gap-[24px]">
          {cardsProduct.map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-row  w-full   justify-between"
            >
              <div className="flex flex-row items-center gap-[16px]  ">
                <img
                  key={item.id}
                  className="w-[64px] h-[64px]"
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
              <p className="pt-[6px] opacity-[0.5] font-normal leading-[25px] text-[15px]">
                x{item.count}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start gap-[8px]">
          <ul className="flex flex-row items-center w-full justify-between ">
            <li className="text-[15px] font-medium leading-[25px] opacity-50 text-black">
              TOTAL
            </li>
            <li className="text-black text-[18px] font-bold">${totoalPrice}</li>
          </ul>
          <ul className="flex flex-row items-center w-full justify-between ">
            <li className="text-[15px] font-medium leading-[25px] opacity-50 text-black">
              SHIPPING
            </li>
            <li className="text-black text-[18px] font-bold">
              {" "}
              ${ship.toFixed(0)}
            </li>
          </ul>
          <ul className="flex flex-row items-center w-full justify-between ">
            <li className="text-[15px] font-medium leading-[25px] opacity-50 text-black">
              VAT (INCLUDED)
            </li>
            <li className="text-black text-[18px] font-bold">
              ${(totoalPrice / 5).toFixed(0)}
            </li>
          </ul>
          <ul className="flex flex-row items-center w-full justify-between mt-[16px]">
            <li className="text-[15px] font-medium leading-[25px] opacity-50 text-black">
              GRAND TOTAL
            </li>
            <li className="text-[#D87D4A] text-[18px] font-bold">
              ${totalle.toFixed(0)}
            </li>
          </ul>
        </div>
      </section>

      <button
        onClick={() => {
          orderComplate();
        }}
        className="w-[279px] h-[48px] bg-[#d87d4a] text-white text-[13px] font-bold tracking-[1px] flex items-center justify-center md:w-[623px] xl:w-[284px]"
      >
        CONTINUE & PAY
      </button>
    </div>
  );
}
