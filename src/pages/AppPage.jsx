import Board from "../components/Board";
import { useState } from "react";
import Score from "../components/Score";

function AppPage() {
    const [gameValues, setGameValues] = useState({
        score: 0,
        // timer: 0,
    })
    return (
        <main className="flex flex-col justify-center h-screen p-4">
            <header>
                <h1 className="text-xl">Simple Mouse Clicking Game</h1>
            </header>
            <Score score={gameValues.score} />
            <Board setGameValues={setGameValues} gameValues={gameValues} />
        </main>
    );
}

export default AppPage;
