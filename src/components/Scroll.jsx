import { BsArrowUp } from "react-icons/bs";

const Scroll = () => {
  return (
    <div className=" fixed right-5 opacity-90 cursor-pointer bottom-12 p-5 text-lg bg-[#9387AD] rounded-full inline-block" onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}>
        <BsArrowUp className="font-bold text-white"/>
    </div>
  )
}

export default Scroll;