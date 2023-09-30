import { getBrandLists } from "@/utilities/brandUtility";

const OurPartners = async () => {
    const partnerList = await getBrandLists();

    return (
        <div className=' bg-gradient-to-b from-emerald-100 to-emerald-100 py-5'>
            <div className='bg-stone-50'>
                <div className='container w-full h-[120px] pl-[115px] pr-[143.07px] justify-between items-center flex'>
                    {partnerList.map((partner, i) => {
                        return (
                            <div
                                key={i}
                                className='mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2'>
                                <img
                                    className='mx-auto h-8'
                                    src={partner.image}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default OurPartners;
