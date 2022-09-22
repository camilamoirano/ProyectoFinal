import React, {useState, useEffect} from "react";
import { getSingleItem } from "../../services/mockAPI";
import "bootstrap/dist/css/bootstrap.css"
import ItemDetail from "./ItemDetail";
import Item from "../Products/Item";


function ItemDetailContainer (){
    let [data, setData] = useState ({});

    useEffect(() => {
        getSingleItem(2).then((respuestaDatos) => {
            setData(respuestaDatos);
        });
    }, []);

    return (
        <div>
                <div className="mainContainer">
                    <Item
                        key={data.id}
                        price={data.price}
                        title={data.title}
                        img={data.img}
                        category={data.category}
                        stock={data.stock}
                    />
                </div>
        </div>
    )
}

export default ItemDetailContainer;