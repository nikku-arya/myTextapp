import React from 'react'

export default function About(props) {

  let myStyle = {
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#a64dff':'white'
  }
    
    /*const [myStyle, setMystyle] = useState(
        {
            color: 'black',
            backgroundColor: 'white',
        }
    )*/

    /*const [myBtn, setMybtn] = useState('Enable dark mode');

    const toggleBtn = () => {
        if(myStyle.color === 'white'){
            setMystyle({
                color: 'black',
                backgroundColor: 'white',
            })
            setMybtn('Enable dark mode');
        }
        else {
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white',
            })
            setMybtn('Enable light mode');
        }
    }*/

  return (
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>About us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        myTextapp gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        myTextapp is a free character counter tool that provides instant character count and word count statstics for a given text. myTextapp reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software works in a web browser such as chrome, firefox, Internet Explorer, Opera. It suits to count character in facebook, blog, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
{/*<button className="btn btn-primary my-2" onClick={toggleBtn}>{myBtn}</button>*/}
    </div>
  )
}
