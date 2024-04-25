import styles from '../../styles/index.module.css';
import GameSymbol from './game-symbol';

export function GameCell({ isWinner, onClick, symbol }) {
    return (
      <button
        className={`${styles.cell} ${isWinner ? 'cell--win' : ''}`}
        onClick={onClick}
      >
        {symbol ? <GameSymbol symbol={symbol} /> : ''}
      </button>
    )
  }