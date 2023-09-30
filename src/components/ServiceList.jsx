import { getServiceLists } from "@/utilities/serviceUtility";

const ServiceList = async () => {
  const serviceList = await getServiceLists();

  return (
    <div className=" w-full pl-[15px] pr-[15px] bg-white">
      <div className=" pl-[105px] pr-[45px] pt-[35px] pb-[20px] flex-col justify-start items-start gap-10 inline-flex">
        <div className=" flex-col justify-start items-start gap-[15px] flex">
          <div className="text-green-500 text-xl font-medium font-['Poppins'] uppercase">
            Our All Services
          </div>
          <div className=" text-black text-3xl font-semibold font-['Poppins']">
            We Provide BestWeb design services
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-3 gap-4 px-20 py-10">
        {serviceList.map((service, index) => {
          return (
            <div key={index} className="w-[550px] h-[694px] justify-center items-center inline-flex">
              <div className="w-[550x] h-[694px] bg-white rounded-[20px] shadow">
                <div className="px-5 py-3 text-black text-[20px] font-semibold font-['Poppins'] uppercase">
                  {service.title}
                </div>
                <div className="px-5 text-neutral-400 text-base font-normal font-['Poppins'] capitalize">
                  {service.des}
                </div>
                <div className="grid grid-cols-2 gap-2 px-5 py-5">
                  <div>
                    <img
                      className="w-[358px] h-[263px] rounded-[10px] shadow object-cover"
                      src={service.image1}
                    />
                  </div>
                  <div>
                    <img
                      className="w-[358px] h-[263px] rounded-[10px] shadow object-cover"
                      src={service.image2}
                    />
                  </div>
                  <div>
                    <img
                      className="w-[248px] h-[263px] rounded-[10px] shadow object-cover"
                      src={service.image3}
                    />
                  </div>
                  <div>
                    <img
                      className="w-[257px] h-[263px] rounded-[10px] shadow object-cover"
                      src={service.image4}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceList;
