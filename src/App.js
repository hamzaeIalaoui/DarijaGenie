import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import IntroPage from "./IntroPage";
import ExplanationPage from "./ExplanationPage";
import ChatScreen from "./ChatScreen";
import LanguageSelector from "./LanguageSelector";

import clickSound from "./clickSound.wav";
import magicSound from "./magicSound.mp3";

const App = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [language, setLanguage] = useState("Darija_ar");
  const [rotatingText, setRotatingText] = useState("Grant my language wishes");

  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.addEventListener("animationend", (e) => {
        if (e.animationName === "genieAppearing") {
          logoRef.current.classList.remove("logoAppearing");
          logoRef.current.classList.add("logoFloating");
        }
      });
    }
  }, [startAnimation]);

 
  useEffect(() => {
    const texts = [
      "Grant my language wishes",
      "Exaucez mes désirs linguistiques",
      "لبي ليا امنياتي اللغوية",
      "Lebbi lia omniati alughawia",
    ];
  
    let currentIndex = 0;
  
    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setRotatingText(texts[currentIndex]);
    }, 2300);
  
    return () => clearInterval(textInterval);
  }, []);

  

  const handleEnter = () => {
    const magicAudio = new Audio(magicSound);
    magicAudio.play();
    setShowOverlay(false);
    setStartAnimation(true);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    const audio = new Audio(clickSound); // create new Audio instance
    audio.play(); // play the click sound
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
    const audio = new Audio(clickSound); // create new Audio instance
    audio.play(); // play the click sound
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="App">
      {showOverlay && (
        <div className="overlay">
  <div className="enterButtonContainer">
    <button className="enterButton" onClick={handleEnter}>
      {rotatingText}
    </button>
    <div className="sparkle"></div>
    <div className="sparkle"></div>
    <div className="sparkle"></div>
    <div className="sparkle"></div>
    <div className="sparkle"></div>
    <div className="sparkle"></div>
  </div>
 


        </div>
      )}

      {startAnimation && (
        <div>
          <div className={`container backgroundHeader`}>
            <img
              ref={logoRef}
              className={`logo logoAppearing`}
              src="Logo.png"
              alt="DarijaGenie Logo"
            />
            <img className="teapot" src="teapot.png" alt="Teapot" />
            <img className="shadow" src="shadow.png" alt="Shadow" />
          </div>

          <LanguageSelector onLanguageChange={handleLanguageChange} />

          {currentPage === 0 && (
            <IntroPage onNext={handleNext} language={language} />
          )}

          {currentPage === 1 && (
            <ExplanationPage
              onNext={handleNext}
              onPrevious={handlePrevious}
              language={language}
            />
          )}

          {currentPage === 2 && (
            <ChatScreen onPrevious={handlePrevious} language={language} />
          )}
       
       </div>
  )}
</div>
);
};

export default App;