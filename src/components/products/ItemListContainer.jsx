import React, {useState} from "react";
import { useEffect } from "react";
import "./ItemListContainer.css"
import getItems, { getItemsByCategory} from "../../services/mockAPI";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props){
    let [data, setData] = useState([]);
    const { cat } = useParams();

    useEffect(() =>{
        if ( cat === undefined ){
            getItems().then((respuestaDatos) => setData(respuestaDatos));
        }
        else {
            getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
        }
    },  [cat]);

    return (
        <div className="Body">
            <h1 className="greeting">{props.greeting}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer;