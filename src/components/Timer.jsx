import pt from 'prop-types';
import { useState } from 'react';

export default function Timer({ setGameValues, gameValues }) {
    const [time, setTime] = useState(gameValues.baseTime);
    let gameStart = gameValues.gameStart;
    if (gameValues.gameStart) {
        const runTime = setTimeout(function () {
            setTime(time - 1)
        }, 1000)
        if (time == 0) {
            gameStart = false;
            clearTimeout(runTime)
            setGameValues({
                ...gameValues,
                gameStart,
            });
        }
    }
    return (
        <section>
            {(gameStart) ? <p>Time: {time}</p> : ''}
        </section>
    )
}

Timer.propTypes = {
    setGameValues: pt.func,
    gameValues: pt.object,
}