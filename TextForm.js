import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');
    // setText('new text');
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        // setText('You have clicked on handleUpClick');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to uppercase!", "success");
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to lowercase!", "success");
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared!", "success");
    }
    const handleCopyClick = () =>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied!", "success");
    }
    const handleSpacesClick = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been eliminated!", "success");
    }
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear the text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleSpacesClick}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in text box to preview it here"}</p>
    </div>
    </>
  )
}
