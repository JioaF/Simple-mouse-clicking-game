import pt from 'prop-types';

export default function Box({
    value,
    index,
    active,
    setGameValues,
    gameValues,
}) {
    const handleClick = function () {
        let score = gameValues.score + 1
        setGameValues(
            {
                ...gameValues,
                score
            }
        );
    }
    return (
        <button
            className={`h-20 w-20 border border-slate-600 flex flex-col justify-center items-center ${(active) ? 'bg-green-600' : 'hover:bg-green-400'} text-red-600`}
            onClick={handleClick}
            data-index={index}
            disabled={!gameValues.gameStart}
        >
            {value}
        </button >
    );
}

Box.propTypes = {
    value: pt.string,
    index: pt.number,
    active: pt.bool,
    setGameValues: pt.func,
    gameValues: pt.object,
}