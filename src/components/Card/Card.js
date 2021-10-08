import React,{useState} from 'react'
import './Card.css'

function Card(props) {
    let { item } = props;
    const [x,setX] = useState(true)
    const [y,setY] = useState(true)
    const [z,setZ] = useState(true)
    const [a,setA] = useState(true)
    const [cntx,setCntx] = useState(0)
    const [cnty,setCnty] = useState(0)
    const [cntz,setCntz] = useState(0)
    const [cnta,setCnta] = useState(0)
    const [cnt,setCnt] = useState(0)
    const [user,setUser] = useState({sno:'',item:'',qty:''})

    function changey(){
        setY(false)
    }
    function changex(){
        setX(false)
    }
    function changez(){
        setZ(false)
    }
    function changea(){
        setA(false)
    }
    return (
        <>
        <div>
            <img id = "img1" src = "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png" />
           
        </div>
        <span>
            <div>
            <img id = "img2" src = "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png" /> 
            </div>
        </span>
        <span>
            <div>
            <img id = "img3" src = "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png" /> 
            </div>
        </span>
        <div>
            <img id = "img4" src = "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png" /> 
            </div>
        
            <h4 id = "h1">Food Card</h4>
            <h4 id = "h2">Travel Card</h4>
            <h4 id = "h3">Epic Card</h4>
            <h4 id = "h4">Happay Premium Card</h4>
            <h2 id = "b1"><b>$ 21.00</b></h2>
            <h2 id = "b2"><b>$ 20.00</b></h2>
            <h2 id = "b3"><b>$ 40.00</b></h2>
            <h2 id = "b4"><b>$ 40.00</b></h2>
            {x ?
            <button id = "btn1" onClick = {changex}>Add to cart</button> :
            <div id = "btn2" class = "btn-group">
            <button id = "bt1" onClick = {() => {setCntx(cntx+1); setCnt(cnt+1);setUser({sno:cnt,item:"Food Card",qty:cntx})}}>+</button>
            <button id = "bt2">{cntx}</button>
            <button id = "bt3" onClick = {() => cntx>=1 ? setCntx(cntx-1):0}>-</button>
            </div>
            }
            {y ?
            <button id = "btn3" onClick = {changey}>Add to cart</button> :
            <div id = "btn4" class = "btn-group">
            <button id = "bt4" onClick = {() => setCnty(cnty+1)}>+</button>
            <button id = "bt5">{cnty}</button>
            <button id = "bt6" onClick = {() => cnty>=1 ? setCnty(cnty-1):0}>-</button>
            </div>
            }
            {z ?
            <button id = "btn5" onClick = {changez}>Add to cart</button> :
            <div id = "btn6" class = "btn-group">
            <button id = "bt7" onClick = {() => setCntz(cntz+1)}>+</button>
            <button id = "bt8">{cntz}</button>
            <button id = "bt9" onClick = {() => cntz>=1 ? setCntz(cntz-1):0}>-</button>
            </div>
            }
            {a ?
            <button id = "btn7" onClick = {changea}>Add to cart</button> :
            <div id = "btn8" class = "btn-group">
            <button id = "bt10" onClick = {() => setCnta(cnta+1)}>+</button>
            <button id = "bt11">{cnta}</button>
            <button id = "bt12" onClick = {() => cnta>=1 ? setCnta(cnta-1):0}>-</button>
            </div>
            }
            
    
        </>
    )
}

export default Card;
