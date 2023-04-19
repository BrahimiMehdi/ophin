import PlantCard from "./PlantCard";
import { gsap, Power3 } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SinglePlantResponse } from "@/services";
const PlantsSection = ({plants}:{plants:SinglePlantResponse[]}) => {
  gsap.registerPlugin(ScrollTrigger);
  const subtitle = useRef(null);
  const title = useRef(null);
  const cardContainer = useRef(null);
  useEffect(() => {

    gsap.to(subtitle.current, {
      y: 0,
      delay: 0.2,
      opacity: 1,
      duration: 1,
      ease: Power3.easeOut,
      scrollTrigger: subtitle.current,
    });
    gsap.to(title.current, {
      y: 0,
      delay: 0.2,
      opacity: 1,
      duration: 1,
      ease: Power3.easeOut,
      scrollTrigger: title.current,
    });
    gsap.to(cardContainer.current, {
      y: 0,
      delay: 0.2,
      opacity: 1,
      duration: 1,
      ease: Power3.easeOut,
      scrollTrigger: cardContainer.current,
    });
  }, []);
  return (
    // outer most container
    <section id="plants" className="font-Montserrat w-full px-8 py-16 ">
      <div className="h-full w-full overflow-hidden flex flex-col items-center gap-y-2 ">
        <p
          ref={subtitle}
          className="text-xl translate-y-4 opacity-0  font-medium tracking-wide font-Amaranth "
        >
          learn with us
        </p>
        <h3
          ref={title}
          className="sm:text-5xl translate-y-16 opacity-0 text-3xl text-center font-extrabold text-dark-brown"
        >
          Intresting plants
        </h3>
        {/* cards container */}
        <div
          ref={cardContainer}
          className="h-full p-4 opacity-0 translate-y-52 max-w-7xl w-full gap-12 [grid-template-columns:_repeat(_auto-fit,_minmax(14rem,_1fr)_);] sm:[grid-template-columns:_repeat(_auto-fit,_minmax(20rem,_1fr)_);] grid"
        >
          {plants.map((item, index:number) => (
            <PlantCard plants={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantsSection;
