import React from 'react';
import Data from './data.js';
import "./styles/styles.css";

const Section = ({ title, content, activeTab }) => {
    return (
        <div className="content-section">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default Section;
