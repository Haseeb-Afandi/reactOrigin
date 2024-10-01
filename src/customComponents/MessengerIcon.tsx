import { Size } from "@tsparticles/engine";
import { FaMessage } from "react-icons/fa6";
import { MdOutlineChat } from "react-icons/md";

export const MessengerIcon = ({
    className
}: { className?: string }) => {
    return (
        <div className={"fixed bottom-0 right-0 z-50 " + className}>
            <div className="w-[65px] h-[65px] bg-[#089CFF] hover:bg-[#77c9ff] cursor-pointer rounded-full border-2 border-solid border-white self-center">
                <div className="w-full h-full flex justify-center items-center">
                    <MdOutlineChat className="text-white" size={"2rem"} />
                </div>
            </div>
        </div>
    );
}