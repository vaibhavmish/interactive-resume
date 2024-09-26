import React from 'react';
import "./styles/styles.css";

const TabNavigation = ({activeTab, setActiveTab}) => {
  console.log("Rendering TabNavigation", activeTab); // Check if rendering
  return (
    <div className="tab-navigation">
      {["about", "skills", "experience", "projects", "contact"].map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
          }}
          className={activeTab === tab ? 'active-tab' : ''}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
