import Box from "./Box";
import pt from 'prop-types';


export default function Board({
    setGameValues,
    gameValues
}) {

    // temporary code
    let boxTotal = 10;
    // temporary code
    const boxes = Array.from({ length: boxTotal }, () => new Object({
        value: '',
        isActive: false,
    }));
    // boxes[0].isActive = true
    return (
        <section className="m-auto w-1/3 h-auto flex justify-center flex-row flex-wrap gap-1">
            {boxes.map((box, i) => {
                return <Box
                    value={box.value}
                    index={i}
                    active={box.isActive}
                    key={i}
                    setGameValues={setGameValues}
                    gameValues={gameValues}
                />;
            })}
        </section>
    );
}

Board.propTypes = {
    setGameValues: pt.func,
    gameValues: pt.object
}