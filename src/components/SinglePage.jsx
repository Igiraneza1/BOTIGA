import React from "react";
import { useParams } from "react-router-dom";
import { productlist } from "./HomePage";
import { newProducts } from "./Home";
function SinglePage(){
    const {id} = useParams();
    console.log('productlist', id);
    const card = newProducts.find((card)=>card.id==id);
    return(
        <div>
           <div>{card.image}</div>
           <div><img src={card.image}/></div>
        </div>
    )
}
export default SinglePage;