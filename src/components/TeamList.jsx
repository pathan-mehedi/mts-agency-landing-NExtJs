import { getTeamLists } from "@/utilities/teamUtility";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const TeamList = async () => {
  const teamList = await getTeamLists();

  return (
      <div className="pl-[105px] pr-[45px] pt-[67px] pb-[84px] bg-white flex-col justify-start items-start gap-[66px] inline-flex">
      <div className="w-full pl-[15px] pr-[15px] pt-[5px] pb-[5px] bg-white flex-col justify-start items-start gap-[66px] inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-10 inline-flex">
          <div className="container flex-col justify-start items-start gap-[15px] flex">
            <div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase">
              Our Team Member
            </div>
            <div className="w-[495px] text-black text-3xl font-semibold font-['Poppins']">
              Check our awesome team members
            </div>
          </div>
        </div>
        <div className="self-stretch h-[490px] pr-[54px] pb-1.5 justify-start items-start gap-8 inline-flex">
          <div className="grid grid-cols-4 gap-4 px-20 py-10">
            {teamList.map((team, index) => {
              return (
                <div key={index} className="w-[345px] h-[490px] relative">
                  <div className="w-[345px] h-[490px] left-0 top-0 absolute bg-white rounded-[20px] shadow border border-neutral-200"></div>
                  <Image
                  width={365}
                  height={387}
                    className="w-[365px] h-[387px] left-0 top-0 absolute rounded-tl-[20px] rounded-tr-[20px] object-cover"
                    src={team.image}
                    alt=""
                  />
                  <div className="w-[145px] h-[50px] left-[100px] top-[307px] absolute">
                    <div className="w-[145px] h-[50px] left-0 top-0 absolute bg-white rounded-[25px] shadow cursor-pointer"></div>
                    <div className="left-[21px] top-[17px] absolute text-gray-500 text-base font-normal hover:text-green-500 cursor-pointer">
                      <FaFacebookF />
                    </div>
                    <div className="left-[111px] top-[17px] absolute text-gray-500 text-base font-normal hover:text-green-500 cursor-pointer">
                      <FaInstagram />
                    </div>
                    <div className="left-[63px] top-[17px] absolute text-gray-500 text-base font-normal hover:text-green-500 cursor-pointer">
                      <FaTwitter />
                    </div>
                    <div className="w-4 h-[0px] left-[47px] top-[17px] absolute origin-top-left rotate-90 border border-neutral-200"></div>
                    <div className="w-4 h-[0px] left-[95px] top-[17px] absolute origin-top-left rotate-90 border border-neutral-200"></div>
                  </div>
                  <div className="left-[104px] top-[417px] absolute text-center text-gray-900 text-3xl font-semibold font-['Poppins'] leading-relaxed">
                    {team.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
