import React from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";


const ExplanationPage = ({ onNext, onPrevious, language }) => {
  const buttonTexts = getButtonTexts(language);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>DarijaGenie</div>
      <div className={styles.info}>
        {/* Add your text and table (image) here */}
      </div>

      <div className={styles.buttonContainerExplanationPage} >
        <button className="button" onClick={onPrevious}>{buttonTexts.previous}</button>
        <button className="button" onClick={onNext}>{buttonTexts.next}</button>

      </div>

    </div>
  );
};

export default ExplanationPage;
