import Button from "./utils/Button";
import { useForm } from "react-hook-form";
type FormData = {
  email:string;
  message:string;
}
const addMessage = async (obj:FormData) => {
  const result = await fetch("/api/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...obj,action:"addMessage"}),
  });
  return result.ok
};
const Contact = () => {
  const {register,handleSubmit,formState:{isSubmitSuccessful}} = useForm<FormData>();
  const onSubmit= async (data:FormData)=>{
    const res = await addMessage(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full relative top-8 flex gap-y-12 flex-col lg:items-start items-center my-16 mt-0 lg:mt-16 px-10 lg:px-20 ">
      <h2 className="text-5xl  z-[2]  relative lg:bottom-8  font-bold font-Montserrat text-dark-brown">Contact us</h2>
      <div className="w-full rounded-md outline-2 outline focus-within:outline-dark-brown outline-dark-green max-w-sm relative flex flex-col">
        <label className="text-dark-brown absolute -top-8" htmlFor="email">
          Email
        </label>
        <input {...register("email")} className="outline-none h-12 px-4 " type="email" name="email" id="email" />
      </div>
      <div className="w-full rounded-md outline-2 outline focus-within:outline-dark-brown outline-dark-green max-w-sm relative flex flex-col">
        <label className="text-dark-brown absolute -top-8" htmlFor="message">
          Message
        </label>
        <textarea
         {...register("message")}
          className="outline-none min-h-[5rem] pt-4 text-base max-h-48 h-28 resize-y px-4 "
          name="message"
          id="message"
        />
      </div>
      <Button isSubmitSuccessful={isSubmitSuccessful} type="submit" text="submit" style={{ bordered: false, primary: true }} />
    </form>
  );
};

export default Contact;
