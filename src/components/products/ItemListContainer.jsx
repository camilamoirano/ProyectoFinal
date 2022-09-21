import React, {useState} from "react";
import { useEffect } from "react";
import "./ItemListContainer.css"
import Item from "./Item";
import getItems from "../../services/mockAPI";
import ItemCount from "../ItemCount";
import ItemList from "./ItemList";

function ItemListContainer(props){
    let [data, setData] = useState([]);
    useEffect(() =>{
        getItems().then((respuestaDatos) =>{
            setData(respuestaDatos);
        });
    },[])

    return (
        <div>
            <h1 className="greeting">{props.greeting}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer;