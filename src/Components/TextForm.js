import React, { useState } from 'react'

export default function TextForm(props) {
    const convertUpperCase = () => {
        console.log('upperCase Button was clicked');
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('Converted to UpperCase', 'success');
    }
    const convertLowerCase = () => {
        console.log('upperCase Button was clicked');
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert('Converted to LowerCase', 'success');

    }
    const clearText = () => {
        console.log('clearText Button was clicked');
        let newtext = "";
        setText(newtext);
        props.showAlert('Clear Text', 'success');

    }
    const handleCopy = () => {
        console.log('Copy Text Button was clicked');
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied ', 'success');

    }
    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        props.showAlert('Remove Extra Space', 'success');

    }
    // There are Two functions one is to save the text to localstorage and second will retrieve the saved text :-

    // const handleSaveClick = (e)=>{

    //     localStorage.setItem("Text",text);
    // }
    // const handleRetrieve = (e)=>{
    //     // console.log("save clicked");
    //     let a =localStorage.getItem("Text");
    //     setText(a); 
    // }




    const wordCount = (text) => {
        return text.replace(/\n/g, " ")
            .split(' ')
            .filter(text => text !== "")
            .length
    };
    const handleOnChange = (e) => {
        console.log('handleOnChange Button was clicked');
        setText(e.target.value);
    }
    const [text, setText] = useState('Enter Your Text');
    // text = 'text is updated';//ye worng way hai text ko update krne ka
    // setText('text is updated')//is type se text update hoga
    return (
        <div style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'cyan' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'cyan' }} rows="11"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={convertUpperCase} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={convertLowerCase} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={clearText} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >
                Remove Extra Space</button>


            <div className="container my-3" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'cyan' }}>
                <h2>data analyse</h2>
                <p>total no. of char {text.trim().length}</p>
                <p>total no.of word {wordCount(text)} </p>
                <p>{0.008 * wordCount(text)} Minutes read</p>



            </div>
        </div>
    )
}
