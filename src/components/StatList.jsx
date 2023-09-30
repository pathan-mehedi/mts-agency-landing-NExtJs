import { getStatsInfo } from "@/utilities/statsUtility";

const StatList = async () => {
  const statInfo = await getStatsInfo();

  return (
    <div className="w-full h-[421px] pl-[101px] pr-[100px] pt-[5px] pb-[5px] bg-white justify-center items-center inline-flex">
      <div className="container grow shrink basis-0 self-stretch relative">
        <div className="w-72 h-[290px] left-0 top-0 absolute flex-col justify-center items-center inline-flex">
          <div className="w-72 h-[290px] relative">
            <div className="w-72 h-[290px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
            <div className="w-[113px] h-[195px] left-[88px] top-[48px] absolute">
              <div className="w-[100px] h-[100px] left-[7px] top-0 absolute bg-emerald-100 rounded-[10px]"></div>
              <div className="w-10 h-10 px-[0.42px] pt-[6.67px] pb-[7.08px] left-[37px] top-[30px] absolute justify-center items-center inline-flex">
                <div className="w-[39.17px] h-[26.25px] relative"></div>
              </div>
              <div className="left-0 top-[122px] absolute text-black text-3xl font-semibold font-['Poppins']">
                {statInfo.followers}
              </div>
              <div className="left-[19px] top-[171px] absolute text-black text-base font-medium font-['Poppins']">
                Followers
              </div>
            </div>
          </div>
        </div>
        <div className="w-72 h-[290px] left-[317px] top-0 absolute flex-col justify-center items-center inline-flex">
          <div className="w-72 h-[290px] relative">
            <div className="w-72 h-[290px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
            <div className="w-[135px] h-[196px] left-[77px] top-[47px] absolute">
              <div className="w-[100px] h-[100px] left-[18px] top-0 absolute bg-emerald-100 rounded-[10px]"></div>
              <div className="w-10 h-10 pl-[5px] pr-[5.17px] pt-[6.67px] pb-[5.83px] left-[48px] top-[30px] absolute justify-center items-center inline-flex"></div>
              <div className="left-[30px] top-[123px] absolute text-center text-black text-3xl font-semibold font-['Poppins']">
                {statInfo.solved}
              </div>
              <div className="left-0 top-[172px] absolute text-center text-black text-base font-medium font-['Poppins']">
                Solved Problems
              </div>
            </div>
          </div>
        </div>
        <div className="w-72 h-[290px] left-[634px] top-0 absolute flex-col justify-center items-center inline-flex">
          <div className="w-72 h-[290px] relative">
            <div className="w-72 h-[290px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
            <div className="w-[146px] h-[196px] left-[71px] top-[47px] absolute">
              <div className="w-[100px] h-[100px] left-[23px] top-0 absolute bg-emerald-100 rounded-[10px]"></div>
              <div className="w-10 h-10 p-[3.33px] left-[53px] top-[30px] absolute justify-center items-center inline-flex">
                <div className="w-[33.33px] h-[33.33px] relative"></div>
              </div>
              <div className="left-[26px] top-[123px] absolute text-black text-3xl font-semibold font-['Poppins']">
                {statInfo.customers}
              </div>
              <div className="left-0 top-[172px] absolute text-black text-base font-medium font-['Poppins']">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
        <div className="w-72 h-[290px] left-[951px] top-0 absolute flex-col justify-center items-center inline-flex">
          <div className="w-72 h-[290px] relative">
            <div className="w-72 h-[290px] left-0 top-0 absolute bg-white rounded-[20px] shadow"></div>
            <div className="w-[113px] h-[196px] left-[88px] top-[47px] absolute">
              <div className="w-[100px] h-[100px] left-[7px] top-0 absolute bg-emerald-100 rounded-[10px]"></div>
              <div className="w-10 h-10 p-[5px] left-[37px] top-[30px] absolute justify-center items-center inline-flex"></div>
              <div className="left-0 top-[123px] absolute text-black text-3xl font-semibold font-['Poppins']">
                {statInfo.projects}
              </div>
              <div className="left-[24px] top-[172px] absolute text-black text-base font-medium font-['Poppins']">
                Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatList;
