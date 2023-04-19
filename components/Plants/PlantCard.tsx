import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { Url } from "url";
export interface PlantInput {
  item: {
    link: string;
    title:string;
    text:string;
    sub_text: string;
    pic: string;
  };
}
const PlantCard = ({ item }: PlantInput) => {
  return (
    <div className="md:h-96 bg-white font-Montserrat h-80 relative  hover:-translate-y-3   group transition-all duration-500 ease-in-out  py-4 outline outline-2 outline-sky-100 rounded-xl from-white to-white w-full px-2  sm:px-4 shadow-lg">
      <div className="gap-y-4 relative z-[1] flex flex-col h-full ">
        <div className="relative w-full h-48">
          <Image className=" rounded-md  object-cover" fill alt="" src={item.pic} />
        </div>
        <p className="sm:text-xl text-xl  sm:w-72 text-left font-bold capitalize">
          {item.title}
        </p>
        <p className="md:text-lg font-Amaranth  text-left text-black">
          {item.text}
        </p>
        {/* <Link
          href={`/plants/${item.link}`}
          className="md:text-xl text-lg  font-bold transition-colors ease-in-out duration-75 group-hover:text-white flex items-center  gap-2 text-work-card"
        >
          {item.sub_text} <AiOutlineRight size={15} className=" mt-1" />
        </Link> */}
      </div>
    </div>
  );
};

export default PlantCard;
