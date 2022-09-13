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
        if (count > 1){
            setCount(count - 1);
        }
    }

    return (
        <div>
            <button onClick={handleAdd} className="Button">+</button>
            <span className="Count">{count}</span>
            <button onClick={handleSubstract} className="Button">-</button>
            <div>
                <button className="Carrito">Agregar al carrito</button>
            </div>
        </div>
    
    );
}

export default ItemCount;