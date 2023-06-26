import React from 'react';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.btnSection}>
            {options.map((btnName, index) => (
                <button className={css.btn} key={index} onClick={() => onLeaveFeedback(btnName)}
                >{btnName}
                </button>
            ))}
        </div>
    );
};
export default FeedbackOptions;