import useGameState from "./use-game-state"
import { GameInfo } from "./game-info";
import { GameCell } from "./game-cell";
import { ResetButton } from "./reset-button";

export function Game() {
    const {
        cells,
        currentStep,
        winnerSymbol,
        isDraw,
        handleCellClick,
        handleResetClick,
        winnerSequence
    } = useGameState()
    return (
        <div className='flex flex-col items-center w-40 mx-auto my-24 border border-black p-5'>
            <GameInfo
                isDraw={isDraw}
                winnerSymbol={winnerSymbol}
                currentStep={currentStep}
            />
            <div className='grid pt-px pl-px grid-cols-[repeat(3,30px)] grid-rows-[repeat(3,30px)]'>
                {cells.map((symbol, index) => (
                    <GameCell
                        key={index}
                        symbol={symbol}
                        isWinner={winnerSequence?.includes(index)}
                        onClick={() => handleCellClick(index)}
                    />
                ))}
            </div>
            <ResetButton onClick={handleResetClick} />
        </div>
    )
}
