import React from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import snarkdown from "snarkdown";

function Markdown() {
  const [input, setInput] = React.useState("");
  const [save, setSave] = React.useState([]);
  const textTab = React.useRef();

  const renderers = {
    image: ({ alt, src, title }) => (
      <img alt={alt} src={src} title={title} style={{ maxWidth: 475 }} />
    ),
    code: Highlight,
  };

  function handleTab(e) {
    if (e.key === "Tab") {
      e.preventDefault();

      const { selectionStart, selectionEnd } = e.target;

      const newValue =
        input.substring(0, selectionStart) +
        "  " +
        input.substring(selectionEnd);

      setInput(newValue);
      if (textTab.current) {
        textTab.current.value = newValue;
        textTab.current.selectionStart = textTab.current.selectionEnd =
          selectionStart + 2;
      }
    }
  }

  function anyFunc(e) {
    e.preventDefault();
    setSave((oldArr) => [...save, input]);
  }

  return (
    <form className="App">
      <textarea
        className="textarea"
        // cols="30"
        // rows="10"
        ref={textTab}
        value={input}
        onKeyDown={(e) => {
          handleTab(e);
        }}
        onChange={(e) => setInput(e.target.value)}
      />
      <ReactMarkdown
        source={input}
        escapeHtml={false}
        className="markdown"
        renderers={renderers}
      />
      <button type="submit" onClick={(e) => anyFunc(e)}>
        Submit
      </button>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log(save);
          let html = snarkdown(input);
          console.log(html);
        }}
      >
        Input Display
      </button>
    </form>
  );
}

function Highlight({ value, langauge }) {
  return (
    <SyntaxHighlighter language={langauge ?? null} style={docco}>
      {value ?? ""}
    </SyntaxHighlighter>
  );
}

// function imgRender() {

// }

export default Markdown;
