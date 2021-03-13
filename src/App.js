import React from "react";
import ReactMde from "react-mde";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "react-mde/lib/styles/css/react-mde-all.css";
import "./App.css";

function App() {
  const [value, setValue] = React.useState("Hello World");
  const [selectedTab, setSelectedTab] = React.useState("write");
  const [fileUrl, setFileUrl] = React.useState(null);
  const textareaRef = React.useRef(null);

  React.useEffect(() => {
    if (textareaRef !== null && textareaRef.current !== null) {
      resize(textareaRef.current);
    }
  }, []);

  const resize = (htmlElement) => {
    htmlElement.style.height = "300px";
    htmlElement.style.height = `${htmlElement.scrollHeight}px`;
  };

  const renderers = {
    image: ({ alt, src, title }) => (
      <img alt={alt} src={src} title={title} style={{ maxWidth: 400 }} />
    ),
    code: Highlight,
  };

  function handleTab(e) {
    if (e.key === "Tab") {
      e.preventDefault();

      const { selectionStart, selectionEnd } = e.target;

      const newValue =
        value.substring(0, selectionStart) +
        "  " +
        value.substring(selectionEnd);

      setValue(newValue);
      if (textareaRef.current) {
        textareaRef.current.value = newValue;
        textareaRef.current.selectionStart = textareaRef.current.selectionEnd =
          selectionStart + 2;
      }
    }
  }

  function handleClick(e) {
    e.preventDefault();
  }

  const save = async function* (data) {
    // Promise that waits for "time" milliseconds
    const wait = function (time) {
      return new Promise((a, r) => {
        setTimeout(() => a(), time);
      });
    };

    // Upload "data" to your server
    // Use XMLHttpRequest.send to send a FormData object containing
    // "data"
    // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

    await wait(2000);
    // yields the URL that should be inserted in the markdown
    yield "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSy2-czP60WHaXWRHhCDnXLqNVe67kxDFfnMSCLL4yuZ9mjqqjY9ObLjMOQwUijpP8dO4MZHN8_95SN1JqLkGE";
    await wait(2000);

    // returns true meaning that the save was successful
    return true;
  };

  return (
    <div>
      {/* <h1>App component</h1> */}
      <input
        type="file"
        onChange={(e) => {
          console.log(e.target.files[0]);
          setFileUrl(e.target.files[0]);
        }}
      />
      <ReactMde
        value={value}
        style={{ color: "red" }}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(
            <ReactMarkdown source={markdown} renderers={renderers} />
          )
        }
        loadingPreview="Preview is being prepared"
        // loadSuggestions={loadSuggestions}
        // classes={{
        //   textArea: onkeydown((e) => handleTab(e)),
        // }}
        childProps={{
          writeButton: {
            tabIndex: 4,
          },
          textArea: {
            onKeyDown: (e) => {
              handleTab(e);
              const target = e.target;
              resize(target);
            },
          },
        }}
        refs={{
          textarea: textareaRef,
        }}
        paste={{
          saveImage: save,
        }}
      />
      <button type="submit" onClick={(e) => handleClick(e)}>
        Submit
      </button>
    </div>
  );
}

function Highlight({ value, langauge }) {
  return (
    <SyntaxHighlighter language={langauge ?? null} style={docco}>
      {value ?? ""}
    </SyntaxHighlighter>
  );
}

export default App;
