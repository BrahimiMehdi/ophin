interface ButtonInputType {
    type:"button" | "reset" | "submit";
    text:string;
    style:{
        bordered:boolean;
        primary:boolean;
    }
}
const Button = ({type,text,style}:ButtonInputType) => {
  return (
    <button type={type}>
        {text}
    </button>
  )
}

export default Button