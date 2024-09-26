import React, { useState } from 'react';
import './components/styles/styles.css';
import Section from './components/section.js';
import Data from './components/data.js';
import TabNavigation from "./components/TabNavigation.js";

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [darkMode, setDarkMode] = useState(false);
  const renderSection=()=>{
    const sectionData=Data[activeTab];
    return <Section title={sectionData.title} content={sectionData.content} activeTab={activeTab} darkMode={darkMode}/>
  }


  return (
    <div className={!darkMode ?"app-container":"app-container-dark"}>
      <div className="header">
      <h1>Vaibhav Mishra <span className="interactive">Interactive Resume</span></h1>
      <button onClick={()=>setDarkMode(darkMode?false:true)}>{darkMode ? "Light Mode":"Dark Mode"}</button>
      </div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={!darkMode? "content-section":"content-section-dark"}>
      {renderSection()}
      </div>
    </div>
  );
}

export default App;
