import { useState } from "react";

function InputBox({ text, onTextChange }) {
  return (
    <input
      value={text}
      onChange={onTextChange}
      placeholder="Type something..."
    />
  );
}

function DisplayText({ text }) {
  return <h2>You typed: {text}</h2>;
}

export default function App() {
  const [text, setText] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>Sharing State Example</h1>

      <InputBox text={text} onTextChange={handleTextChange} />

      <DisplayText text={text} />
    </div>
  );
}
