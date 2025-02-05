import React, {useState} from 'react'
import { toast } from 'react-toastify';
// import DOMPurify from 'dompurify';

export default function TextForm(props) {


    const handleUpClick = ()=>{
        // console.log("UpperCase Was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert('Converted to upperCase!','success');
        toast.success('Converted to upperCase!');   
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase Was Clicked");s
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert('Converted to lowerCase!','success');
        toast.success('Converted to lowerCase!');   
    }
    const handleClearClick = ()=>{
        let newText  = '';
        setText(newText);
        props.showAlert('Text Cleared!','success');
    }
    const handleCapitalizedClick = ()=>{
        let newText = text.split(' ').map(text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()).join(' ');
        setText(newText);
        props.showAlert('Converted to Capitalized!','success');
    } 
    const handleReverseClick = ()=>{
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert('Converted to reverseCase!','success');
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed extra spaces!','success');
    }
    const handleSentenceClick = ()=>{
        let newText = text.split(/([.?!]\s*)/).map((text) => {return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        }) 
        .join('');
        setText(newText);
        props.showAlert('Converted into Sentence form','success');
    }

    const handleCopyText =()=>{
      
        navigator.clipboard.writeText(text);
        // props.showAlert('Copied to clipboard!','success');
        toast.success('Copied to clipboard!');   
    }

    const handleOnChnage = (event)=>{
        // console.log("Onchange function is call");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div>
            <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}  </h1>
            <div className="mb-3">
                {/* <label for="myBox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#695585':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
                <button disabled={text.length===0} className='btn btn-dark my-3 mx-1' onClick={handleUpClick}>Convert to upperCase</button>
                <button disabled={text.length===0} className='btn btn-dark my-3 mx-1' onClick={handleLoClick}>Convert to lowerCase</button>
                <button disabled={text.length===0} className='btn btn-dark my-3 mx-1' onClick={handleCapitalizedClick}>Capitalized Case</button>
                <button disabled={text.length===0} className='btn btn-dark my-3 mx-1' onClick={handleReverseClick}>Reverse Case</button>
                <button disabled={text.length===0} className='btn btn-dark my-3 mx-1' onClick={handleSentenceClick}>Sentence Case</button>
                <button disabled={text.length===0} className='btn btn-dark my-3 mx-1' onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className='btn btn-dark my-3 mx-1' onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-dark my-3 mx-1' onClick={handleClearClick}>Clear Text</button>
            </div>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p><b>
                {text.trim().split(/\s+/).filter(word => word !== "").length} words, 
                {text.length} characters
            </b></p>
            <p><b>{0.008 * text.split(" ").filter(word => word !== "").length} Minutes read</b></p>
            <h2>Preview</h2>
            <p>{text.length>0?text:" Nothing to preview "}</p>
        </div>
        </>
    )
}
