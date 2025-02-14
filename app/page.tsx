import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" gap-8 lg:gap-3 h-full w-full flex justify-center items-start mt-8 flex-col lg:justify-between lg:flex-row">
     <div className=" flex flex-col gap-8 sm:gap-4 items-center  ">
     <div className=" flex flex-col gap-2 text-MttPrimary items-center lg:items-start w-full  ">
        <h3 className="text-[25px]">Protecting Our Planet, </h3>
        <h1 className="text-[27px] sm:text-[37px] font-bold"> Preserving Our Future</h1>
      </div>

      <p className=" text-center lg:text-left text-[20px] text-gray-500 max-w-[700px] align-middle">
        Zyllr is a nonprofit organization dedicated to environmental
        conservation, climate action, and sustainable living.{" "}
      </p>

      <div className=' flex gap-2  items-center lg:mr-auto'>

<Button variant={"outline"}>Contact Us</Button>
<Button className='bg-MttPrimary'>Get Involved</Button>

</div>
     </div>

    <Image className=" rounded-2xl" alt='logo' src="/assets/img.jpg" width={400} height={400}/>
    </div>
  );
};

export default page;
