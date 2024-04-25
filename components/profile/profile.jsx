import Image from "next/image";
import avatarSrc from "./avatar.png";
import { clsx } from "clsx";
export const Profile = ({ className }) => {
    return (
        <div className={clsx(className, "flex items-center gap-2 text-teal-600 text-start")}>
            <Image src={avatarSrc} alt="logo" width={48} height={48} />
            <div>
                <div className="text-lg leading-tight">Mirfozil</div>
                <div className="text-xs leading-tight text-slate-300">Рейтинг: 1234</div>
            </div>
        </div>
    );
}