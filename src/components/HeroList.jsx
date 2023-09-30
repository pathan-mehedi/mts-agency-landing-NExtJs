import { getHeroList } from "@/utilities/heroUtility";
import Image from "next/image";

const HeroList = async () => {
    const heroInfo = await getHeroList();

    return (
        <div className=' h-[650px] bg-gradient-to-b from-emerald-100 to-emerald-100'>
            <div className='container grid grid-cols-2 gap-4 px-20 py-10'>
                <div className='flex-col justify-center items-start gap-[50px] inline-flex'>
                    <div className="px-[0] text-black text-[50px] font-bold font-['Poppins'] leading-[50px]">
                        {heroInfo.title}
                    </div>
                    <div className="px-[0] my-[-25px] text-black text-xl font-medium font-['Avenir']">
                        {heroInfo.description}
                    </div>
                    <div className='px-[30px] py-5 bg-green-500 rounded-2xl justify-center items-center gap-2.5 inline-flex'>
                        <button className="text-white text-xl font-medium font-['Poppins']">
                            Get Started
                        </button>
                    </div>
                </div>

                <div>
                    <div className='flex justify-center'>
                        <Image
                            width={500}
                            height={500}
                            className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover lg:rounded-br-none rounded-[20px]'
                            src={heroInfo.image2}
                            alt=''
                        />
                        <Image
                            width={500}
                            height={500}
                            alt=''
                            className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover lg:rounded-bl-none rounded-[20px]'
                            src={heroInfo.image1}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <Image
                            width={500}
                            height={500}
                            alt=''
                            className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover lg:rounded-br-none rounded-[20px]'
                            src={heroInfo.image4}
                        />
                        <Image
                            width={500}
                            height={500}
                            alt=''
                            className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover lg:rounded-bl-none rounded-[20px]'
                            src={heroInfo.image3}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroList;
