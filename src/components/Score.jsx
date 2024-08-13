import pt from 'prop-types';

export default function Score({ score }) {
    return (
        <section>
            <p>Score: {score}</p>
        </section>
    )
}

Score.propTypes = {
    score: pt.number
}