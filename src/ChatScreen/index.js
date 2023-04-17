import React from "react";
import styles from "./styles.module.css";
import { getButtonTexts } from "../LanguageSelector";
import IframeEmbed from "./IframeEmbed";

const ChatScreen = ({ onPrevious, language }) => {
  const buttonTexts = getButtonTexts(language);
  const iframe = `<iframe class="${styles.iframeContainer}" src='https://webchat.botframework.com/embed/darijagenie?s=C8G9pPl3IoU.CzUIPkAcuA-RDndfDqFhJTqqnBZ01L9V1dG4tox4ndM'></iframe>`;

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <IframeEmbed iframe={iframe} />
      </div>
      <div className={styles.buttonContainerChatScreen}>
        <button className="button" onClick={onPrevious}>
          {buttonTexts.previous}
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
