import clsx from "clsx";
import { ZeroIcon } from './icons/zero-icon';
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit/ui-button";
export function GameField({ className }) {
    const cells = new Array(19 * 19).fill(null);
    return (
        <div className={clsx(
            className,
            'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7'
        )}
        >
            <div className="flex items-center gap-3">
                <div className="mr-auto">
                    <div className="flex items-center gap-1 text-xl leading-tight">
                        Ход: <ZeroIcon className='w-5 h-5' />
                    </div>
                    <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
                        Следующий: <CrossIcon />
                    </div>
                </div>
                <UiButton size="md" variant='primary'>Ничья</UiButton>
                <UiButton size="md" variant='outline'>Сдаться</UiButton>
            </div>
            <div className="mt-3 grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px">
                {cells.map((_, i) => (
                    <button key={i} className="flex items-center justify-center -mt-px border border-slate-200">
                        <ZeroIcon className='w-5 h-5' />
                    </button>
                ))}
            </div>
        </div>
    )
}