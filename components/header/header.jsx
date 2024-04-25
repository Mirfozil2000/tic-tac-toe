import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../profile";
import { ArrowDownIcon } from './icons/arrow-down-icon';
export function Header() {
    return (
        <header className="flex items-center h-24 px-8 bg-white shadow-lg">
            <Image src={logoSrc} alt="logo" />
            <div className="w-px h-8 mx-6 bg-slate-200" />
            <button className="px-5 py-2 text-2xl leading-tight text-white transition-colors bg-teal-600 rounded-lg hover:bg-teal-500 w-44">
                Играть
            </button>
            <button className="flex items-center gap-2 ml-auto text-teal-500 text-start">
                <Profile />
                <ArrowDownIcon />
            </button>
        </header>
    );
}
