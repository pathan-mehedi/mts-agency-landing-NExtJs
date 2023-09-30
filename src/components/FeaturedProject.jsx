import { getFeaturedProjectLists } from "@/utilities/featuredProjects";

const FeaturedProject = async () => {
    const featuredProjects = await getFeaturedProjectLists();

    return (
        <div className='w-full h-[1100px] bg-green-50'>
            <div className="container ">
                <div className="pt-10 pb-5 text-green-500 text-xl font-medium font-['Poppins'] uppercase">
                    Featured Project
                </div>
                <div className="w-[595px] pb-5 text-black text-3xl font-semibold font-['Poppins']">
                    We provide the Perfect Solution to your business growth
                </div>
                <div className='grid grid-cols-4 gap-4 py-10'>
                    {featuredProjects.map((project, index) => {
                        return (
                            <div key={index} className='m-2'>
                                <img
                                    className='rounded-[20px]'
                                    src={project.image}
                                />
                                <div className="w-[250px] ml-3 mt-3 opacity-80 text-slate-700 text-sm font-normal font-['Poppins'] leading-relaxed">
                                    {project.title}
                                </div>
                                <div className="w-[250px] ml-3 mt-1 text-slate-700 text-lg font-bold font-['Poppins'] capitalize leading-7">
                                    {project.title}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
