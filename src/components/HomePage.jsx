import React from "react";
import smart from '../images/Screenshot 2025-01-28 162450.png'
import alexa from '../images/Screenshot 2025-01-28 162458.png'
import headset from '../images/Screenshot 2025-01-28 162506.png'
import { useNavigate } from "react-router-dom";
import '../styles/homepage.css'
export const productlist = [
    {
        id: 1,
        image:smart,
        cardTitle:"All pro smart",
    },
    { 
        id: 2,
        image: alexa,
        cardTitle:"Amazon alexa",
    },
    { 
        id: 3,
        image: headset,
        cardTitle:"Headset Gamer",
    },
]   
function HomePage(){
    
    return(
        <div className="all">
            {productlist.map((item) => (
                <div className="cont" key={item.id}>
                <div><img src={item.image} className="cont1"/></div>
                <div>{item.cardTitle}</div>
                <button type="button" className="button1" 
                onClick={()=>handleNavigate(item.id)} >View</button>
                
            </div>
            
            
            ))}
        </div>
    )
        
}
export default HomePage;