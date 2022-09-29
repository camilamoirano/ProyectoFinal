import React from "react";
import "./Products/ItemListContainer.css"
import Button from "./Button/Button";

function ItemCount(props, onAddToCart){
    const [count, setCount] = React.useState(props.initial);

    function handleAdd() {
        if (count < props.stock){
            setCount(count + 1);
        }
    }

    function handleSubstract(){
        if (count > props.initial){
            setCount(count - 1);
        }
    }

    return (
        <div>
            <div>
                <Button onClick={handleSubstract}>-</Button>
                <span className="Count">{count}</span>
                <Button onClick={handleAdd}>+</Button>
            </div>
            <div>
                <Button onClick={props.onAddToCart}> Agregar al carrito </Button>
            </div>
        </div>    
    );
}

export default ItemCount;