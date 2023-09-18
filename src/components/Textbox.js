import React, { useState } from 'react';


export default function Textbox(props) {

    const [text, settext] = useState("");
    const handupcase = () => {
        console.log("" + text);
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const handdle = (event) => {
        console.log("Onchanged");
        settext(event.target.value);

    }
    return (
        <div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="text" value={text} onChange={handdle} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handupcase}>ConverttoUpperCase</button>


        </div>
    )
}
