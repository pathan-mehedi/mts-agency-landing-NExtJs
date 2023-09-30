import { getWorksLists } from "@/utilities/worksUtility";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const WorkList = async () => {
    const workList = await getWorksLists();

    return (
        <div className=' w-full px-[105px] pt-[67px] pb-5 bg-white justify-center items-center inline-flex'>
            <div className='container self-stretch flex-col justify-start items-start gap-10 inline-flex'>
                <div className='flex-col justify-start items-start gap-[15px] flex'>
                    <div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase">
                        Work List
                    </div>
                    <div className="w-[495px] text-black text-3xl font-semibold font-['Poppins']">
                        We provide the Perfect Solution to your business growth
                    </div>
                </div>
                <div className='justify-start items-start gap-[45px] inline-flex'>
                    <div className='grid grid-cols-5 gap-4 px-20 py-10'>
                        {workList.map((work, index) => {
                            return (
                                <div key={index} className='px-[10px] py-[10px] bg-white rounded-[30px] flex-col justify-start items-start gap-[15px] inline-flex'>
                                    <div className='flex-col justify-start items-start gap-[15px] flex'>
                                        <div className='p-[30px] bg-emerald-100 rounded-[20px] justify-center items-center gap-2.5 inline-flex'>
                                            <Image width={33.33} height={33.33}
                                                className='w-[33.33px] h-[33.33px]'
                                                src='https://cdn-icons-png.flaticon.com/512/4727/4727424.png'
                                                alt=''
                                            />
                                        </div>
                                        <div className='flex-col justify-start items-start gap-[15px] flex'>
                                            <div className="text-black text-2xl font-semibold font-['Poppins']">
                                                {work.title}
                                                
                                            </div>
                                            <div className="text-black text-lg font-normal font-['Avenir']">
                                                {work.description}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-[10px] justify-start items-center gap-2.5 inline-flex'>
                                        <div className="text-black text-lg font-normal font-['Avenir']">
                                            Learn More
                                        </div>
                                        <FaArrowRightLong />
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

export default WorkList;
