const About = () => {
  return (
    <section className="justify-center text-center">
      <div className="relative flex flex-col justify-center w-full h-full py-8 txt gap-y-8 ">
        <img
          className="absolute lg:w-20 w-10 -top-[-20px] left-8 lg:-top-[10px] rotate-[-200deg] lg:left-[285px]"
          src="/leave.png"
          alt=""
        />
        <h2 className="text-6xl  font-bold font-Montserrat z-[3] text-dark-brown">
          About us
        </h2>
        <p className="p-2 text-xl lg:max-w-5xl font-Amaranth text-stone-600 lg:text-2xl">
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
