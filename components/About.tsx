const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-2 gap-8 py-4  place-items-center   z-[3]  relative bg-second-green w-full text-center"
    >
      <div className=" relative  z-[3] px-20 items-start flex  flex-col py-8 gap-y-8 ">
        <div className="relative">
          <img className="absolute -left-16 -top-6 w-16 z-[1] rotate-[-200deg] " src="/leave.png" alt="" />
          <h2 className="text-6xl relative z-[2]  font-bold font-Montserrat  text-white">About us</h2>
        </div>
        <p className="p-2 text-left text-xl lg:max-w-5xl font-Amaranth text-stone-50 lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores similique obcaecati, enim quas nisi tempora
          debitis commodi repudiandae libero a neque quia excepturi quaerat aut, optio mollitia eum voluptatum vel?
        </p>
      </div>
      <div className="w-full pb-12   grid place-items-center relative">
        <img className="w-96 z-[2] outline outline-main-brown object-cover relative aspect-square rounded-full" src="/cat.jpg" alt="" />
        <div className="w-96 scale-75 absolute  rounded-full aspect-square top-16 right-24 bg-stone-200 outline outline-dark-brown z-[1]"> 

        </div>
      </div>
    </section>
  );
};

export default About;
