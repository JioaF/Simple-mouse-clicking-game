import Board from "../components/Board";
import { useState } from "react";
import Score from "../components/Score";
import Timer from "../components/Timer";

function AppPage() {
    const [gameValues, setGameValues] = useState({
        score: 0,
        baseTime: 5,
        gameStart: false,
        totalBox: 10,
    })

    function handleStart() {
        let gameStart = true;
        setGameValues({
            ...gameValues,
            gameStart
        })
    }
    return (
        <main className="flex flex-col justify-center h-screen p-4">
            <header>
                <h1 className="text-xl">Simple Mouse Clicking Game</h1>
            </header>
            <Timer setGameValues={setGameValues} gameValues={gameValues} />
            <Score score={gameValues.score} />
            <section className="text-center">
                <button
                    className="bg-green-600 w-20 px-4 py-2 text-white rounded hover:bg-green-700 disabled:bg-green-300"
                    onClick={handleStart}
                    disabled={gameValues.gameStart}
                >
                    Start
                </button>
            </section>
            <Board setGameValues={setGameValues} gameValues={gameValues} />
        </main>
    );
}

export default AppPage;
