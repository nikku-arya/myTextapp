import React, {useState} from 'react'

export default function Text(props) {
    const convert1 = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    const convert2 = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const convert3 = () => {
        let newText = '';
        setText(newText);
    }
    const [text, setText] = useState('');
  return (
      <>
        <div className='container' style={{color: props.mode==='light'?'black':'white',}}>
            <div className='container '>
        
                <h1>{props.heading}</h1>
                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='light'?'black':'white',}} ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={convert1}>Convert to Uppercase</button>
                <button disabled={text.length===0}className="btn btn-primary mx-2 my=1" onClick={convert2}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my=1" onClick={convert3}>Cleat text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Enter your text to preview'}</p>
            </div>
        </div>
    </>
  )
}
