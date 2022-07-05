import React, { useState } from 'react'

export default function Textform(props) {

  const handleupclick = () => {
    let newText = Text.toUpperCase();
    setText(newText)
  }


  const handleonchange = (event) => {
    // console.log("onchange");
    setText(event.target.value)
  }

  const [Text, setText] = useState('');
  return (
<>
    <div className="container">
 <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleonchange} id="mytext" rows="9"></textarea>

      </div>
      
      <button className="btn btn-outline-success" onClick={handleupclick}> convert to upercase</button>
    </div>
    <div className="container my-3">
    <h1>YOUR TEXT SUMMARY...</h1>
    <p> {Text.length} Characters</p>
    

    </div>
    <div className="container my-3">
    <h2> Preview</h2>
      <p>{Text}</p>
    </div>
    </>
  )
}
