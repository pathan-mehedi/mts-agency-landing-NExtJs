import { FaAngleRight } from "react-icons/fa6";

const Background = ({ currentPage }) => {
  return (
    <div className="w-full h-[250px] ">
      <div className=" w-full h-[250px] bg-slate-50"></div>
      <div className="container w-full h-24 left-[200px] top-[194px] absolute">
        <div className="left-0 top-0 absolute text-gray-900 text-[40px] font-semibold font-['Plus Jakarta Sans'] leading-[51px]">
          {currentPage}
        </div>
        <div className="w-full h-[25px] left-0 top-[71px] absolute justify-start items-center gap-[15px] inline-flex">
          <div className="text-gray-900 text-base font-semibold font-['Plus Jakarta Sans'] leading-[25px]">
            Home
          </div>
          <div className="text-gray-900 text-base font-black">
            <FaAngleRight />
          </div>
          <div className="text-green-500 text-base font-semibold font-['Plus Jakarta Sans'] leading-[25px]">
            {currentPage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
