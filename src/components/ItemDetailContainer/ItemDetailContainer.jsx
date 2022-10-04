import React, {useState, useEffect} from "react";
import { getSingleItem } from "../../services/mockAPI";
import "bootstrap/dist/css/bootstrap.css"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx"

function ItemDetailContainer (){
    let [data, setData] = useState ({});

    const { id } = useParams();

    useEffect(() => {
        getSingleItem(id).then((respuestaDatos) => setData(respuestaDatos));
    }, [id]);

    return (
        <div>
                <div className="mainContainer">
                {data.length < 0 ? (
                    <h2>Cargando...</h2>
                ) : (
                    <ItemDetail item= {data}/>
                )}
                </div>
        </div>
    )
}

export default ItemDetailContainer;