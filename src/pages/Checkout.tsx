import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Summary from "../components/summary";
import delivery from "../../public/assets/checkout/icon-cash-on-delivery.svg";
type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber: string;
  eMoneyPIN: string;
};

interface checkprops {
  cardsProduct: any;
}

export default function Checkout({ cardsProduct }: checkprops) {
  const navigate = useNavigate();

  useEffect(() => {
    if (cardsProduct.length == 0) {
      navigate(-1);
    }
  }, []);
  const goBack = () => {
    navigate(-1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const prevUsers: Array<FormData> = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const {
      name,
      email,
      phone,
      address,
      zipCode,
      city,
      country,
      paymentMethod,
      eMoneyNumber,
      eMoneyPIN,
    } = data;

    localStorage.setItem(
      "users",
      JSON.stringify([
        ...prevUsers,
        {
          name,
          email,
          phone,
          address,
          zipCode,
          city,
          country,
          paymentMethod,
          eMoneyNumber,
          eMoneyPIN,
        },
      ])
    );
    navigate("/complaint-order");
  };

  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    if (selectedOption == "option1") {
      setCash(true);
    } else if (selectedOption == "option2") {
      setCash(false);
    }
  };

  const [cash, setCash] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center bg-[#FAFAFA]  ">
      <div className="px-[24px]  flex flex-col justify-center gap-[24px] items-start mb-[97px]">
        <button onClick={goBack} className="mt-[16px]  opacity-[0.5]">
          Go Back
        </button>
        <div className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:items-start">
          <div className="p-6 bg-[#fff] flex flex-col items-start gap-[32px] rounded-[8px] md:w-[689px] md:p-7 md:gap-[41px]">
            <h2 className="text-black text-[28px] font-bold  tracking-[1px]">
              CHECKOUT
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[32px] md:gap-[53px]"
            >
              <div>
                <h3 className="text-[#D87D4A] text-[13px] font-bold tracking-[0.9px] leading-[25px] mb-[24px]">
                  Billing details
                </h3>
                <section className="flex flex-col gap-[24px]">
                  <div className="flex flex-col gap-[24px] md:flex-row md:gap-4">
                    <div className="flex flex-col gap-[9px] relative">
                      <p
                        className={`text-[12px] font-bold tracking-[-0.2] ${
                          errors.name ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        Name
                      </p>

                      <input
                        className="w-[275px] h-[56px] rounded-[8px] border border-[#CFCFCF] outline-none py-[18px] pl-[24px] md:w-[309px]"
                        type="text"
                        placeholder="Name"
                        {...register("name", {
                          required: "Cannot be empty",
                        })}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <div>
                          <p className=" absolute text-xs text-[#CD2C2C] right-0  top-0">
                            {" "}
                            {errors.name.message}{" "}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-[9px] relative">
                      <p
                        className={`text-[12px] font-bold tracking-[-0.2] ${
                          errors.email ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        Email Address
                      </p>

                      <input
                        className="w-[275px] h-[56px] rounded-[8px] border border-[#CFCFCF] outline-none py-[18px] pl-[24px] md:w-[309px]"
                        type="text"
                        placeholder="Email Address"
                        {...register("email", {
                          required: "Cannot be empty",
                        })}
                      />
                      {errors.email && (
                        <div>
                          <p className=" absolute text-xs text-[#CD2C2C] right-0 top-0">
                            {" "}
                            {errors.email.message}{" "}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] relative  w-[275px]  md:w-[309px]">
                    <p
                      className={`text-[12px] font-bold tracking-[-0.2] ${
                        errors.phone ? "text-[#CD2C2C]" : "text-black"
                      }`}
                    >
                      Phone Number
                    </p>

                    <input
                      className="w-[275px] h-[56px] rounded-[8px] border border-[#CFCFCF] outline-none py-[18px] pl-[24px] md:w-[309px]"
                      type="text"
                      placeholder="Phone Number"
                      {...register("phone", {
                        required: "Cannot be empty",
                      })}
                    />
                    {errors.phone && (
                      <div>
                        <p className=" absolute text-xs text-[#CD2C2C] right-0 top-0">
                          {" "}
                          {errors.phone.message}{" "}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              </div>
              <div className="flex gap-4 items-start flex-col">
                <h3 className="text-[#D87D4A] text-[13px] font-bold tracking-[0.9px] leading-[25px] ">
                  SHOPPING INFO
                </h3>
                <section className="flex flex-col gap-[24px]">
                  <div className="flex flex-col gap-[9px] relative">
                    <p
                      className={`text-[12px] font-bold tracking-[-0.2] ${
                        errors.address ? "text-[#CD2C2C]" : "text-black"
                      }`}
                    >
                      Your Address
                    </p>

                    <input
                      className="w-[275px] h-[56px] rounded-[8px] border border-[#CFCFCF] outline-none py-[18px] pl-[24px] md:w-full"
                      type="text"
                      placeholder="Your Address"
                      {...register("address", {
                        required: "Cannot be empty",
                      })}
                    />
                    {errors.address && (
                      <div>
                        <p className=" text-xs text-[#CD2C2C] right-0 top-0 absolute">
                          {" "}
                          {errors.address.message}{" "}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-6 md:flex-row md:gap-4">
                    <div className="flex flex-col gap-[9px] relative">
                      <p
                        className={`text-[12px] font-bold tracking-[-0.2] ${
                          errors.zipCode ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        ZIP Code
                      </p>

                      <input
                        className="w-[275px] h-[56px] rounded-[8px] border border-[#CFCFCF] outline-none py-[18px] pl-[24px] md:w-[309px]"
                        type="number"
                        placeholder="ZIP Code"
                        {...register("zipCode", {
                          required: "Cannot be empty",
                        })}
                      />
                      {errors.zipCode && (
                        <div>
                          <p className=" text-xs text-[#CD2C2C] right-0 top-0 absolute">
                            {" "}
                            {errors.zipCode.message}{" "}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-[9px] relative">
                      <p
                        className={`text-[12px] font-bold tracking-[-0.2] ${
                          errors.city ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        City
                      </p>

                      <input
                        className="w-[275px] h-[56px] rounded-[8px] border border-[#CFCFCF] outline-none py-[18px] pl-[24px] md:w-[309px]"
                        type="text"
                        placeholder="City"
                        {...register("city", {
                          required: "Cannot be empty",
                        })}
                      />
                      {errors.city && (
                        <div>
                          <p className=" text-xs text-[#CD2C2C] right-0 top-0 absolute">
                            {" "}
                            {errors.city.message}{" "}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] relative w-[275px] md:w-[309px] ">
                    <p
                      className={`text-[12px] font-bold tracking-[-0.2] ${
                        errors.country ? "text-[#CD2C2C]" : "text-black"
                      }`}
                    >
                      Country
                    </p>

                    <input
                      className="w-[275px] h-[56px] rounded-[8px] border border-[#CFCFCF] outline-none py-[18px] pl-[24px] md:w-[309px]"
                      type="text"
                      placeholder="Country"
                      {...register("country", {
                        required: "Cannot be empty",
                      })}
                    />
                    {errors.country && (
                      <div>
                        <p className=" text-xs text-[#CD2C2C] right-0 top-0 absolute">
                          {" "}
                          {errors.country.message}{" "}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              </div>
              <div className="flex flex-col items-start justify-between gap-4 w-full">
                <h3 className="text-[#D87D4A] text-[13px] font-bold tracking-[0.9px] leading-[25px]">
                  PAYMENT DETAILS
                </h3>
                <fieldset>
                  <div className="flex flex-col gap-[17px] items-start md:flex-row md:justify-between md:w-[640px] md:gap-0">
                    <p className="text-[12px] text-black font-bold tracking-[-0.2] ">
                      Payment Method
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className=" flex flex-row items-center gap-[21px]  w-[275px] h-[56px] rounded-[8px] border border-[#CFCFCF] outline-none py-[18px] pl-[16px] md:w-[309px]">
                        <input
                          type="radio"
                          id="option1"
                          name="radioGroup"
                          value="option1"
                          checked={selectedOption === "option1"}
                          onChange={handleRadioChange}
                          className="  appearance-none
                          w-[10px] h-[10px]  rounded-xl focus:outline-none  checked:bg-[#D87D4A]  ring-1 ring-[#CFCFCF] ring-offset-2  checked:border-separate cursor-pointer "
                        />

                        <label
                          htmlFor="option1"
                          className="text-[14px] text-black font-bold tracking-[-0.25]"
                        >
                          e-Money
                        </label>
                      </div>

                      <div className=" flex flex-row items-center gap-[21px]  w-[275px] h-[56px] rounded-[8px] border border-[#CFCFCF] outline-none py-[18px] pl-[16px] md:w-[309px]">
                        <input
                          type="radio"
                          id="option2"
                          name="radioGroup"
                          value="option2"
                          checked={selectedOption === "option2"}
                          onChange={handleRadioChange}
                          className="  appearance-none
                          w-[10px] h-[10px]  rounded-xl focus:outline-none  checked:bg-[#D87D4A]  ring-1 ring-[#CFCFCF] ring-offset-2  checked:border-separate cursor-pointer"
                        />
                        <label
                          htmlFor="option2"
                          className="text-[14px] text-black font-bold tracking-[-0.25]"
                        >
                          Cash on Delivery
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
                {cash ? (
                  <section className="flex flex-row items-center justify-center gap-[32px]">
                    <img
                      src={delivery}
                      alt="delivery"
                      className="h-[48px] w-[48px]"
                    />
                    <p className="text-black text-[15px] font-normal leading-[25px] opacity-50 w-[544px]">
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </section>
                ) : (
                  <section className="flex flex-col gap-[24px] md:flex-row">
                    <div className="flex flex-col gap-[9px] relative">
                      <p
                        className={`text-[12px] font-bold tracking-[-0.2] ${
                          errors.eMoneyNumber ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        e-Money Number
                      </p>

                      <input
                        className="w-[275px] h-[56px] rounded-[8px] border border-[#CFCFCF] outline-none py-[18px] pl-[24px] md:w-[309px] "
                        type="number"
                        placeholder="e-Money Number"
                        {...register("eMoneyNumber", {
                          required: "Cannot be empty",
                        })}
                      />
                      {errors.eMoneyNumber && (
                        <div>
                          <p className=" text-xs text-[#CD2C2C] right-0 top-0 absolute">
                            {" "}
                            {errors.eMoneyNumber.message}{" "}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-[9px] relative">
                      <p
                        className={`text-[12px] font-bold tracking-[-0.2] ${
                          errors.eMoneyPIN ? "text-[#CD2C2C]" : "text-black"
                        }`}
                      >
                        e-Money PIN
                      </p>

                      <input
                        className="w-[275px] h-[56px] rounded-[8px] border border-[#CFCFCF] outline-none py-[18px] pl-[24px] md:w-[309px]"
                        type="number"
                        placeholder="e-Money PIN"
                        {...register("eMoneyPIN", {
                          required: "Cannot be empty",
                        })}
                        // onChange={(e) => {
                        //   const enterNumber = e.target.value;
                        //   if (enterNumber.length <= 3) {
                        //     setNumber(enterNumber;
                        //   }
                        // }}
                      />
                      {errors.eMoneyPIN && (
                        <div>
                          <p className=" text-xs text-[#CD2C2C] right-0  top-0 absolute">
                            {" "}
                            {errors.eMoneyPIN.message}{" "}
                          </p>
                        </div>
                      )}
                    </div>
                  </section>
                )}
              </div>
            </form>
          </div>

          <Summary
            cardsProduct={cardsProduct}
            onSubmit={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
}
