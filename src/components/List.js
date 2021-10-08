import React,{useState} from 'react'
import Card from './Card/Card.js'

function List(props) {
    

    // React.useEffect(async () => {
    //     // fetch('https://demo7242716.mockable.io/products')
    //     //     .then(res => res.json())
    //     //     .then(data => setData(data.products))
    
    //     let res = await fetch("https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/items.json");
    //     let data = await res.json();
    //     console.log(data);
    //     setData(data);
    //   }, []);
    

    return (
        <div className="each-item-wrapper">
            <Card />
        </div> 
    )
}

export default List;
