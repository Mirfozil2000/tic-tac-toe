import { clsx } from "clsx";
import { Profile } from "../profile";
import { CrossIcon } from "./icons/cross-icon";

export function GameInfo({ className }) {

  return (
    <div className={clsx(className, 'bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between')}>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Profile className='w-44' />
          <div className="absolute flex items-center justify-center w-5 h-5 bg-white rounded-full shadow -left-1 -top-1">
            <CrossIcon />
          </div>
        </div>
        <div className="w-px h-6 bg-slate-200" />
        <div className="text-lg font-semibold text-slate-900">01:08</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-lg font-semibold text-orange-600">00:08</div>
        <div className="w-px h-6 bg-slate-200" />
        <div className="relative">
          <Profile className='w-44' />
          <div className="absolute flex items-center justify-center w-5 h-5 bg-white rounded-full shadow -left-1 -top-1">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
