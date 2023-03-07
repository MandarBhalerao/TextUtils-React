import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success")
    }
    const handleLoClick = () => {
        // console.log("lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success")

    }
    const handleTitClick = () => {
        // title case function
        let newText = text.toLowerCase();
        let arr = newText.split(" ");
        let n = arr.length;
        let temp_word;

        for (let index = 0; index < n; index++) {
            // const element = array[index];
            temp_word = arr[index].charAt(0).toUpperCase() + arr[index].slice(1);
            arr[index] = temp_word;
              
        }
        newText = arr.join(" ");
        setText(newText);
        props.showAlert("Converted to Title Case", "success")

    }

    const handleClearClick = () => {
        // clear text button
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success")

    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    let myStyle = { 
        color: (props.mode==='dark' || 
        props.mode==='green' || props.mode==='red' || props.mode==='purple') ? 'white':'black'
    }

    let var_color;
    if (props.mode === 'green') {
        var_color = '#3cdc21'
    }
    else if (props.mode ==='red') {
        var_color = '#ff3c8f'
    }
    else if (props.mode === 'purple') {
        var_color = '#f026c9'
    }
    let btnStyle = {
        backgroundColor: var_color
    }




    const [text, setText] = useState("Enter text here");
    // text and setText are initialized using the useState hook
    // the value of text is by default set to 'Enter text here2'
    // setText is function which is used to update the text anytime

    // text = "new text"; // wrong way to change the state
    // setText("new text");  // correct way to change the state

    // this is counting the words without extra white spaces
    let text_arr = text.split(" ");
    let n = text_arr.length;
    let words_len = n;
    for (let index = 0; index < n; index++) {
        // const element = array[index];
        if ((text_arr[index] == "" ) || (text_arr[index] == " " )){
            words_len--;
        }
    }

    return (
        <>
        {/* <div className='container' style={{color: (props.mode==='dark' || props.mode==='green' || props.mode==='red' || props.mode==='purple') ? 'white':props.bgcolor}}> */}
        <div className='container' style={myStyle}>

            <h1 >{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange = {handleOnChange} 
                style={{backgroundColor:(props.mode==='dark' || 
                props.mode==='green' || props.mode==='red' || props.mode==='purple') ? 'grey':'white', 
                color: (props.mode==='dark' || 
                props.mode==='green' || props.mode==='red' || props.mode==='purple') ? 'white':'#042743'}} id="myBox" rows="8"></textarea>

                {/* onChange event is used for typing in the box*/}
            </div>

            <button className="btn btn-primary mx-1" style={btnStyle} onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" style={btnStyle} onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" style={btnStyle} onClick={handleTitClick}>Convert to TitleCase</button>
            <button className="btn btn-primary mx-1" style={btnStyle} onClick={handleClearClick}>Clear Text</button>
        </div>
        {/* <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'#042743'}}> */}
        <div className="container my-3" style={myStyle}>

            <h1>Your text summary</h1>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <p>{words_len} words and {text.length} characters</p>

            <p>{0.008 * words_len} Minutes Read</p>
            <h2>Preview</h2>
            <p>{words_len>0 ? text : "Enter something in the textbox to preview it here"}</p>
        </div>
        </>
    )
}
