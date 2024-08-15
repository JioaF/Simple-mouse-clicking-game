import { useState } from "react";
import Box from "./Box";
import pt from 'prop-types';


export default function Board({
    setGameValues,
    gameValues
}) {
    const [boxes, setBoxes] = useState(Array.from({ length: gameValues.totalBox }, () => new Object({
        value: '',
        isActive: false,
    })));
    return (
        <section className="m-auto w-1/3 h-auto flex justify-center flex-row flex-wrap">
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