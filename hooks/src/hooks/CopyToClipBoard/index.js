import { useState } from "react";
import useCopyToClipboard from "./useCopyToClipboard";

function Copy() {
  const [text, setText] = useState("");
  const [isCopied, handleCopy] = useCopyToClipboard();

  function onCopyText(text) {
    if (text) handleCopy(text);
    else {
      alert("Please type something in the box to copy");
    }
  }
  return (
    <>
      <h2>useCopyToClipboard</h2>
      <div className="copy-container">
        <input
          type="text"
          value={text}
          placeholder="Type some text here"
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={() => onCopyText(text)}>Copy to Clipboard</button>
        <span>{isCopied && "Copied!"}</span>
      </div>
    </>
  );
}

export default Copy;
