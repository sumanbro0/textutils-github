import React, { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to Uppercase", "SUCCESS")

  };
  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to Lowercase", "SUCCESS")
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Cleared", "SUCCESS")

  };
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "SUCCESS")

  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    console.log(newText)
    setText(newText.join(" "))
    props.showAlert("Extra space removed", "SUCCESS")

  }

  return (
    <>
      <div>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "dark" ? "gray" : "white", color: props.mode === "light" ? "black" : "white" }
          } onChange={handleOnChange} id="myBox" rows="13">
          </textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary" onClick={handleLowClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary..</h2>
        <p>your text has {(text.split(" ").length) - 1}words and {text.length} characters</p>
        <p>it may take you {0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text in textbox to preview it here..."}</p>
      </div>
    </>
  )
}
