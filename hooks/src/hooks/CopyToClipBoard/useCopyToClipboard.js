import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";

export default function useCopyToClipboard() {
  const [isCopied, setCopied] = useState(false);

  // After 5 secs don't show "Sopied text" by making it false
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  }, [isCopied]);

  function handleCopy(text) {
    if (typeof text === "string" || typeof text === "number") {
      copy(text.toString());
      setCopied(true);
    } else {
      setCopied(false);
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
      );
    }
  }

  return [isCopied, handleCopy];
}
