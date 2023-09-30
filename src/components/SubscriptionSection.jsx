const SubscriptionSection = () => {
  return (
    <div className="w-full px-[422px] pt-[91px] pb-[137px] bg-white justify-center items-center inline-flex">
      <div className="container self-stretch flex-col justify-center items-center gap-10 inline-flex">
        <div className="flex-col justify-start items-center gap-[5px] flex">
          <div className="flex-col justify-start items-center gap-[22px] flex">
            <div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase">
              SUBSCRIBE
            </div>
            <div className="w-[495px] text-center text-black text-3xl font-semibold font-['Poppins'] capitalize">
              Subscribe to get the latest news about us
            </div>
          </div>
          <div className="text-center text-zinc-500 text-base font-medium font-['Avenir'] capitalize mt-5">
            Please drop your email below to get daily update about what we do
          </div>
        </div>
        <div className="h-[62px] flex-col justify-start items-end flex">
          <div className="w-[596px] px-4 py-2 rounded-[14px] border border-gray-400 justify-start items-center gap-2.5 inline-flex">
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email Adress"
              className="w-[590px] px-2 py-2 foucs:border-transparent focus:outline-none text-zinc-500 text-base font-normal font-['Avenir']"
            />
            <div className="w-[130.65px] px-[24.32px] py-[8.11px] bg-green-500 rounded-[14px] justify-center items-center gap-[8.11px] flex">
              <button className="text-white px-[24.32px] py-[8.11px] text-base font-['Poppins'] ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
