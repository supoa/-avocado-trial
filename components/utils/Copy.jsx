import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import { useEffect } from "react";

const Copy = ({ text }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      copied && setCopied(false);
    }, 2000);
  }, [copied]);


  return (
    <div>
      <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
        {!copied ? (
          <ContentCopyIcon
            style={{
              cursor: "pointer",
              fontSize: "150%",
            }}
          />
        ) : (
          <DoneIcon
            style={{
              cursor: "pointer",
              fontSize: "150%",
            }}
          />
        )}
      </CopyToClipboard>
    </div>
  );
};

export default Copy;
