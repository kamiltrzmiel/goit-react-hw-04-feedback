import css from './statistics.module.css';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    posPerc
}) => (
    <div className={css.statistics}>
        <p>
            Good: <span className={css.digit}> {good} </span>
        </p>
        <p>
            Neutral: <span className={css.digit}> {neutral} </span>
        </p>
        <p>
            Bad: <span className={css.digit}> {bad} </span>
        </p>
        <p>
            Total: <span className={css.total}> {total} </span>
        </p>
        <p>
            Positive feedback: <span className={css.digit}> {posPerc}% </span>
        </p>
    </div>
)