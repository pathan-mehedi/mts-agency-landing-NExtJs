import { getTestimonialLists } from "@/utilities/testimonialsUtility";
import Image from "next/image";

const TestimonialList = async () => {
    const testimonialList = await getTestimonialLists();
    return (
        <div className='container w-full pl-[15px] pr-[15px] bg-white'>
            <div className=' pl-[0] pr-[45px] pt-[35px] pb-[20px] flex-col justify-start items-start gap-10 inline-flex'>
                <div className=' flex-col justify-start items-start gap-[15px] flex'>
                    <div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase">
                        Testimonial List
                    </div>
                    <div className="w-[495px] text-black text-3xl font-semibold font-['Poppins']">
                        Better Agency/SEO Solution At Your Fingertips
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 px-20 py-10'>
                {testimonialList.map((testimonial, index) => {
                    return (
                        <div
                            key={index}
                            className='w-auto justify-center items-center inline-flex'>
                            <div className='w-[410px] pt-5 pb-5 bg-white rounded-[20px] shadow'>
                                <div class='flex justify-center items-center'>
                                    <Image
                                        width={150}
                                        height={150}
                                        alt=''
                                        className='w-[150px] h-[150px] rounded-[20px] object-cover'
                                        src={testimonial.image}
                                    />
                                </div>
                                <div className="text-black text-center text-[26px] font-semibold font-['Poppins'] uppercase px-3 pt-5">
                                    {testimonial.name}
                                </div>
                                <div className="text-black text-center text-base font-normal font-['Poppins'] capitalize px-3 pt-5">
                                    {testimonial.designation}
                                </div>
                                <div className="text-center text-neutral-400 text-base font-normal font-['Poppins'] capitalize leading-relaxed px-3 pt-5">
                                    {testimonial.msg}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TestimonialList;
