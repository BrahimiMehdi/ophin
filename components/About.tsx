const About = () => {
  return (
    <section className="justify-left  z-[3] flex relative bg-main-green w-full text-center">
        <svg className="absolute -top-48 z-[3]"  viewBox="0 0 1440 320"><path className="fill-main-green" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,69.3C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <svg className="absolute -left-8 -top-52 opacity-50 z-[2]"  viewBox="0 0 1440 320"><path className="fill-second-green" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,69.3C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <svg className="absolute -left-16 -top-56 z-[1] opacity-20"  viewBox="0 0 1440 320"><path className="fill-white" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,69.3C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <div className=" relative z-[3] px-20 items-start -top-12 flex  flex-col py-8 gap-y-8 ">
        <div className="relative">
          <img
            className="absolute -left-16 -top-6 w-16 z-[1] rotate-[-200deg] "
            src="/leave.png"
            alt=""
          />
          <h2 className="text-6xl relative z-[2]  font-bold font-Montserrat  text-white">
            About us
          </h2>
        </div>
        <p className="p-2 text-left text-xl lg:max-w-5xl font-Amaranth text-stone-100 lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          similique obcaecati, enim quas nisi tempora debitis commodi
          repudiandae libero a neque quia excepturi quaerat aut, optio mollitia
          eum voluptatum vel?
        </p>
      </div>
    </section>
  );
};

export default About;
