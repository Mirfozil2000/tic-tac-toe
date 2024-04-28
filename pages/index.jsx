// import { Game } from "../components/game/game";
import { GameField, GameInfo, GameTitle } from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={2} />
        <GameInfo className='mt-4' />
        <GameField className='mt-6' />
      </main>
    </div>
  );
}
