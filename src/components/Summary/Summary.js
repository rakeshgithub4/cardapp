import React,{useState} from 'react'
import './Summary.css'


function Summary(props) {
  const [item,setItem] = useState(0)

    function show(){
      props.pass(true)
    }


    return (
        <>
        <div>
           <button id = "back" onClick = {show}>Back to Home</button> 
          
        </div>
        <h2>Order Summary ({item} Items)</h2>
        <div id = "table">
            <table>
                <tr>
                    <th><h3 id = "t1">S.NO</h3></th>
                    <th><h3 id = "t2">ITEMS</h3></th>
                    <th><h3 id = "t3">QTY</h3></th>
                </tr>
            </table>
        </div>

        </>
    )
}

export default Summary;
