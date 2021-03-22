import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState("Random title")

  const handleClick = () => {
    if ( text === "Random title" ) {
      setText("Hello world")
    } else {
      setText("Random title")
    }
  }

  return <><h2>{text}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change text</button>
    </>;
};

export default UseStateBasics;
