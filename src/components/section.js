import React from 'react';
import Data from './data.js';
import "./styles/styles.css";

const Section = ({ title, content, activeTab, darkMode }) => {
    console.log(darkMode);
    return (
        <div className={darkMode ? "content-section-dark": "content-section"}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default Section;
