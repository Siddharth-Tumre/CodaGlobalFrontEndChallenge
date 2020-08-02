import React from "react"
import CardComponent from "./CardComponent"

const DishDetail = ({dishes}) => {
    console.log(dishes)
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', width:'920px', margin:'auto'}}>
                {dishes.map(dish => (
                    <CardComponent dish={dish}/>
                ))}
        </div>
    )
}

export default DishDetail