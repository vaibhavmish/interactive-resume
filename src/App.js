import React, { useState } from 'react';
import './components/styles/styles.css';
import Section from './components/section.js';
import Data from './components/data.js';
import TabNavigation from "./components/TabNavigation.js";

function App() {
  const [activeTab, setActiveTab] = useState('about');
  
  const renderSection=()=>{
    const sectionData=Data[activeTab];
    return <Section title={sectionData.title} content={sectionData.content} activeTab={activeTab} />
  }


  return (
    <div className="app-container">
      <h1>Vaibhav Mishra <span className="interactive">Interactive Resume</span></h1>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content-section">
      {renderSection()}
      </div>
    </div>
  );
}

export default App;
