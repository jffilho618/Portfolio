import { RiFileList2Fill } from "react-icons/ri";
import Curriculo from '../documents/Curriculo.pdf'

export default function Sticky() {

    return (
        <a className={`group`}
            href={Curriculo} target="iframe_download" download={true}
        >
            <div className={`
            fixed bottom-6 right-6
            not-hover:animate-pulse
            w-12 h-12 
            text-sm 
            group-hover:w-50
            whitespace-nowrap overflow-hidden
            flex gap-3 items-center justify-center
            transition-all duration-300
            bg-transparent backdrop-blur-xl border-2 border-new-green px-2 py-2 rounded-2xl shadow-lg z-999 text-new-green hover:text-new-green hover:border-new-green cursor-pointer`}
            >
                <RiFileList2Fill size={23} />

                <p
                    className={`hidden group-hover:block transition-all duration-300 ease-in-out`}>
                    Baixar Currículo
                </p>
            </div>
        </a>
    );
}