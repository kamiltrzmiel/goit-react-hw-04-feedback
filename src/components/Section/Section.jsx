import React from 'react';
import css from './section.module.css';

const Section = ({title, children }) => {
    return (
        <section className={css.section}>
            <h1>{title}</h1>
            {children}
        </section>
    );
};

export default Section;