import Link from "next/link";

const Footer = () => {
    return (
        <section className='w-full bg-emerald-100'>
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-4 py-10'>
                <div className='text-center md:text-left'>
                    <div className='text-black text-2xl md:text-[39.20px] font-bold font-Poppins mb-5'>
                        MTS Agency
                    </div>
                    <div className='text-black text-base md:text-xl font-normal font-Avenir'>
                        <span className="pr-10 lg:pr-[90px]">
                            Some footer text about the Agency. Just a little
                            description to help people understand you better
                        </span>
                    </div>
                </div>

                <div className='mt-4 md:mt-0 px-10'>
                    <div className='text-black text-2xl md:text-xl font-semibold font-Poppins'>
                        Quick Links
                    </div>
                    <div className='flex flex-col mt-2 gap-2'>
                        <Link
                            href='/team'
                            passHref
                            className='text-black text-base md:text-lg font-medium font-Avenir'>
                            Team
                        </Link>
                        <Link
                            href='/service'
                            passHref
                            className='text-black text-base md:text-lg font-medium font-Avenir'>
                            Services
                        </Link>
                        <Link
                            href='/projects'
                            passHref
                            className='text-black text-base md:text-lg font-medium font-Avenir'>
                            Projects
                        </Link>
                        <Link
                            href='/testimonials'
                            passHref
                            className='text-black text-base md:text-lg font-medium font-Avenir'>
                            Testimonials
                        </Link>
                    </div>
                </div>

                <div className='mt-4 md:mt-0 px-10'>
                    <div className='text-black text-2xl md:text-xl font-semibold font-Poppins'>
                        Address
                    </div>
                    <div className='text-black text-base md:text-xl font-medium font-Avenir'>
                        MTS Agency Head Quarter.
                        <br />
                        Mirpur DOHS, Dhaka
                        <br />
                        Bangladesh
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
