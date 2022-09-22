import React from "react";
import "./Products/ItemListContainer.css"

function ItemCount(props){
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
            <button onClick={handleSubstract} className="Button">-</button>
            <span className="Count">{count}</span>
            <button onClick={handleAdd} className="Button">+</button>
        </div>
    
    );
}

export default ItemCount;