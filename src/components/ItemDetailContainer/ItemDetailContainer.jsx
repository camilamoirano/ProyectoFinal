import React, {useState, useEffect} from "react";
import { getSingleItem } from "../../services/mockAPI";
import "bootstrap/dist/css/bootstrap.css"
import { useParams } from "react-router-dom";
import Card from "./Card";


function ItemDetailContainer (){
    let [data, setData] = useState ({});

    const { id } = useParams();

    useEffect(() => {
        getSingleItem(id).then((respuestaDatos) => setData(respuestaDatos));
    }, [id]);

    return (
        <div>
                <div className="mainContainer">
                    <Card
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