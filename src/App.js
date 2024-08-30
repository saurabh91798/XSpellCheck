import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const SpellCheckApp = () => {
  const [inputText, setInputText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase(); 
    setInputText(inputValue);

    const words = inputValue.split(' ');

    for (const word of words) {
      if (customDictionary[word]) {
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }

    setCorrection('');
  };

  return (
    <div>
      <h2>Spell Check & Auto Correction</h2>
      <textarea value={inputText} onChange={handleInputChange} placeholder='Enter Text..'/>
      {correction && <div>{correction}</div>}
    </div>
  );
};

export default SpellCheckApp;
