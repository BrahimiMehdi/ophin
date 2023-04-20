import Button from "./utils/Button";
const Contact = () => {
  return (
    <form className="w-full relative top-8 flex gap-y-12 flex-col lg:items-start items-center my-16 mt-0 lg:mt-16 px-10 lg:px-20 ">
      <h2 className="text-5xl  z-[2]  relative lg:bottom-8  font-bold font-Montserrat text-dark-brown">Contact us</h2>

      <div className="w-full rounded-md outline-2 outline outline-dark-green max-w-sm relative flex flex-col">
        <label className="text-dark-brown absolute -top-8" htmlFor="email">
          Email
        </label>
        <input className="outline-none h-12 px-4 " type="email" name="email" id="email" />
      </div>
      <div className="w-full rounded-md outline-2 outline outline-dark-green max-w-sm relative flex flex-col">
        <label className="text-dark-brown absolute -top-8" htmlFor="message">
          Message
        </label>
        <textarea
          className="outline-none min-h-[5rem] pt-4 text-base max-h-48 h-28 resize-y px-4 "
          name="message"
          id="message"
        />
      </div>
      <Button type="submit" text="submit" style={{ bordered: false, primary: true }} />
    </form>
  );
};

export default Contact;
