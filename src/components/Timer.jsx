import pt from 'prop-types';
import { useState } from 'react';

export default function Timer({ isStart, baseTime }) {
    const [time, setTime] = useState(baseTime);
    if (isStart) {
        const runTime = setTimeout(function () {
            setTime(time - 1)
        }, 1000)
        if (time == 0) clearTimeout(runTime)
    }
    return (
        <section>
            {(isStart) ? <p>Time: {time}</p> : ''}
        </section>
    )
}
Timer.propTypes = {
    isStart: pt.bool,
    baseTime: pt.number,
}