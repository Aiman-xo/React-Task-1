import { useState } from "react"
import App from "./App";

function Theme() {
    let [state, setState] = useState(false)

    function Change() {
        setState(prev => !prev);
        { document.body.style.backgroundColor = state ? 'black' : 'white' }
        { document.body.style.color = state ? 'white' : 'black' }
    }

    return (
        <div>
            {state ? <p>white</p> : <p>black</p>}
            <button onClick={Change} style={{
                padding: '10px',
                fontFamily: 'arial',
                borderRadius: '12px',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer'
            }}>Switch Theme</button>
        </div>




    )
}

export { Theme }