import Image from "next/image"

const Button = ({ type, text, icon, variant, textColor, flexDirection }) => {
  
  return (
    <button
      className={`gap-[0.5rem] base:rounded-[2.5rem] rounded-[1.7rem] flex-center ${variant} ${flexDirection} font-["Coolvetica"] base:text-[1.09rem] text-base cursor-pointer w-full whitespace-nowrap`}
      type={type}
    >
      {icon && <div className="relative -top-[0.05rem]">{icon}</div>}
      <label className={`${textColor} flex flex-col relative cursor-pointer`}>{text} <span className="line"></span></label>
    </button>
  )
}

export default Button