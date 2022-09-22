import React from "react";
import Item from "../Products/Item";
import "../Products/ItemListContainer.css"


function ItemDetail(item) {
    return(
        <div className="mainContainer">
                    <Item
                        key={item.id}
                        price={item.price}
                        title={item.title}
                        img={item.img}
                        category={item.category}
                        stock={item.stock}
                    />  
        </div>
    )
}

export default ItemDetail;