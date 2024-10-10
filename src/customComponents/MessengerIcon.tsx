import { Size } from "@tsparticles/engine";
import { FaMessage } from "react-icons/fa6";
import { MdOutlineChat } from "react-icons/md";

export const MessengerIcon = ({
    className
}: { className?: string }) => {
    return (
        <div className={"fixed bottom-0 right-0 " + className}>
            <div className="bg-[#089CFF] hover:bg-[#77c9ff] messengerBtn">
                <div className="w-full h-full flex justify-center items-center border-2 border-solid border-white">
                    <MdOutlineChat className="text-white" size={"2rem"} />
                </div>
            </div>
        </div>
    );
}