import React, { useState } from 'react';


export default function Textbox(props) {

    const [text, settext] = useState("");
    const handupcase = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const ConvertintoLowerCase = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
    }
    const Cleartext = () => {
        let newtext = "";
        settext(newtext);
    }
    const Repeat = () => {
        let newtext = text.repeat(3);
        settext(newtext);
    }

    const handdle = (event) => {
        settext(event.target.value);

    }
    return (
        <>
            <div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">{props.heading}</label>
                    <textarea className="form-control my-4" id="text" value={text} onChange={handdle} rows="9"></textarea>


                    <button className="btn btn-primary  my-4 mx-3" onClick={handupcase}>Upper Case</button>
                    <button className="btn btn-primary  my-4 mx-3" onClick={ConvertintoLowerCase}>Lower Case</button>
                    <button className="btn btn-primary  my-4 mx-3" onClick={Cleartext}>Clear Text</button>
                    <button className="btn btn-primary  my-4 mx-3" onClick={Repeat}>Repeat text</button>

                </div>



            </div>
            <div className="container my-3">
                <h1>Text Summary</h1>
                <p>
                    Your character count is : {text.length}
                    <br />
                    Your word count is :{text.split(" ").length}
                    <br />
                    How much time you take to read this: {0.008 * text.split(" ").length} Minuts
                </p>

            </div>
        </>

    )

}


