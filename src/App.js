import React,{useState} from 'react'
import './App.css';
import List from './components/List'
import Summary from './components/Summary/Summary'
import logo from './images/carts.png';


function App() {

  const [c,setC] = useState(true)
  function change(e){
     setC(false)
  }
  return (
       <>
           <header>
           <img onClick = {change}src={logo} alt="img" />
           </header>
           { c ?
           <div>
             <List />
           </div>
           : <Summary pass = {setC}/>
           }
       </>


  );
}

export default App;
